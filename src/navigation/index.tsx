import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

// Import screens
import HomeScreen from '../pages/Home';
import CoursesScreen from '../pages/Courses';
import CourseDetailScreen from '../pages/CourseDetail';
import FacultyScreen from '../pages/Faculty';
import FacultyDetailScreen from '../pages/FacultyDetail';
import NewsScreen from '../pages/News';
import NewsDetailScreen from '../pages/NewsDetail';
import DepartmentDetailScreen from '../pages/DepartmentDetail';
import NotFoundScreen from '../pages/NotFound';

// Import theme
import { COLORS } from '../lib/theme';

// Define navigation types
export type RootStackParamList = {
  Main: undefined;
  CourseDetail: { id: string };
  FacultyDetail: { id: string };
  NewsDetail: { id: string };
  DepartmentDetail: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Courses: undefined;
  Faculty: undefined;
  News: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

// Bottom Tab Navigator
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray[400],
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Faculty"
        component={FacultyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="people" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="notifications" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Root Stack Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CourseDetail"
          component={CourseDetailScreen}
          options={({ route }) => ({
            title: 'Course Details',
          })}
        />
        <Stack.Screen
          name="FacultyDetail"
          component={FacultyDetailScreen}
          options={({ route }) => ({
            title: 'Faculty Member',
          })}
        />
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetailScreen}
          options={({ route }) => ({
            title: 'Announcement',
          })}
        />
        <Stack.Screen
          name="DepartmentDetail"
          component={DepartmentDetailScreen}
          options={{
            title: 'Department Info',
          }}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{
            title: 'Not Found',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
