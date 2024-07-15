import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View, Text } from 'react-native';



const LoadingScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('AnalysisResult');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return(
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" />
      <Text>운동 결과를 분석중입니다.</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default LoadingScreen;