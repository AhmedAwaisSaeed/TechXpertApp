import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScreenB = () => {
  return (
    <View style={styles.center}>
      <Text>Screen B</Text>
    </View>
  );
};

export default ScreenB;
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
