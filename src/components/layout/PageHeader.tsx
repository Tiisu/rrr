import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS, SPACING, SIZES } from '../../lib/theme';

interface PageHeaderProps {
  title: string;
  showBackButton?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  showBackButton = false 
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: SPACING.md,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.xl,
    fontWeight: 'bold',
  },
});

export default PageHeader;
