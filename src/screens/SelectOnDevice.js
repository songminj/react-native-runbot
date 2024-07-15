import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const SelectOnDevice = () => {
  return (
    <View style={styles.container}>
      <Text>갤러리에서 영상 가져오기</Text>
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

export default SelectOnDevice;
