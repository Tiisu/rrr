import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SectionList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import PageHeader from '../components/layout/PageHeader';
import SearchBar from '../components/ui/SearchBar';
import { Card, CardContent } from '../components/ui/Card';
import { coursesData } from '../data/mockData';
import { Course, Trimester } from '../types';
import { COLORS, SPACING, SIZES } from '../lib/theme';
import { RootStackParamList } from '../navigation';

type CoursesScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface CourseSection {
  title: string;
  data: Course[];
}

interface CoursesProps {
  hideHeader?: boolean;
}

const Courses = ({ hideHeader = false }: CoursesProps) => {
  const navigation = useNavigation<CoursesScreenNavigationProp>();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('Level 100');
  const [selectedTrimester, setSelectedTrimester] = useState<Trimester | 'All'>('All');

  const levels = ["Level 100", "Level 200", "Level 300", "Level 400", "Level 500", "Level 600"];
  const trimesters: (Trimester | 'All')[] = ['All', 'First', 'Second', 'Third'];

  // Filter and group courses
  const getFilteredAndGroupedCourses = () => {
    let filteredCourses = coursesData;

    // Filter by search term
    if (searchTerm) {
      filteredCourses = filteredCourses.filter(
        course =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by level
    filteredCourses = filteredCourses.filter(
      course => course.level === selectedLevel
    );

    // Filter by trimester if not "All"
    if (selectedTrimester !== 'All') {
      filteredCourses = filteredCourses.filter(
        course => course.trimester === selectedTrimester
      );
    }

    // Group by trimester
    const groupedCourses: CourseSection[] = [];

    if (selectedTrimester === 'All') {
      // Group by trimester
      const firstTrimester = filteredCourses.filter(course => course.trimester === 'First');
      const secondTrimester = filteredCourses.filter(course => course.trimester === 'Second');
      const thirdTrimester = filteredCourses.filter(course => course.trimester === 'Third');

      if (firstTrimester.length > 0) {
        groupedCourses.push({ title: 'First Trimester', data: firstTrimester });
      }

      if (secondTrimester.length > 0) {
        groupedCourses.push({ title: 'Second Trimester', data: secondTrimester });
      }

      if (thirdTrimester.length > 0) {
        groupedCourses.push({ title: 'Third Trimester', data: thirdTrimester });
      }
    } else {
      // Just one section with the selected trimester
      groupedCourses.push({
        title: `${selectedTrimester} Trimester`,
        data: filteredCourses
      });
    }

    return groupedCourses;
  };

  const renderCourseItem = ({ item }: { item: Course }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('CourseDetail', { id: item.id })}
    >
      <Card style={styles.courseCard}>
        <CardContent>
          <View style={styles.courseHeader}>
            <Text style={styles.courseCode}>{item.code}</Text>
            <View style={styles.creditHoursContainer}>
              <MaterialIcons name="access-time" size={16} color={COLORS.gray[600]} />
              <Text style={styles.creditHours}>{item.creditHours} credit hours</Text>
            </View>
          </View>
          <Text style={styles.courseTitle}>{item.title}</Text>
          <Text style={styles.courseDescription} numberOfLines={2}>
            {item.description}
          </Text>
          <View style={styles.courseFooter}>
            <View style={styles.prerequisitesContainer}>
              {item.prerequisites.length > 0 ? (
                <>
                  <MaterialIcons name="book" size={16} color={COLORS.gray[600]} />
                  <Text style={styles.prerequisites}>
                    Prerequisites: {item.prerequisites.join(', ')}
                  </Text>
                </>
              ) : (
                <Text style={styles.prerequisites}>No prerequisites</Text>
              )}
            </View>
            <MaterialIcons name="chevron-right" size={20} color={COLORS.primary} />
          </View>
        </CardContent>
      </Card>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section }: { section: CourseSection }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {!hideHeader && <PageHeader title="Courses" />}

      <SearchBar
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search courses..."
      />

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
                {trimester === 'All' ? 'All Trimesters' : `${trimester} Trimester`}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <SectionList
        sections={getFilteredAndGroupedCourses()}
        renderItem={renderCourseItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialIcons name="search-off" size={48} color={COLORS.gray[400]} />
            <Text style={styles.emptyText}>No courses found</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContainer: {
    padding: SPACING.md,
    paddingBottom: SPACING.xxl,
  },
  courseCard: {
    marginBottom: SPACING.md,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  courseCode: {
    fontSize: SIZES.md,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  courseTitle: {
    fontSize: SIZES.lg,
    fontWeight: '500',
    marginBottom: SPACING.xs,
    color: COLORS.gray[800],
  },
  courseDescription: {
    fontSize: SIZES.sm,
    color: COLORS.gray[600],
    marginBottom: SPACING.sm,
    lineHeight: 20,
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditHoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creditHours: {
    fontSize: SIZES.sm,
    color: COLORS.gray[600],
    marginLeft: SPACING.xs,
  },
  prerequisitesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  prerequisites: {
    fontSize: SIZES.sm,
    color: COLORS.gray[600],
    marginLeft: SPACING.xs,
    flex: 1,
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
  sectionHeader: {
    backgroundColor: COLORS.gray[100],
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.secondary,
  },
  sectionTitle: {
    fontSize: SIZES.md,
    fontWeight: 'bold',
    color: COLORS.gray[800],
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },
  emptyText: {
    fontSize: SIZES.md,
    color: COLORS.gray[500],
    marginTop: SPACING.md,
  },
});

export default Courses;
