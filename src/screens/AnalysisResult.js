import React from "react";
import {
  View, 
  Text, 
  StyleSheet,
  Button} 
from 'react-native';

const AnalysisResult = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>분석 결과</Text>
      <Button
        title="처음으로"
        onPress={() => navigation.navigate('Home')}
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
});

export default AnalysisResult;
