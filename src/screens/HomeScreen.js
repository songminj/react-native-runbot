import React from "react";
// import Icon from "react-native-vector-icons/Ionicons";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

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
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            console.log('Button Pressed');
            navigation.navigate('Select');}}
        >
          <Text style={styles.buttonTextStyle}>영상 선택 하러가기</Text>
        </TouchableOpacity>
        {/* <Icon name="ios-body" size={30} color="#4F8EF7" />
        <Icon name="heart-outline" size={30} color="#4F8EF7" />
        <Icon name="download-outline" size={30} color="#4F8EF7" /> */}
      </View>
    </SafeAreaView>
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
    marginBottom: 10,
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

export default HomeScreen;