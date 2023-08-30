import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScreenA = () => {
  return (
    <View style={styles.center}>
      <Text>Screen A</Text>
    </View>
  );
};

export default ScreenA;
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
