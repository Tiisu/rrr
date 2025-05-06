import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import PageHeader from '../components/layout/PageHeader';
import Button from '../components/ui/Button';
import { COLORS, SPACING, SIZES } from '../lib/theme';
import { RootStackParamList } from '../navigation';

type NotFoundScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const NotFound = () => {
  const navigation = useNavigation<NotFoundScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <PageHeader title="Page Not Found" />
      
      <View style={styles.content}>
        <MaterialIcons name="error-outline" size={80} color={COLORS.error} />
        <Text style={styles.title}>404</Text>
        <Text style={styles.subtitle}>Page Not Found</Text>
        <Text style={styles.message}>
          The page you are looking for doesn't exist or has been moved.
        </Text>
        
        <Button 
          title="Go to Home" 
          onPress={() => navigation.navigate('Main')}
          variant="primary"
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.gray[800],
    marginTop: SPACING.lg,
  },
  subtitle: {
    fontSize: SIZES.xl,
    fontWeight: '600',
    color: COLORS.gray[700],
    marginBottom: SPACING.md,
  },
  message: {
    fontSize: SIZES.md,
    color: COLORS.gray[600],
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  button: {
    width: '80%',
  },
});

export default NotFound;
