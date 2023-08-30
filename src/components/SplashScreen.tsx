import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from '../firebase';
const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      firebase;
    }, 3000);
  }, []);
  return (
    <View style={styles.center}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
