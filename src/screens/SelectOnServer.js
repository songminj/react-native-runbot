import React from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  Button
 } from 'react-native';

const SelectOnServer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>로봇카로 촬영한 영상 찾아보기</Text>
      <Button
        title="분석하러 가기"
        onPress={() => navigation.navigate('Loading')}
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

export default SelectOnServer;
