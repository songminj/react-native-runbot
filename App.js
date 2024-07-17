import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import AnalysisScreen from './src/screens/AnalysisScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import AnalysisResult from './src/screens/AnalysisResult';
import SelectScreen from './src/screens/AnalysisSelectScreen';
import SelectOnDevice from './src/screens/SelectOnDevice';
import SelectOnServer from './src/screens/SelectOnServer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Analysis" component={AnalysisScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="AnalysisResult" component={AnalysisResult} />
        <Stack.Screen name="Select" component={SelectScreen} />
        <Stack.Screen name="Device" component={SelectOnDevice} />
        <Stack.Screen name="Server" component={SelectOnServer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
