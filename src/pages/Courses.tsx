import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import PageHeader from '../components/layout/PageHeader';
import SearchBar from '../components/ui/SearchBar';
import { Card, CardContent } from '../components/ui/Card';
import { coursesData } from '../data/mockData';
import { Course } from '../types';
import { COLORS, SPACING, SIZES } from '../lib/theme';
import { RootStackParamList } from '../navigation';

type CoursesScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const Courses = () => {
  const navigation = useNavigation<CoursesScreenNavigationProp>();
  const [courses, setCourses] = useState<Course[]>(coursesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  
  const levels = ["All Levels", "Level 100", "Level 200", "Level 300", "Level 400", "MSc"];

  useEffect(() => {
    let filteredCourses = coursesData;
    
    // Filter by search term
    if (searchTerm) {
      filteredCourses = filteredCourses.filter(
        course => 
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.code.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by level
    if (selectedLevel && selectedLevel !== "All Levels") {
      filteredCourses = filteredCourses.filter(
        course => course.level === selectedLevel
      );
    }
    
    setCourses(filteredCourses);
  }, [searchTerm, selectedLevel]);

  const renderCourseItem = ({ item }: { item: Course }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('CourseDetail', { id: item.id })}
    >
      <Card style={styles.courseCard}>
        <CardContent>
          <View style={styles.courseHeader}>
            <Text style={styles.courseCode}>{item.code}</Text>
            <Text style={styles.courseLevel}>{item.level}</Text>
          </View>
          <Text style={styles.courseTitle}>{item.title}</Text>
          <Text style={styles.courseDescription} numberOfLines={2}>
            {item.description}
          </Text>
          <View style={styles.courseFooter}>
            <View style={styles.creditHoursContainer}>
              <MaterialIcons name="access-time" size={16} color={COLORS.gray[600]} />
              <Text style={styles.creditHours}>{item.creditHours} credit hours</Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} color={COLORS.primary} />
          </View>
        </CardContent>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <PageHeader title="Courses" />
      
      <SearchBar
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search courses..."
      />
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
        {levels.map((level) => (
          <TouchableOpacity
            key={level}
            style={[
              styles.filterButton,
              selectedLevel === level && styles.activeFilterButton
            ]}
            onPress={() => setSelectedLevel(level === "All Levels" ? "" : level)}
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
      
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
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
  courseLevel: {
    fontSize: SIZES.sm,
    color: COLORS.gray[600],
    backgroundColor: COLORS.gray[200],
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: 4,
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
  filtersContainer: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
  },
  filterButton: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    marginRight: SPACING.sm,
  },
  activeFilterButton: {
    backgroundColor: COLORS.primary,
  },
  filterButtonText: {
    fontSize: SIZES.sm,
    color: COLORS.gray[700],
  },
  activeFilterButtonText: {
    color: COLORS.white,
    fontWeight: '500',
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
