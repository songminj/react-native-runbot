import React from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;

const SelectOnServer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>로봇카로 촬영한 영상 찾아보기</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Loading')}
      >
        <Text style={styles.buttonTextStyle}>분석하러 가기</Text>
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
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SelectOnServer;
