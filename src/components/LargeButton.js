import React from 'react';
import { 
  TouchableOpacity, 
  Dimensions,
  Text 
} from 'react-native';


const width = Dimensions.get('window').width;
const LargeButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => {
        props.navigation.navigate(props.toward);
      }}
    >
      <Text style={styles.buttonTextStyle}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    backgroundColor: '#000000',
    width: width * 0.9,
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