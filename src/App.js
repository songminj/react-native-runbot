import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import AnalysisResult from './analysis/AnalysisResult';
import AnalysisSelectScreen from './analysis/AnalysisSelectScreen';
import SelectOnDevice from './screens/SelectOnDevice';
import SelectOnServer from './screens/SelectOnServer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="AnalysisResult" component={AnalysisResult} />
        <Stack.Screen name="Select" component={AnalysisSelectScreen} />
        <Stack.Screen name="Device" component={SelectOnDevice} />
        <Stack.Screen name="Server" component={SelectOnServer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
