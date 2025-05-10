import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity,
  Linking,
  Share
} from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { format } from 'date-fns';

import PageHeader from '../components/layout/PageHeader';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { eventsData } from '../data/mockData';
import { COLORS, SPACING, SIZES, SHADOWS } from '../lib/theme';
import { RootStackParamList } from '../navigation';

type EventDetailRouteProp = RouteProp<RootStackParamList, 'EventDetail'>;
type EventDetailNavigationProp = StackNavigationProp<RootStackParamList, 'EventDetail'>;

const EventDetail = () => {
  const route = useRoute<EventDetailRouteProp>();
  const navigation = useNavigation<EventDetailNavigationProp>();
  const { id } = route.params;
  
  const event = eventsData.find(event => event.id === id);
  
  if (!event) {
    return (
      <View style={styles.container}>
        <PageHeader title="Event Not Found" showBackButton />
        <View style={styles.errorContainer}>
          <MaterialIcons name="error-outline" size={48} color={COLORS.error} />
          <Text style={styles.errorText}>Event not found</Text>
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

  const handleRegister = () => {
    if (event.registrationLink) {
      Linking.openURL(event.registrationLink);
    } else {
      // In a real app, this would navigate to a registration form
      alert('Registration form would open here');
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this event: ${event.title} on ${format(event.startDate, 'MMMM d, yyyy')} at ${event.location}. ${event.description}`,
        title: event.title,
      });
    } catch (error) {
      alert('Error sharing event');
    }
  };

  const handleAddToCalendar = () => {
    // In a real app, this would integrate with the device calendar
    alert('Event would be added to your calendar');
  };

  return (
    <View style={styles.container}>
      <PageHeader title="Event Details" showBackButton />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>{event.title}</Text>
        </View>
        
        <Card>
          <CardContent>
            <View style={styles.detailRow}>
              <MaterialIcons name="event" size={24} color={COLORS.primary} style={styles.icon} />
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Date & Time</Text>
                <Text style={styles.detailText}>
                  {formatEventDate(event.startDate, event.endDate)}
                </Text>
              </View>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.detailRow}>
              <MaterialIcons name="location-on" size={24} color={COLORS.primary} style={styles.icon} />
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Location</Text>
                <Text style={styles.detailText}>{event.location}</Text>
              </View>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.detailRow}>
              <MaterialIcons name="person" size={24} color={COLORS.primary} style={styles.icon} />
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Organizer</Text>
                <Text style={styles.detailText}>{event.organizer}</Text>
              </View>
            </View>
          </CardContent>
        </Card>
        
        <Card style={styles.descriptionCard}>
          <CardContent>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{event.description}</Text>
          </CardContent>
        </Card>
        
        <View style={styles.actionButtons}>
          {event.registrationRequired && (
            <Button 
              title="Register Now" 
              onPress={handleRegister}
              variant="primary"
              style={styles.registerButton}
            />
          )}
          
          <View style={styles.secondaryActions}>
            <TouchableOpacity style={styles.actionButton} onPress={handleAddToCalendar}>
              <MaterialIcons name="calendar-today" size={24} color={COLORS.primary} />
              <Text style={styles.actionText}>Add to Calendar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
              <MaterialIcons name="share" size={24} color={COLORS.primary} />
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.gray[800],
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SPACING.md,
  },
  icon: {
    marginRight: SPACING.md,
    marginTop: 2,
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    fontSize: SIZES.sm,
    color: COLORS.gray[500],
    marginBottom: 2,
  },
  detailText: {
    fontSize: SIZES.md,
    color: COLORS.gray[800],
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.gray[200],
    marginVertical: SPACING.md,
  },
  descriptionCard: {
    marginTop: SPACING.md,
  },
  sectionTitle: {
    fontSize: SIZES.lg,
    fontWeight: '600',
    color: COLORS.gray[800],
    marginBottom: SPACING.sm,
  },
  description: {
    fontSize: SIZES.md,
    color: COLORS.gray[700],
    lineHeight: 22,
  },
  actionButtons: {
    marginTop: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  registerButton: {
    marginBottom: SPACING.md,
  },
  secondaryActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    alignItems: 'center',
    padding: SPACING.md,
  },
  actionText: {
    fontSize: SIZES.sm,
    color: COLORS.primary,
    marginTop: SPACING.xs,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },
  errorText: {
    fontSize: SIZES.lg,
    color: COLORS.gray[700],
    marginVertical: SPACING.md,
  },
  backButton: {
    marginTop: SPACING.md,
  },
});

export default EventDetail;
