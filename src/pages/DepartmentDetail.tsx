import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import PageHeader from '../components/layout/PageHeader';
import { Card, CardContent } from '../components/ui/Card';
import { departmentData } from '../data/mockData';
import { COLORS, SPACING, SIZES } from '../lib/theme';

const DepartmentDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <PageHeader title="Department Info" showBackButton />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>{departmentData.name}</Text>
        </View>
        
        <Card>
          <CardContent>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="history" size={24} color={COLORS.primary} />
              <Text style={styles.sectionTitle}>History</Text>
            </View>
            <Text style={styles.sectionContent}>{departmentData.history}</Text>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="lightbulb" size={24} color={COLORS.primary} />
              <Text style={styles.sectionTitle}>Vision</Text>
            </View>
            <Text style={styles.sectionContent}>{departmentData.vision}</Text>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="flag" size={24} color={COLORS.primary} />
              <Text style={styles.sectionTitle}>Mission</Text>
            </View>
            <Text style={styles.sectionContent}>{departmentData.mission}</Text>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="category" size={24} color={COLORS.primary} />
              <Text style={styles.sectionTitle}>Focus Areas</Text>
            </View>
            {departmentData.focusAreas.map((area, index) => (
              <View key={index} style={styles.listItem}>
                <View style={styles.bullet} />
                <Text style={styles.listItemText}>{area}</Text>
              </View>
            ))}
          </CardContent>
        </Card>
        
        <Card style={styles.lastCard}>
          <CardContent>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="emoji-events" size={24} color={COLORS.primary} />
              <Text style={styles.sectionTitle}>Achievements</Text>
            </View>
            {departmentData.achievements.map((achievement, index) => (
              <View key={index} style={styles.listItem}>
                <View style={styles.bullet} />
                <Text style={styles.listItemText}>{achievement}</Text>
              </View>
            ))}
          </CardContent>
        </Card>
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
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: SIZES.lg,
    fontWeight: '600',
    color: COLORS.gray[800],
    marginLeft: SPACING.sm,
  },
  sectionContent: {
    fontSize: SIZES.md,
    color: COLORS.gray[700],
    lineHeight: 22,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SPACING.sm,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.secondary,
    marginTop: 8,
    marginRight: SPACING.sm,
  },
  listItemText: {
    flex: 1,
    fontSize: SIZES.md,
    color: COLORS.gray[700],
  },
  lastCard: {
    marginBottom: SPACING.xxl,
  },
});

export default DepartmentDetail;
