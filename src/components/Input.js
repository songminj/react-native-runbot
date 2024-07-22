import React from "react";
import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import PropTypes from 'prop-types';

width = Dimensions.get('window').width;
const Input = ({title, placeholder}) => {
  return(
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor={'#a3a3a3'}
      />
    </View>
  )
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder:PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    width : width * 0.8,
  },
})

export default Input;