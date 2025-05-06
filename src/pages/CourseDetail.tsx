import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import PageHeader from '../components/layout/PageHeader';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { coursesData } from '../data/mockData';
import { COLORS, SPACING, SIZES } from '../lib/theme';
import { RootStackParamList } from '../navigation';

type CourseDetailRouteProp = RouteProp<RootStackParamList, 'CourseDetail'>;
type CourseDetailNavigationProp = StackNavigationProp<RootStackParamList>;

const CourseDetail = () => {
  const route = useRoute<CourseDetailRouteProp>();
  const navigation = useNavigation<CourseDetailNavigationProp>();
  const { id } = route.params;
  
  const course = coursesData.find(course => course.id === id);
  
  if (!course) {
    return (
      <View style={styles.container}>
        <PageHeader title="Course Not Found" showBackButton />
        <View style={styles.errorContainer}>
          <MaterialIcons name="error-outline" size={48} color={COLORS.error} />
          <Text style={styles.errorText}>Course not found</Text>
          <Button 
            title="Go Back" 
            onPress={() => navigation.goBack()} 
            variant="primary"
            style={styles.backButton}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <PageHeader title={course.code} showBackButton />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>{course.title}</Text>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>{course.level}</Text>
          </View>
        </View>
        
        <Card>
          <CardContent>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{course.description}</Text>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <MaterialIcons name="access-time" size={20} color={COLORS.primary} />
                <Text style={styles.infoLabel}>Credit Hours</Text>
                <Text style={styles.infoValue}>{course.creditHours}</Text>
              </View>
              
              <View style={styles.infoItem}>
                <MaterialIcons name="list" size={20} color={COLORS.primary} />
                <Text style={styles.infoLabel}>Prerequisites</Text>
                <Text style={styles.infoValue}>
                  {course.prerequisites.length > 0 
                    ? course.prerequisites.join(', ') 
                    : 'None'}
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>
        
        {course.prerequisites.length > 0 && (
          <Card style={styles.lastCard}>
            <CardContent>
              <Text style={styles.sectionTitle}>Prerequisites</Text>
              {course.prerequisites.map((prereq, index) => {
                const prereqCourse = coursesData.find(c => c.code === prereq);
                return (
                  <TouchableOpacity 
                    key={index}
                    style={styles.prerequisiteItem}
                    onPress={() => prereqCourse && navigation.push('CourseDetail', { id: prereqCourse.id })}
                    disabled={!prereqCourse}
                  >
                    <MaterialIcons name="book" size={16} color={COLORS.primary} />
                    <Text style={styles.prerequisiteText}>{prereq}</Text>
                    {prereqCourse && (
                      <MaterialIcons name="chevron-right" size={16} color={COLORS.gray[400]} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </CardContent>
          </Card>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
    padding: SPACING.md,
  },
  header: {
    marginBottom: SPACING.lg,
  },
  title: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.gray[800],
    marginBottom: SPACING.sm,
  },
  levelBadge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  levelText: {
    color: COLORS.white,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: SIZES.lg,
    fontWeight: '600',
    color: COLORS.gray[800],
    marginBottom: SPACING.sm,
  },
  description: {
    fontSize: SIZES.md,
    color: COLORS.gray[700],
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    fontSize: SIZES.sm,
    color: COLORS.gray[600],
    marginVertical: SPACING.xs,
  },
  infoValue: {
    fontSize: SIZES.md,
    fontWeight: '500',
    color: COLORS.gray[800],
  },
  prerequisiteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
  },
  prerequisiteText: {
    flex: 1,
    marginLeft: SPACING.sm,
    fontSize: SIZES.md,
    color: COLORS.gray[800],
  },
  lastCard: {
    marginBottom: SPACING.xxl,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  errorText: {
    fontSize: SIZES.lg,
    color: COLORS.gray[700],
    marginVertical: SPACING.lg,
  },
  backButton: {
    marginTop: SPACING.lg,
  },
});

export default CourseDetail;
