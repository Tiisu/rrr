import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import PageHeader from '../components/layout/PageHeader';
import { Card, CardContent } from '../components/ui/Card';
import { COLORS, SPACING, SIZES, SHADOWS } from '../lib/theme';
import { RootStackParamList } from '../navigation';
import CoursesScreen from './Courses';
import TimetableScreen from './Timetable';

type AcademicsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const Academics = () => {
  const navigation = useNavigation<AcademicsScreenNavigationProp>();
  const [activeTab, setActiveTab] = useState<'courses' | 'timetable'>('courses');

  return (
    <View style={styles.container}>
      <PageHeader title="Academics" />

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'courses' && styles.activeTabButton
          ]}
          onPress={() => setActiveTab('courses')}
        >
          <MaterialIcons
            name="book"
            size={24}
            color={activeTab === 'courses' ? COLORS.primary : COLORS.gray[500]}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'courses' && styles.activeTabText
            ]}
          >
            Courses
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'timetable' && styles.activeTabButton
          ]}
          onPress={() => setActiveTab('timetable')}
        >
          <MaterialIcons
            name="schedule"
            size={24}
            color={activeTab === 'timetable' ? COLORS.primary : COLORS.gray[500]}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'timetable' && styles.activeTabText
            ]}
          >
            Timetable
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {activeTab === 'courses' ? (
          <View style={{flex: 1, paddingTop: 0}}>
            <CoursesScreen hideHeader={true} />
          </View>
        ) : (
          <View style={{flex: 1, paddingTop: 0}}>
            <TimetableScreen hideHeader={true} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.sm,
    ...SHADOWS.small,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    fontSize: SIZES.md,
    fontWeight: '500',
    color: COLORS.gray[500],
    marginLeft: SPACING.xs,
  },
  activeTabText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  contentContainer: {
    flex: 1,
  },
});

export default Academics;
