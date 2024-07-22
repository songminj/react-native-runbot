import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';

import LargeButton from '../components/LargeButton';


const width = Dimensions.get('window').width;

const HiUser = () => {
  return (
    <View style={styles.hiUserContainer}>
      <Text style={styles.hiUserText}> USER님</Text>
      {/* <Text style={styles.hiUserText}>{로그인 되어있으면 ? 'storage 의 userId': 'USER'}</Text> */}
      <Text style={styles.hiUserText}>안녕하세요!</Text>
    </View>
  );
};

const HomeImage = () => {
  return (
    <View>
      <Image
        style={styles.tiny}
        source={require('../../assets/run1.jpg')}
        resizeMode="contain"
      />
      <Image
        style={styles.tiny}
        source={require('../../assets/run2.jpg')}
        resizeMode="contain"
      />
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1e1e1e' : '#f2f2f2',
    flex: 1,
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        setIsLoggedIn(true);
        console.log('로그인중');
      } else {
        setIsLoggedIn(false);
        console.log('로그인 안되어있음');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setIsLoggedIn(false);
      navigation.navigate('Login');
      console.log('로그아웃 완료');
      // async storage remove item
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* 로그인 상태에 따라 버튼을 다르게 표시 */}

        
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={isLoggedIn ? handleLogout : handleLogin}
        >
          <Text style={styles.buttonTextStyle}>
            {isLoggedIn ? '로그아웃하기' : '로그인하기'}
          </Text>
        </TouchableOpacity>

        <View>
          <Icon name="home" size={24} color="#000000" />
        </View>
        <HiUser />
        <View style={styles.container}>
          <LargeButton
            title='영상 분석하기'
            toward='Select'
            navigation = {navigation}
          />
        </View>
        <HomeImage />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  hiUserContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  hiUserText: {
    fontSize: 18,
    color: 'black',
  },
  buttonStyle: {
    backgroundColor: '#000000',
    width: width * 0.9,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center', // Center align the text inside the button
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tiny: {
    width: width * 0.9,
    height: undefined,
    aspectRatio: 1,  // adjust the aspect ratio as per your requirement
    marginBottom: 10,
  },
})

export default HomeScreen;
