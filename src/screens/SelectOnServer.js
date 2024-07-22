import React from "react";
import axios from 'axios';
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions
} from 'react-native';

import LargeButton from '../components/LargeButton';

const width = Dimensions.get('window').width;

// 선언부 
const RequestService = () => {
  requestHttpGet = () => {
    return axios({
        method: 'get',
        url: "http://3.35.213.242:8080/api-join/(pk)",
    });
  }
}

// 호출부 
const RequestScreen = () => {
  useEffect(() => {
    RequestService.requestHttpGet()
      .then((request) => {
        console.log("결과값 : ", request)
      }).catch((error) => {
        console.log("에러 : ", error)
      })
  })
}

const SelectOnServer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>로봇카로 촬영한 영상 찾아보기</Text>
      <LargeButton
        title='분석하러 가기'
        toward='Loading'
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
});

export default SelectOnServer;
