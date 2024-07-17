import React from "react";
import {
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  Dimensions
} 
from 'react-native';

const width = Dimensions.get('window').width;

const AnalysisResult = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>분석 결과</Text>
      <Text>사용자님의 자세는 100점 입니다!</Text>
      <View style={styles.reviewContainer}>
        <Text>자세 리뷰</Text>
        <Text>상체 자세는 </Text>
        <Text>하체 자세는 </Text>
        <Text>접지 자세는 </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonTextStyle}>처음으로</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  headerText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#000000',
    width: width * 0.9,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,  // 추가적으로 버튼과 텍스트 사이에 여백을 줍니다.
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  reviewContainer: {
    margin:10,
    fontSize: 20,
  }
});

export default AnalysisResult;
