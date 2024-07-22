import React from 'react';
import { 
  Pressable, 
  Dimensions,
  Text
} from 'react-native';


const width = Dimensions.get('window').width;
const LargeButton = (props) => {
  return (
    // 0.63버전 부터는 TouchableOpacity > Pressable로 권장
    <Pressable
      style={styles.buttonStyle}
      onPress={() => {
        props.navigation.navigate(props.toward);
      }}
    >
      <Text style={styles.buttonTextStyle}>
        {props.title}
      </Text>
    </Pressable>
  )
}

const styles = {
  buttonStyle: {
    backgroundColor: '#000000',
    width: width * 0.9,
    innerHeight: 24,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center'
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}

export default LargeButton;