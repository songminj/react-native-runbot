import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AnalysisResult from './analysis/AnalysisResult';
import AnalysisSelectScreen from './analysis/AnalysisSelectScreen';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import SelectOnDevice from './screens/SelectOnDevice';
import SelectOnServer from './screens/SelectOnServer';
import LoginScreen from './login/LoginScreen';
import SignInScreen from './login/SignInScreen';
import ProfileScreen from './login/ProfileScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="sign-in" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
          name="MainTabs" 
          component={MainTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="AnalysisResult" component={AnalysisResult} />
        <Stack.Screen name="Select" component={AnalysisSelectScreen} />
        <Stack.Screen name="Device" component={SelectOnDevice} />
        <Stack.Screen name="Server" component={SelectOnServer} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
