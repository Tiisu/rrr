import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import PageHeader from '../components/layout/PageHeader';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { facultyData } from '../data/mockData';
import { COLORS, SPACING, SIZES } from '../lib/theme';
import { RootStackParamList } from '../navigation';

type FacultyDetailRouteProp = RouteProp<RootStackParamList, 'FacultyDetail'>;
type FacultyDetailNavigationProp = StackNavigationProp<RootStackParamList>;

const FacultyDetail = () => {
  const route = useRoute<FacultyDetailRouteProp>();
  const navigation = useNavigation<FacultyDetailNavigationProp>();
  const { id } = route.params;
  
  const faculty = facultyData.find(member => member.id === id);
  
  if (!faculty) {
    return (
      <View style={styles.container}>
        <PageHeader title="Faculty Not Found" showBackButton />
        <View style={styles.errorContainer}>
          <MaterialIcons name="error-outline" size={48} color={COLORS.error} />
          <Text style={styles.errorText}>Faculty member not found</Text>
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

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${faculty.email}`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${faculty.phone}`);
  };

  return (
    <View style={styles.container}>
      <PageHeader title={faculty.name} showBackButton />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileHeader}>
          <Image 
            source={{ uri: faculty.photoUrl }} 
            style={styles.profileImage} 
          />
          <Text style={styles.name}>{faculty.name}</Text>
          <Text style={styles.title}>{faculty.title}</Text>
        </View>
        
        <Card>
          <CardContent>
            <Text style={styles.sectionTitle}>Contact Information</Text>
            
            <TouchableOpacity 
              style={styles.contactItem}
              onPress={handleEmailPress}
            >
              <MaterialIcons name="email" size={24} color={COLORS.primary} />
              <Text style={styles.contactText}>{faculty.email}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.contactItem}
              onPress={handlePhonePress}
            >
              <MaterialIcons name="phone" size={24} color={COLORS.primary} />
              <Text style={styles.contactText}>{faculty.phone}</Text>
            </TouchableOpacity>
            
            <View style={styles.contactItem}>
              <MaterialIcons name="location-on" size={24} color={COLORS.primary} />
              <Text style={styles.contactText}>{faculty.office}</Text>
            </View>
          </CardContent>
        </Card>
        
        {faculty.bio && (
          <Card>
            <CardContent>
              <Text style={styles.sectionTitle}>Biography</Text>
              <Text style={styles.bioText}>{faculty.bio}</Text>
            </CardContent>
          </Card>
        )}
        
        <Card style={styles.lastCard}>
          <CardContent>
            <Text style={styles.sectionTitle}>Research Interests</Text>
            {faculty.researchInterests.map((interest, index) => (
              <View key={index} style={styles.interestItem}>
                <View style={styles.bullet} />
                <Text style={styles.interestText}>{interest}</Text>
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
  profileHeader: {
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: SPACING.md,
  },
  name: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.gray[800],
    textAlign: 'center',
  },
  title: {
    fontSize: SIZES.md,
    color: COLORS.gray[600],
    textAlign: 'center',
    marginTop: SPACING.xs,
  },
  sectionTitle: {
    fontSize: SIZES.lg,
    fontWeight: '600',
    color: COLORS.gray[800],
    marginBottom: SPACING.md,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  contactText: {
    fontSize: SIZES.md,
    color: COLORS.gray[700],
    marginLeft: SPACING.md,
  },
  bioText: {
    fontSize: SIZES.md,
    color: COLORS.gray[700],
    lineHeight: 22,
  },
  interestItem: {
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
  interestText: {
    flex: 1,
    fontSize: SIZES.md,
    color: COLORS.gray[700],
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

export default FacultyDetail;
