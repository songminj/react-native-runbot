import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';


const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [phone, setPhone] = useState('');

  const requestPost = async () => {
    const data = {
        username: username,
        password: password,
        userId: userId,
        phone: phone,
    };

    try {
        const response = await axios.post('http://3.35.213.242:8080/api-member/join', data);
        console.log(response.data)
        navigation.navigate('Home')
    } catch (error) {
        console.error(error);
    }
  }
  // const handleSignUp = async () => {
  //   try {
  //     const response = await axios.post('http://3.35.213.242:8080/api-member/join', {
  //       username,
  //       password,
  //       userId,
  //       phone,
  //     });

  //     if (response.data.success) {
  //       Alert.alert('회원가입 성공', '회원가입이 성공적으로 완료되었습니다.');
  //       await AsyncStorage.setItem('userToken', response.data.token);
  //       // 성공 후 필요한 네비게이션이나 상태 업데이트 로직 추가
  //     } else {
  //       Alert.alert('회원가입 실패', response.data.message);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert('에러', error.response?.data?.message || '회원가입 중 에러가 발생했습니다.');
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="이름"
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="전화번호"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="아이디"
          value={userId}
          onChangeText={text => setUserId(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity 
        style={styles.signUpButton} 
        onPress={requestPost}

      >
        <Text style={styles.signUpButtonText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  signUpButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signUpButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default SignInScreen;
