import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal, 
  Alert 
} from 'react-native'
import axios from 'axios'
import LargeButton from '../components/LargeButton'

const SlicingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LargeButton
        title='결과확인하러 가기'
        toward='Loading'
        navigation={navigation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },

})
export default SlicingScreen