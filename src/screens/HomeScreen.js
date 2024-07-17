import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';

const width = Dimensions.get('window').width;

const HiUser = () => {
  return (
    <View style={styles.hiUserContainer}>
      <Text style={styles.hiUserText}>사용자님</Text>
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
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
        </View>
        <HomeImage />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: width * 0.9,
  },
  hiUserContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
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
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
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
});

export default HomeScreen;
