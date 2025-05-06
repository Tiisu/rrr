import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS, SPACING, SHADOWS } from '../../lib/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

interface CardHeaderProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

interface CardTitleProps {
  children: React.ReactNode;
  style?: TextStyle;
}

interface CardContentProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

interface CardDescriptionProps {
  children: React.ReactNode;
  style?: TextStyle;
}

interface CardFooterProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export const CardHeader: React.FC<CardHeaderProps> = ({ children, style }) => {
  return <View style={[styles.cardHeader, style]}>{children}</View>;
};

export const CardTitle: React.FC<CardTitleProps> = ({ children, style }) => {
  return <Text style={[styles.cardTitle, style]}>{children}</Text>;
};

export const CardContent: React.FC<CardContentProps> = ({ children, style }) => {
  return <View style={[styles.cardContent, style]}>{children}</View>;
};

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, style }) => {
  return <Text style={[styles.cardDescription, style]}>{children}</Text>;
};

export const CardFooter: React.FC<CardFooterProps> = ({ children, style }) => {
  return <View style={[styles.cardFooter, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    ...SHADOWS.small,
    marginVertical: SPACING.sm,
    overflow: 'hidden',
  },
  cardHeader: {
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.gray[800],
  },
  cardContent: {
    padding: SPACING.md,
  },
  cardDescription: {
    fontSize: 14,
    color: COLORS.gray[600],
  },
  cardFooter: {
    padding: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray[200],
  },
});
