import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ViewStyle, 
  TextStyle, 
  ActivityIndicator 
} from 'react-native';
import { COLORS, SPACING, SIZES } from '../../lib/theme';

type ButtonVariant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'default',
  size = 'md',
  disabled = false,
  loading = false,
  style,
  textStyle,
  leftIcon,
  rightIcon,
}) => {
  const buttonStyles = [
    styles.button,
    styles[`${variant}Button`],
    styles[`${size}Button`],
    disabled && styles.disabledButton,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'outline' || variant === 'ghost' ? COLORS.primary : COLORS.white} 
          size="small" 
        />
      ) : (
        <>
          {leftIcon}
          <Text style={textStyles}>{title}</Text>
          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  // Variants
  defaultButton: {
    backgroundColor: COLORS.gray[200],
  },
  defaultText: {
    color: COLORS.gray[800],
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  primaryText: {
    color: COLORS.white,
  },
  secondaryButton: {
    backgroundColor: COLORS.secondary,
  },
  secondaryText: {
    color: COLORS.black,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  outlineText: {
    color: COLORS.primary,
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  ghostText: {
    color: COLORS.primary,
  },
  // Sizes
  smButton: {
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
  },
  smText: {
    fontSize: SIZES.sm,
  },
  mdButton: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
  },
  mdText: {
    fontSize: SIZES.md,
  },
  lgButton: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
  },
  lgText: {
    fontSize: SIZES.lg,
  },
  // States
  disabledButton: {
    backgroundColor: COLORS.gray[200],
    borderColor: COLORS.gray[200],
  },
  disabledText: {
    color: COLORS.gray[400],
  },
});

export default Button;
