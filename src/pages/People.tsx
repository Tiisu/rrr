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
import FacultyScreen from './Faculty';
import ContactScreen from './Contact';

type PeopleScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const People = () => {
  const navigation = useNavigation<PeopleScreenNavigationProp>();
  const [activeTab, setActiveTab] = useState<'faculty' | 'contact'>('faculty');

  return (
    <View style={styles.container}>
      <PageHeader title="People" />

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'faculty' && styles.activeTabButton
          ]}
          onPress={() => setActiveTab('faculty')}
        >
          <MaterialIcons
            name="people"
            size={24}
            color={activeTab === 'faculty' ? COLORS.primary : COLORS.gray[500]}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'faculty' && styles.activeTabText
            ]}
          >
            Faculty
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'contact' && styles.activeTabButton
          ]}
          onPress={() => setActiveTab('contact')}
        >
          <MaterialIcons
            name="mail"
            size={24}
            color={activeTab === 'contact' ? COLORS.primary : COLORS.gray[500]}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'contact' && styles.activeTabText
            ]}
          >
            Contact Us
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {activeTab === 'faculty' ? (
          <View style={{flex: 1, paddingTop: 0}}>
            <FacultyScreen hideHeader={true} />
          </View>
        ) : (
          <View style={{flex: 1, paddingTop: 0}}>
            <ContactScreen hideHeader={true} />
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

export default People;
