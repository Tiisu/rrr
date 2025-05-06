import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, SIZES } from '../lib/theme';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UDS CS Department</Text>
      <Text style={styles.subtitle}>Mobile App</Text>
      <ActivityIndicator 
        size="large" 
        color={COLORS.secondary} 
        style={styles.loader} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  title: {
    fontSize: SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: SIZES.lg,
    color: COLORS.secondary,
    marginBottom: 48,
  },
  loader: {
    marginTop: 20,
  },
});

export default SplashScreen;
