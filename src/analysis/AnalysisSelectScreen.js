import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
} from 'react-native';
import LargeButton from "../components/LargeButton";


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
      <View style={styles.buttonContainer}>
        <LargeButton
          title='갤러리에서 영상 가져오기'
          toward='Device'
          navigation={navigation}
        />
        <LargeButton
          title='로봇카로 촬영한 영상 찾아보기'
          toward='Server'
          navigation={navigation}
        />
      </View>
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
    justifyContent: 'center',
    alignItems: 'center', 
  },
});

export default SelectScreen;
