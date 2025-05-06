import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigator from './src/navigation';
import SplashScreen from './src/pages/SplashScreen';
import { COLORS } from './src/lib/theme';

// Create a client
const queryClient = new QueryClient();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplashFinish = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar style="light" backgroundColor={COLORS.primary} />
        {isLoading ? (
          <SplashScreen onFinish={handleSplashFinish} />
        ) : (
          <AppNavigator />
        )}
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
