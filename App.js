import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import AnalysisScreen from './src/screens/AnalysisScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import AnalysisResult from './src/screens/AnalysisResult';
import SelectScreen from './src/screens/AnalysisSelectScreen';
import SelectOnDevice from './src/screens/SelectOnDevice';
import SelectOnServer from './src/screens/SelectOnServer';

const Stack = createNativeStackNavigator();

const HiUser = () => {
  return (
    <View style={styles.hiUserContainer}>
      <Text style={styles.hiUserText}>안녕하세요 사용자님!</Text>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1e1e1e' : '#f2f2f2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HiUser />
      <View style={styles.container}>
        <View style={styles.buttonStyle}>
          <Text
            style={styles.buttonTextStyle}
            onPress={() => navigation.navigate('Select')}
          >
            분석하러가기
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

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

const styles = StyleSheet.create({
  hiUserContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f9c2ff',
  },
  hiUserText: {
    fontSize: 18,
    color: 'black',
  },
  buttonStyle: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
