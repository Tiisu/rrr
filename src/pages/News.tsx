import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { format } from 'date-fns';

import PageHeader from '../components/layout/PageHeader';
import { Card, CardContent } from '../components/ui/Card';
import { announcementsData } from '../data/mockData';
import { Announcement } from '../types';
import { COLORS, SPACING, SIZES } from '../lib/theme';
import { RootStackParamList } from '../navigation';

type NewsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const News = () => {
  const navigation = useNavigation<NewsScreenNavigationProp>();
  const [announcements] = useState<Announcement[]>(announcementsData);

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

  const renderAnnouncementItem = ({ item }: { item: Announcement }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('NewsDetail', { id: item.id })}
    >
      <Card style={styles.announcementCard}>
        <CardContent>
          <View style={styles.cardHeader}>
            <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(item.category) }]}>
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>
            {item.important && (
              <View style={styles.importantBadge}>
                <MaterialIcons name="priority-high" size={16} color={COLORS.white} />
                <Text style={styles.importantText}>Important</Text>
              </View>
            )}
          </View>
          
          <Text style={styles.announcementTitle}>{item.title}</Text>
          <Text style={styles.announcementContent} numberOfLines={2}>
            {item.content}
          </Text>
          
          <View style={styles.cardFooter}>
            <View style={styles.dateContainer}>
              <MaterialIcons name="access-time" size={16} color={COLORS.gray[500]} />
              <Text style={styles.dateText}>
                {format(item.timestamp, 'MMM d, yyyy')}
              </Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} color={COLORS.primary} />
          </View>
        </CardContent>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <PageHeader title="News & Announcements" />
      
      <FlatList
        data={announcements}
        renderItem={renderAnnouncementItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialIcons name="notifications-off" size={48} color={COLORS.gray[400]} />
            <Text style={styles.emptyText}>No announcements available</Text>
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
  announcementCard: {
    marginBottom: SPACING.md,
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: SPACING.sm,
  },
  categoryBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: 4,
    marginRight: SPACING.sm,
  },
  categoryText: {
    color: COLORS.white,
    fontSize: SIZES.sm,
    fontWeight: '500',
  },
  importantBadge: {
    backgroundColor: COLORS.error,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  importantText: {
    color: COLORS.white,
    fontSize: SIZES.sm,
    fontWeight: '500',
    marginLeft: 2,
  },
  announcementTitle: {
    fontSize: SIZES.lg,
    fontWeight: '600',
    color: COLORS.gray[800],
    marginBottom: SPACING.xs,
  },
  announcementContent: {
    fontSize: SIZES.md,
    color: COLORS.gray[600],
    marginBottom: SPACING.sm,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.xs,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: SIZES.sm,
    color: COLORS.gray[500],
    marginLeft: SPACING.xs,
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

export default News;
