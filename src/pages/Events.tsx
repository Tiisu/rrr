import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity,
  Linking
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { format } from 'date-fns';

import PageHeader from '../components/layout/PageHeader';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { eventsData } from '../data/mockData';
import { COLORS, SPACING, SIZES, SHADOWS } from '../lib/theme';
import { RootStackParamList } from '../navigation';

type EventsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

const Events = () => {
  const navigation = useNavigation<EventsScreenNavigationProp>();

  const formatEventDate = (startDate: Date, endDate: Date) => {
    const sameDay = startDate.getDate() === endDate.getDate() && 
                    startDate.getMonth() === endDate.getMonth() && 
                    startDate.getFullYear() === endDate.getFullYear();
    
    if (sameDay) {
      return `${format(startDate, 'MMMM d, yyyy')} • ${format(startDate, 'h:mm a')} - ${format(endDate, 'h:mm a')}`;
    } else {
      return `${format(startDate, 'MMMM d, yyyy h:mm a')} - ${format(endDate, 'MMMM d, yyyy h:mm a')}`;
    }
  };

  const handleRegister = (registrationLink?: string) => {
    if (registrationLink) {
      Linking.openURL(registrationLink);
    } else {
      // In a real app, this would navigate to a registration form
      alert('Registration form would open here');
    }
  };

  const renderEventItem = ({ item }) => (
    <Card style={styles.eventCard}>
      <CardContent>
        <Text style={styles.eventTitle}>{item.title}</Text>
        
        <View style={styles.eventDetails}>
          <View style={styles.detailRow}>
            <MaterialIcons name="event" size={18} color={COLORS.primary} style={styles.icon} />
            <Text style={styles.detailText}>
              {formatEventDate(item.startDate, item.endDate)}
            </Text>
          </View>
          
          <View style={styles.detailRow}>
            <MaterialIcons name="location-on" size={18} color={COLORS.primary} style={styles.icon} />
            <Text style={styles.detailText}>{item.location}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <MaterialIcons name="person" size={18} color={COLORS.primary} style={styles.icon} />
            <Text style={styles.detailText}>Organized by: {item.organizer}</Text>
          </View>
        </View>
        
        <Text style={styles.eventDescription} numberOfLines={3}>
          {item.description}
        </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.viewDetailsButton}
            onPress={() => navigation.navigate('EventDetail', { id: item.id })}
          >
            <Text style={styles.viewDetailsText}>View Details</Text>
          </TouchableOpacity>
          
          {item.registrationRequired && (
            <Button 
              title="Register" 
              onPress={() => handleRegister(item.registrationLink)}
              variant="primary"
              style={styles.registerButton}
            />
          )}
        </View>
      </CardContent>
    </Card>
  );

  return (
    <View style={styles.container}>
      <PageHeader title="Events & Activities" />
      
      <FlatList
        data={eventsData}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialIcons name="event-busy" size={48} color={COLORS.gray[400]} />
            <Text style={styles.emptyText}>No upcoming events</Text>
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
  },
  eventCard: {
    marginBottom: SPACING.md,
    ...SHADOWS.medium,
  },
  eventTitle: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.gray[800],
    marginBottom: SPACING.sm,
  },
  eventDetails: {
    marginBottom: SPACING.md,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  icon: {
    marginRight: SPACING.xs,
  },
  detailText: {
    fontSize: SIZES.sm,
    color: COLORS.gray[600],
    flex: 1,
  },
  eventDescription: {
    fontSize: SIZES.md,
    color: COLORS.gray[700],
    marginBottom: SPACING.md,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  viewDetailsButton: {
    padding: SPACING.sm,
  },
  viewDetailsText: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: SIZES.sm,
  },
  registerButton: {
    paddingHorizontal: SPACING.md,
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

export default Events;
