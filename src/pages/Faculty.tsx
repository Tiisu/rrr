import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import PageHeader from '../components/layout/PageHeader';
import SearchBar from '../components/ui/SearchBar';
import { Card, CardContent } from '../components/ui/Card';
import { facultyData } from '../data/mockData';
import { FacultyMember } from '../types';
import { COLORS, SPACING, SIZES } from '../lib/theme';
import { RootStackParamList } from '../navigation';

type FacultyScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface FacultyProps {
  hideHeader?: boolean;
}

const Faculty = ({ hideHeader = false }: FacultyProps) => {
  const navigation = useNavigation<FacultyScreenNavigationProp>();
  const [faculty, setFaculty] = useState<FacultyMember[]>(facultyData);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      const filteredFaculty = facultyData.filter(
        member =>
          member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          member.researchInterests.some(interest =>
            interest.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
      setFaculty(filteredFaculty);
    } else {
      setFaculty(facultyData);
    }
  }, [searchTerm]);

  const renderFacultyItem = ({ item }: { item: FacultyMember }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('FacultyDetail', { id: item.id })}
    >
      <Card style={styles.facultyCard}>
        <CardContent>
          <View style={styles.facultyCardContent}>
            <Image
              source={{ uri: item.photoUrl }}
              style={styles.facultyImage}
            />
            <View style={styles.facultyInfo}>
              <Text style={styles.facultyName}>{item.name}</Text>
              <Text style={styles.facultyTitle}>{item.title}</Text>

              <View style={styles.contactInfo}>
                <View style={styles.contactItem}>
                  <MaterialIcons name="email" size={16} color={COLORS.primary} />
                  <Text style={styles.contactText} numberOfLines={1}>
                    {item.email}
                  </Text>
                </View>

                <View style={styles.contactItem}>
                  <MaterialIcons name="phone" size={16} color={COLORS.primary} />
                  <Text style={styles.contactText}>
                    {item.phone}
                  </Text>
                </View>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={COLORS.gray[400]} />
          </View>
        </CardContent>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {!hideHeader && <PageHeader title="Faculty" />}

      <SearchBar
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search faculty..."
      />

      <FlatList
        data={faculty}
        renderItem={renderFacultyItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialIcons name="search-off" size={48} color={COLORS.gray[400]} />
            <Text style={styles.emptyText}>No faculty members found</Text>
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
  facultyCard: {
    marginBottom: SPACING.md,
  },
  facultyCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  facultyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: SPACING.md,
  },
  facultyInfo: {
    flex: 1,
  },
  facultyName: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.gray[800],
    marginBottom: 2,
  },
  facultyTitle: {
    fontSize: SIZES.sm,
    color: COLORS.gray[600],
    marginBottom: SPACING.xs,
  },
  contactInfo: {
    marginTop: SPACING.xs,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  contactText: {
    fontSize: SIZES.sm,
    color: COLORS.gray[600],
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

export default Faculty;
