import React from 'react';
import { View, Text, Button } from 'react-native';

function AnalysisScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Analysis Screen</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default AnalysisScreen;
