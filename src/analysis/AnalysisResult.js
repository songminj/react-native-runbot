import React from "react";
import {
  View, 
  Text, 
  StyleSheet,
  Dimensions
} 
from 'react-native';

import LargeButton from '../components/LargeButton';

const AnalysisResult = ({navigation}) => {
  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const score = rand(0, 101)
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>분석 결과</Text>
      <Text>사용자님의 자세는 {score}점 입니다!</Text>
      <View style={styles.reviewContainer}>
        <Text>자세 리뷰</Text>
        <Text>상체 자세는 </Text>
        <Text>하체 자세는 </Text>
        <Text>접지 자세는 </Text>
      </View>
      <LargeButton
        title='처음으로'
        toward='Home'
        navigation={navigation} 
      />
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
  reviewContainer: {
    margin:10,
    fontSize: 20,
  }
});

export default AnalysisResult;