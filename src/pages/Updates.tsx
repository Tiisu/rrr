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
import NewsScreen from './News';
import EventsScreen from './Events';

type UpdatesScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const Updates = () => {
  const navigation = useNavigation<UpdatesScreenNavigationProp>();
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');

  return (
    <View style={styles.container}>
      <PageHeader title="Updates" />

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'news' && styles.activeTabButton
          ]}
          onPress={() => setActiveTab('news')}
        >
          <MaterialIcons
            name="notifications"
            size={24}
            color={activeTab === 'news' ? COLORS.primary : COLORS.gray[500]}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'news' && styles.activeTabText
            ]}
          >
            News
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'events' && styles.activeTabButton
          ]}
          onPress={() => setActiveTab('events')}
        >
          <MaterialIcons
            name="event"
            size={24}
            color={activeTab === 'events' ? COLORS.primary : COLORS.gray[500]}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'events' && styles.activeTabText
            ]}
          >
            Events
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {activeTab === 'news' ? (
          <View style={{flex: 1, paddingTop: 0}}>
            <NewsScreen hideHeader={true} />
          </View>
        ) : (
          <View style={{flex: 1, paddingTop: 0}}>
            <EventsScreen hideHeader={true} />
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

export default Updates;
