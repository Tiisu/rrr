import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView 
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { format } from 'date-fns';

import PageHeader from '../components/layout/PageHeader';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { announcementsData } from '../data/mockData';
import { COLORS, SPACING, SIZES } from '../lib/theme';
import { RootStackParamList } from '../navigation';

type NewsDetailRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;
type NewsDetailNavigationProp = StackNavigationProp<RootStackParamList>;

const NewsDetail = () => {
  const route = useRoute<NewsDetailRouteProp>();
  const navigation = useNavigation<NewsDetailNavigationProp>();
  const { id } = route.params;
  
  const announcement = announcementsData.find(item => item.id === id);
  
  if (!announcement) {
    return (
      <View style={styles.container}>
        <PageHeader title="Announcement Not Found" showBackButton />
        <View style={styles.errorContainer}>
          <MaterialIcons name="error-outline" size={48} color={COLORS.error} />
          <Text style={styles.errorText}>Announcement not found</Text>
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Event':
        return COLORS.primary;
      case 'Schedule':
        return COLORS.info;
      case 'Academic':
        return COLORS.warning;
      case 'Achievement':
        return COLORS.success;
      default:
        return COLORS.gray[500];
    }
  };

  return (
    <View style={styles.container}>
      <PageHeader title="Announcement" showBackButton />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>{announcement.title}</Text>
          
          <View style={styles.metaContainer}>
            <View style={[
              styles.categoryBadge, 
              { backgroundColor: getCategoryColor(announcement.category) }
            ]}>
              <Text style={styles.categoryText}>{announcement.category}</Text>
            </View>
            
            <View style={styles.dateContainer}>
              <MaterialIcons name="calendar-today" size={16} color={COLORS.gray[600]} />
              <Text style={styles.dateText}>
                {format(announcement.timestamp, 'MMMM d, yyyy')}
              </Text>
            </View>
          </View>
          
          {announcement.important && (
            <View style={styles.importantContainer}>
              <MaterialIcons name="priority-high" size={20} color={COLORS.error} />
              <Text style={styles.importantText}>Important Announcement</Text>
            </View>
          )}
        </View>
        
        <Card style={styles.contentCard}>
          <CardContent>
            <Text style={styles.contentText}>{announcement.content}</Text>
          </CardContent>
        </Card>
        
        <Button 
          title="Back to Announcements" 
          onPress={() => navigation.goBack()} 
          variant="outline"
          style={styles.backButton}
        />
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
    marginBottom: SPACING.md,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  categoryBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: 4,
    marginRight: SPACING.md,
  },
  categoryText: {
    color: COLORS.white,
    fontSize: SIZES.sm,
    fontWeight: '500',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: SIZES.sm,
    color: COLORS.gray[600],
    marginLeft: SPACING.xs,
  },
  importantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.error + '20', // 20% opacity
    padding: SPACING.sm,
    borderRadius: 4,
    marginTop: SPACING.sm,
  },
  importantText: {
    color: COLORS.error,
    fontSize: SIZES.md,
    fontWeight: '500',
    marginLeft: SPACING.xs,
  },
  contentCard: {
    marginBottom: SPACING.lg,
  },
  contentText: {
    fontSize: SIZES.md,
    color: COLORS.gray[800],
    lineHeight: 24,
  },
  backButton: {
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
});

export default NewsDetail;
