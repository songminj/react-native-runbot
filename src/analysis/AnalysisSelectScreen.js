import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Dimensions,
} from 'react-native';


const width = Dimensions.get('window').width;
const SelectScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>운동 기록</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.description}>
          여러분의 달리기 자세를 분석하여 자세교정이 필요한 부분을 알려드립니다.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Device');}}
      >
        <Text style={styles.buttonTextStyle}>갤러리에서 영상 가져오기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Server');}}
      >
        <Text style={styles.buttonTextStyle}>로봇카로 촬영한 영상 찾아보기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    margin: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
});

export default SelectScreen;
