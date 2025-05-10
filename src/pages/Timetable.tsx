import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Share,
  Alert
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

import PageHeader from '../components/layout/PageHeader';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { timetablesData } from '../data/mockData';
import { COLORS, SPACING, SIZES, SHADOWS } from '../lib/theme';
import { Timetable as TimetableType, TimeSlot, WeekDay } from '../types';

const weekDays: WeekDay[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const Timetable = () => {
  const [selectedTimetable, setSelectedTimetable] = useState<string>(timetablesData[0].id);
  
  const currentTimetable = timetablesData.find(tt => tt.id === selectedTimetable) || timetablesData[0];
  
  // Group slots by day
  const slotsByDay = weekDays.map(day => {
    return {
      day,
      slots: currentTimetable.slots.filter(slot => slot.day === day)
        .sort((a, b) => a.startTime.localeCompare(b.startTime))
    };
  });

  const handleDownload = async () => {
    try {
      // In a real app, this would generate a PDF or CSV file
      // For now, we'll just share the timetable as text
      
      let timetableText = `${currentTimetable.name} - ${currentTimetable.academicYear} ${currentTimetable.semester} Semester\n\n`;
      
      weekDays.forEach(day => {
        const daySlots = currentTimetable.slots.filter(slot => slot.day === day);
        if (daySlots.length > 0) {
          timetableText += `${day}:\n`;
          daySlots.sort((a, b) => a.startTime.localeCompare(b.startTime));
          daySlots.forEach(slot => {
            timetableText += `${slot.startTime}-${slot.endTime}: ${slot.courseCode} (${slot.courseTitle}) - ${slot.room} - ${slot.lecturer}\n`;
          });
          timetableText += '\n';
        }
      });
      
      await Share.share({
        message: timetableText,
        title: `${currentTimetable.name} Timetable`,
      });
    } catch (error) {
      Alert.alert('Error', 'Could not share timetable');
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
      <PageHeader title="Class Timetable" />
      
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Select Timetable:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedTimetable}
            onValueChange={(itemValue) => setSelectedTimetable(itemValue)}
            style={styles.picker}
          >
            {timetablesData.map(tt => (
              <Picker.Item key={tt.id} label={tt.name} value={tt.id} />
            ))}
          </Picker>
        </View>
      </View>
      
      <View style={styles.timetableHeader}>
        <View>
          <Text style={styles.timetableTitle}>{currentTimetable.name}</Text>
          <Text style={styles.timetableSubtitle}>
            {currentTimetable.academicYear} • {currentTimetable.semester} Semester
          </Text>
        </View>
        <Button 
          title="Download" 
          onPress={handleDownload}
          variant="primary"
          icon={<MaterialIcons name="file-download" size={18} color={COLORS.white} />}
        />
      </View>
      
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    backgroundColor: COLORS.white,
    ...SHADOWS.small,
  },
  pickerLabel: {
    fontSize: SIZES.md,
    fontWeight: '600',
    color: COLORS.gray[700],
    marginRight: SPACING.sm,
  },
  pickerWrapper: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray[300],
    overflow: 'hidden',
  },
  picker: {
    height: 40,
  },
  timetableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.md,
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
});

export default Timetable;
