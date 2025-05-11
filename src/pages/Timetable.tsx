import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Share,
  Alert,
  Platform,
  PermissionsAndroid
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Import libraries with error handling
let RNFS = null;
let RNHTMLtoPDF = null;
let RNShare = null;

try {
  RNFS = require('react-native-fs');
} catch (error) {
  console.error('Failed to load react-native-fs:', error);
}

try {
  RNHTMLtoPDF = require('react-native-html-to-pdf');
} catch (error) {
  console.error('Failed to load react-native-html-to-pdf:', error);
}

try {
  RNShare = require('react-native-share');
} catch (error) {
  console.error('Failed to load react-native-share:', error);
}

import PageHeader from '../components/layout/PageHeader';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { timetablesData } from '../data/mockData';
import { COLORS, SPACING, SIZES, SHADOWS } from '../lib/theme';
import { Timetable as TimetableType, TimeSlot, WeekDay } from '../types';

const weekDays: WeekDay[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const levels = ["Level 100", "Level 200", "Level 300", "Level 400", "Level 500", "Level 600"];
const trimesters = ["First", "Second", "Third"];

const requestStoragePermission = async () => {
  if (Platform.OS !== 'android') {
    return true;
  }

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Storage Permission",
        message: "UDS CS Hub needs access to your storage to save timetable files.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.error("Error requesting storage permission:", err);
    return false;
  }
};

interface TimetableProps {
  hideHeader?: boolean;
}

