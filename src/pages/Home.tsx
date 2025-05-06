import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import PageHeader from '../components/layout/PageHeader';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/Card';
import { departmentData } from '../data/mockData';
import { COLORS, SPACING, SIZES } from '../lib/theme';
import { RootStackParamList } from '../navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <PageHeader title="UDS CS Department" />
      
      <ScrollView style={styles.scrollView}>
        {/* Hero section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>{departmentData.name}</Text>
          <Text style={styles.heroSubtitle}>{departmentData.vision}</Text>
          <TouchableOpacity 
            style={styles.learnMoreButton}
            onPress={() => navigation.navigate('DepartmentDetail')}
          >
            <Text style={styles.learnMoreText}>Learn more</Text>
            <MaterialIcons name="arrow-forward" size={16} color={COLORS.secondary} />
          </TouchableOpacity>
        </View>

        {/* Quick Access Cards */}
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity 
            style={styles.quickAccessCard}
            onPress={() => navigation.navigate('Courses')}
          >
            <MaterialIcons name="book" size={32} color={COLORS.primary} style={styles.cardIcon} />
            <Text style={styles.cardTitle}>Courses</Text>
            <Text style={styles.cardDescription}>Browse all courses offered by the department</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.quickAccessCard}
            onPress={() => navigation.navigate('Faculty')}
          >
            <MaterialIcons name="people" size={32} color={COLORS.primary} style={styles.cardIcon} />
            <Text style={styles.cardTitle}>Faculty</Text>
            <Text style={styles.cardDescription}>Meet our professors and staff members</Text>
          </TouchableOpacity>
        </View>

        {/* Mission Statement */}
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Card>
          <CardContent>
            <Text style={styles.missionText}>{departmentData.mission}</Text>
          </CardContent>
        </Card>

        {/* Focus Areas */}
        <Text style={styles.sectionTitle}>Focus Areas</Text>
        <Card>
          <CardContent>
            {departmentData.focusAreas.map((area, index) => (
              <View key={index} style={styles.listItem}>
                <View style={styles.bullet} />
                <Text style={styles.listItemText}>{area}</Text>
              </View>
            ))}
          </CardContent>
        </Card>
        
        {/* Latest Achievements */}
        <Text style={styles.sectionTitle}>Recent Achievements</Text>
        <Card style={styles.lastCard}>
          <CardContent>
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
  heroSection: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  heroTitle: {
    fontSize: SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.xs,
  },
  heroSubtitle: {
    fontSize: SIZES.sm,
    color: COLORS.white,
    opacity: 0.9,
    marginBottom: SPACING.md,
  },
  learnMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  learnMoreText: {
    color: COLORS.secondary,
    marginRight: SPACING.xs,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    marginVertical: SPACING.md,
    color: COLORS.gray[800],
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.lg,
  },
  quickAccessCard: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: SPACING.md,
    width: '48%',
    ...COLORS.SHADOWS,
  },
  cardIcon: {
    marginBottom: SPACING.sm,
  },
  cardTitle: {
    fontSize: SIZES.md,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
    color: COLORS.gray[800],
  },
  cardDescription: {
    fontSize: SIZES.sm,
    color: COLORS.gray[600],
  },
  missionText: {
    fontStyle: 'italic',
    color: COLORS.gray[600],
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
    marginTop: 6,
    marginRight: SPACING.sm,
  },
  listItemText: {
    flex: 1,
    fontSize: SIZES.sm,
    color: COLORS.gray[700],
  },
  lastCard: {
    marginBottom: SPACING.xxl,
  },
});

export default Home;