const Timetable = ({ hideHeader = false }: TimetableProps) => {
  const [selectedLevel, setSelectedLevel] = useState<string>("Level 100");
  const [selectedTrimester, setSelectedTrimester] = useState<string>("First");
  const [hasPermission, setHasPermission] = useState<boolean>(Platform.OS !== 'android');

  useEffect(() => {
    const checkPermission = async () => {
      const permission = await requestStoragePermission();
      setHasPermission(permission);
    };

    if (Platform.OS === 'android') {
      checkPermission();
    }
  }, []);

  // Filter timetables based on selected level and trimester
  const filteredTimetable = timetablesData.find(
    tt => tt.level === selectedLevel && tt.semester === selectedTrimester
  );

  // If no timetable is found for the selected combination, show a message
  const currentTimetable = filteredTimetable || timetablesData[0];

  // Group slots by day
  const slotsByDay = weekDays.map(day => {
    return {
      day,
      slots: currentTimetable.slots.filter(slot => slot.day === day)
        .sort((a, b) => a.startTime.localeCompare(b.startTime))
    };
  });

  const generateCSV = () => {
    // CSV header
    let csvContent = "Day,Start Time,End Time,Course Code,Course Title,Room,Lecturer\n";

    // Add data rows
    weekDays.forEach(day => {
      const daySlots = currentTimetable.slots.filter(slot => slot.day === day);
      if (daySlots.length > 0) {
        daySlots.sort((a, b) => a.startTime.localeCompare(b.startTime));
        daySlots.forEach(slot => {
          // Escape any commas in text fields
          const courseTitle = slot.courseTitle.includes(',') ? `"${slot.courseTitle}"` : slot.courseTitle;
          const lecturer = slot.lecturer.includes(',') ? `"${slot.lecturer}"` : slot.lecturer;

          csvContent += `${day},${slot.startTime},${slot.endTime},${slot.courseCode},${courseTitle},${slot.room},${lecturer}\n`;
        });
      }
    });

    return csvContent;
  };

  const generateTextTable = () => {
    let timetableText = `${currentTimetable.name} - ${currentTimetable.academicYear} ${currentTimetable.semester} Trimester\n\n`;

    weekDays.forEach(day => {
      const daySlots = currentTimetable.slots.filter(slot => slot.day === day);
      if (daySlots.length > 0) {
        timetableText += `${day}:\n`;
        timetableText += "─".repeat(60) + "\n";
        timetableText += "Time         | Course      | Room  | Lecturer\n";
        timetableText += "─".repeat(60) + "\n";

        daySlots.sort((a, b) => a.startTime.localeCompare(b.startTime));
        daySlots.forEach(slot => {
          const timeSlot = `${slot.startTime}-${slot.endTime}`;
          const course = `${slot.courseCode} (${slot.courseTitle.substring(0, 20)}${slot.courseTitle.length > 20 ? '...' : ''})`;
          timetableText += `${timeSlot.padEnd(13)} | ${course.padEnd(12)} | ${slot.room.padEnd(6)} | ${slot.lecturer}\n`;
        });
        timetableText += "─".repeat(60) + "\n\n";
      }
    });

    return timetableText;
  };

  const generateHTML = () => {
    let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${currentTimetable.name} Timetable</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          color: #333;
        }
        h1 {
          color: #003366;
          text-align: center;
          margin-bottom: 5px;
        }
        h2 {
          color: #003366;
          margin-top: 20px;
          margin-bottom: 10px;
          border-bottom: 2px solid #003366;
          padding-bottom: 5px;
        }
        .subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 30px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 30px;
        }
        th {
          background-color: #003366;
          color: white;
          padding: 10px;
          text-align: left;
        }
        td {
          padding: 8px 10px;
          border-bottom: 1px solid #ddd;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        .time {
          white-space: nowrap;
        }
        .course-code {
          font-weight: bold;
        }
        .course-title {
          font-style: italic;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          font-size: 12px;
          color: #666;
        }
        @media print {
          body {
            margin: 0;
            padding: 15px;
          }
          h1 {
            margin-top: 0;
          }
        }
      </style>
    </head>
    <body>
      <h1>${currentTimetable.name} Timetable</h1>
      <div class="subtitle">${currentTimetable.academicYear} - ${currentTimetable.semester} Trimester</div>
    `;

    weekDays.forEach(day => {
      const daySlots = currentTimetable.slots.filter(slot => slot.day === day);
      if (daySlots.length > 0) {
        html += `<h2>${day}</h2>`;
        html += `
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Course</th>
              <th>Room</th>
              <th>Lecturer</th>
            </tr>
          </thead>
          <tbody>
        `;

        daySlots.sort((a, b) => a.startTime.localeCompare(b.startTime));
        daySlots.forEach(slot => {
          html += `
            <tr>
              <td class="time">${slot.startTime} - ${slot.endTime}</td>
              <td><span class="course-code">${slot.courseCode}</span> - <span class="course-title">${slot.courseTitle}</span></td>
              <td>${slot.room}</td>
              <td>${slot.lecturer}</td>
            </tr>
          `;
        });

        html += `
          </tbody>
        </table>
        `;
      }
    });

    html += `
      <div class="footer">
        Generated by UDS CS Department App on ${new Date().toLocaleDateString()}
      </div>
    </body>
    </html>
    `;

    return html;
  };

  // Function to check if all required libraries are available
  const areLibrariesAvailable = () => {
    return RNFS !== null && RNHTMLtoPDF !== null && RNShare !== null;
  };

  // Fallback sharing function using React Native's built-in Share API
  const fallbackShare = async (format) => {
    try {
      let content = '';
      let title = '';

      switch (format) {
        case 'text':
          content = generateTextTable();
          title = `${currentTimetable.name} Timetable (Text)`;
          break;
        case 'csv':
          content = generateCSV();
          title = `${currentTimetable.name} Timetable (CSV)`;
          break;
        case 'html':
          content = generateHTML();
          title = `${currentTimetable.name} Timetable (HTML)`;
          break;
        case 'all':
          const textContent = generateTextTable();
          const csvContent = generateCSV();
          const htmlContent = generateHTML();
          content = `TEXT FORMAT:\n\n${textContent}\n\n` +
                   `CSV FORMAT (Copy and paste into a .csv file):\n\n${csvContent}\n\n` +
                   `HTML FORMAT (Copy and paste into a .html file):\n\n${htmlContent}`;
          title = `${currentTimetable.name} Timetable (All Formats)`;
          break;
        default:
          content = generateTextTable();
          title = `${currentTimetable.name} Timetable`;
      }

      await Share.share({
        message: content,
        title: title,
      });

      return true;
    } catch (error) {
      console.error('Error in fallback share:', error);
      throw error;
    }
  };

  const createTextFile = async () => {
    if (!areLibrariesAvailable()) {
      return await fallbackShare('text');
    }

    try {
      const textContent = generateTextTable();
      const fileName = `${currentTimetable.level}_${currentTimetable.semester}_Trimester_Timetable.txt`;
      const path = `${RNFS.DocumentDirectoryPath}/${fileName}`;

      await RNFS.writeFile(path, textContent, 'utf8');

      return {
        filePath: path,
        fileName: fileName,
        type: 'text/plain'
      };
    } catch (error) {
      console.error('Error creating text file:', error);
      return await fallbackShare('text');
    }
  };

  const createCSVFile = async () => {
    if (!areLibrariesAvailable()) {
      return await fallbackShare('csv');
    }

    try {
      const csvContent = generateCSV();
      const fileName = `${currentTimetable.level}_${currentTimetable.semester}_Trimester_Timetable.csv`;
      const path = `${RNFS.DocumentDirectoryPath}/${fileName}`;

      await RNFS.writeFile(path, csvContent, 'utf8');

      return {
        filePath: path,
        fileName: fileName,
        type: 'text/csv'
      };
    } catch (error) {
      console.error('Error creating CSV file:', error);
      return await fallbackShare('csv');
    }
  };

  const createHTMLFile = async () => {
    if (!areLibrariesAvailable()) {
      return await fallbackShare('html');
    }

    try {
      const htmlContent = generateHTML();
      const fileName = `${currentTimetable.level}_${currentTimetable.semester}_Trimester_Timetable.html`;
      const path = `${RNFS.DocumentDirectoryPath}/${fileName}`;

      await RNFS.writeFile(path, htmlContent, 'utf8');

      return {
        filePath: path,
        fileName: fileName,
        type: 'text/html'
      };
    } catch (error) {
      console.error('Error creating HTML file:', error);
      return await fallbackShare('html');
    }
  };

  const createPDFFile = async () => {
    if (!areLibrariesAvailable()) {
      // For PDF, we'll just share the HTML content since we can't generate a PDF
      return await fallbackShare('html');
    }

    try {
      const htmlContent = generateHTML();
      const options = {
        html: htmlContent,
        fileName: `${currentTimetable.level}_${currentTimetable.semester}_Trimester_Timetable`,
        directory: 'Documents',
      };

      const file = await RNHTMLtoPDF.convert(options);

      return {
        filePath: file.filePath,
        fileName: `${currentTimetable.level}_${currentTimetable.semester}_Trimester_Timetable.pdf`,
        type: 'application/pdf'
      };
    } catch (error) {
      console.error('Error creating PDF file:', error);
      return await fallbackShare('html');
    }
  };

  const shareFile = async (fileInfo) => {
    // If fileInfo is not an object with filePath, it means we used the fallback share
    if (!fileInfo || !fileInfo.filePath) {
      return true;
    }

    if (!areLibrariesAvailable()) {
      return true; // Already shared via fallback
    }

    try {
      const shareOptions = {
        title: `${currentTimetable.name} Timetable`,
        url: Platform.OS === 'android' ? `file://${fileInfo.filePath}` : fileInfo.filePath,
        type: fileInfo.type,
        filename: fileInfo.fileName
      };

      await RNShare.open(shareOptions);

      return true;
    } catch (error) {
      console.error('Error sharing file:', error);
      if (error.message && error.message.includes('User did not share')) {
        // User cancelled sharing, not an error
        return true;
      }

      // Try fallback sharing as a last resort
      try {
        if (fileInfo.type === 'text/plain') {
          await fallbackShare('text');
        } else if (fileInfo.type === 'text/csv') {
          await fallbackShare('csv');
        } else if (fileInfo.type === 'text/html' || fileInfo.type === 'application/pdf') {
          await fallbackShare('html');
        }
        return true;
      } catch (fallbackError) {
        console.error('Error in fallback sharing:', fallbackError);
        throw error;
      }
    }
  };

  const handleDownload = async () => {
    try {
      // Check if libraries are available
      const librariesAvailable = areLibrariesAvailable();

      // Check for permissions on Android only if libraries are available
      if (librariesAvailable && Platform.OS === 'android' && !hasPermission) {
        const granted = await requestStoragePermission();
        if (!granted) {
          Alert.alert(
            'Permission Required',
            'Storage permission is required to save timetable files. Please grant permission in app settings.',
            [
              {
                text: 'OK',
                style: 'default',
              },
            ]
          );
          return;
        }
        setHasPermission(true);
      }

      // Show format selection dialog
      Alert.alert(
        'Share Timetable',
        librariesAvailable
          ? 'Choose a format to save:'
          : 'Choose a format to share:',
        [
          {
            text: 'PDF Format',
            onPress: async () => {
              try {
                if (librariesAvailable) {
                  Alert.alert('Creating PDF', 'Please wait while we generate your PDF...');
                }
                const fileInfo = await createPDFFile();
                await shareFile(fileInfo);
              } catch (error) {
                console.error('PDF error:', error);
                Alert.alert('Error', 'Could not create or share PDF file');
              }
            },
          },
          {
            text: 'Text Format',
            onPress: async () => {
              try {
                const fileInfo = await createTextFile();
                await shareFile(fileInfo);
              } catch (error) {
                console.error('Text error:', error);
                Alert.alert('Error', 'Could not create or share text file');
              }
            },
          },
          {
            text: 'CSV Format',
            onPress: async () => {
              try {
                const fileInfo = await createCSVFile();
                await shareFile(fileInfo);
              } catch (error) {
                console.error('CSV error:', error);
                Alert.alert('Error', 'Could not create or share CSV file');
              }
            },
          },
          {
            text: 'HTML Format',
            onPress: async () => {
              try {
                const fileInfo = await createHTMLFile();
                await shareFile(fileInfo);
              } catch (error) {
                console.error('HTML error:', error);
                Alert.alert('Error', 'Could not create or share HTML file');
              }
            },
          },
          {
            text: 'All Formats',
            onPress: async () => {
              try {
                if (librariesAvailable) {
                  Alert.alert('Creating Files', 'Please wait while we generate your files...');
                }

                if (!librariesAvailable) {
                  // Use fallback sharing for all formats
                  await fallbackShare('all');
                  return;
                }

                const textFileInfo = await createTextFile();
                const csvFileInfo = await createCSVFile();
                const htmlFileInfo = await createHTMLFile();
                const pdfFileInfo = await createPDFFile();

                // Share each file one by one
                await shareFile(textFileInfo);
                await shareFile(csvFileInfo);
                await shareFile(htmlFileInfo);
                await shareFile(pdfFileInfo);

                Alert.alert('Success', 'All timetable files have been created and shared.');
              } catch (error) {
                console.error('All formats error:', error);
                Alert.alert('Error', 'Could not create or share some files');
              }
            },
          },
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ]
      );
    } catch (error) {
      console.error('Handle download error:', error);
      Alert.alert('Error', 'Could not prepare timetable for sharing');
    }
  };

  const renderTimeSlot = (slot: TimeSlot) => (
    <View key={`${slot.day}-${slot.startTime}-${slot.courseCode}`} style={styles.timeSlot}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{slot.startTime} - {slot.endTime}</Text>
      </View>
      <View style={styles.courseContainer}>
        <Text style={styles.courseCode}>{slot.courseCode}</Text>
        <Text style={styles.courseTitle}>{slot.courseTitle}</Text>
        <View style={styles.courseDetails}>
          <View style={styles.detailRow}>
            <MaterialIcons name="room" size={14} color={COLORS.gray[600]} />
            <Text style={styles.detailText}>{slot.room}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="person" size={14} color={COLORS.gray[600]} />
            <Text style={styles.detailText}>{slot.lecturer}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {!hideHeader && <PageHeader title="Class Timetable" />}

      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.levelFilters}>
          {levels.map((level) => (
            <TouchableOpacity
              key={level}
              style={[
                styles.filterButton,
                selectedLevel === level && styles.activeFilterButton
              ]}
              onPress={() => setSelectedLevel(level)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedLevel === level && styles.activeFilterButtonText
                ]}
              >
                {level}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trimesterFilters}>
          {trimesters.map((trimester) => (
            <TouchableOpacity
              key={trimester}
              style={[
                styles.trimesterButton,
                selectedTrimester === trimester && styles.activeTrimesterButton
              ]}
              onPress={() => setSelectedTrimester(trimester)}
            >
              <Text
                style={[
                  styles.trimesterButtonText,
                  selectedTrimester === trimester && styles.activeTrimesterButtonText
                ]}
              >
                {trimester} Trimester
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.timetableHeader}>
        <View>
          <Text style={styles.timetableTitle}>{currentTimetable.name}</Text>
          <Text style={styles.timetableSubtitle}>
            {currentTimetable.academicYear} • {currentTimetable.semester} Trimester
          </Text>
        </View>
        <View style={styles.downloadButtonsContainer}>
          <Button
            title={areLibrariesAvailable() ? "Save Timetable" : "Share Timetable"}
            onPress={handleDownload}
            variant="primary"
            icon={<MaterialIcons name={areLibrariesAvailable() ? "save-alt" : "share"} size={18} color={COLORS.white} />}
          />
        </View>
      </View>

      {!filteredTimetable ? (
        <View style={styles.noTimetableContainer}>
          <MaterialIcons name="event-busy" size={64} color={COLORS.gray[400]} />
          <Text style={styles.noTimetableText}>
            No timetable found for {selectedLevel} {selectedTrimester} Trimester
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.scrollView}>
          {slotsByDay.map(({ day, slots }) => (
            slots.length > 0 ? (
              <Card key={day} style={styles.dayCard}>
                <CardContent>
                  <Text style={styles.dayTitle}>{day}</Text>
                  <View style={styles.slotsContainer}>
                    {slots.map(renderTimeSlot)}
                  </View>
                </CardContent>
              </Card>
            ) : null
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  filtersContainer: {
    marginBottom: SPACING.sm,
  },
  levelFilters: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
  },
  trimesterFilters: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
  },
  filterButton: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    marginRight: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.gray[200],
  },
  activeFilterButton: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterButtonText: {
    fontSize: SIZES.sm,
    color: COLORS.gray[700],
    fontWeight: '500',
  },
  activeFilterButtonText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  trimesterButton: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: 16,
    backgroundColor: COLORS.lightBlue,
    marginRight: SPACING.sm,
  },
  activeTrimesterButton: {
    backgroundColor: COLORS.secondary,
  },
  trimesterButtonText: {
    fontSize: SIZES.xs,
    color: COLORS.primary,
    fontWeight: '500',
  },
  activeTrimesterButtonText: {
    color: COLORS.gray[800],
    fontWeight: '600',
  },
  timetableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.md,
    backgroundColor: COLORS.white,
    ...SHADOWS.small,
  },
  timetableTitle: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.gray[800],
  },
  timetableSubtitle: {
    fontSize: SIZES.sm,
    color: COLORS.gray[600],
    marginTop: 2,
  },
  downloadButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    padding: SPACING.md,
  },
  dayCard: {
    marginBottom: SPACING.md,
    ...SHADOWS.small,
  },
  dayTitle: {
    fontSize: SIZES.md,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING.sm,
  },
  slotsContainer: {
    gap: SPACING.sm,
  },
  timeSlot: {
    flexDirection: 'row',
    borderLeftWidth: 3,
    borderLeftColor: COLORS.secondary,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 4,
    overflow: 'hidden',
  },
  timeContainer: {
    width: 80,
    padding: SPACING.sm,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
  },
  timeText: {
    fontSize: SIZES.xs,
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
  },
  courseContainer: {
    flex: 1,
    padding: SPACING.sm,
  },
  courseCode: {
    fontSize: SIZES.sm,
    fontWeight: 'bold',
    color: COLORS.gray[800],
  },
  courseTitle: {
    fontSize: SIZES.xs,
    color: COLORS.gray[700],
    marginBottom: SPACING.xs,
  },
  courseDetails: {
    marginTop: 2,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  detailText: {
    fontSize: SIZES.xs,
    color: COLORS.gray[600],
    marginLeft: 4,
  },
  noTimetableContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  noTimetableText: {
    fontSize: SIZES.md,
    color: COLORS.gray[600],
    textAlign: 'center',
    marginTop: SPACING.md,
  },
});

export default Timetable;
