// firebase.ts
import React from 'react';
import firebase from '@react-native-firebase/app';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {Linking} from 'react-native';
import type {NavigationContainerRef} from '@react-navigation/native';

type RootStackParamList = {
  SplashScreen: undefined;
  ScreenA: undefined;
  ScreenB: undefined;
};

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

const handleDynamicLink = async (link: any) => {
  if (link) {
    const deepLink = link;

    if (deepLink.includes('linkA')) {
      navigationRef.current?.navigate('ScreenA');
    } else if (deepLink.includes('linkB')) {
      navigationRef.current?.navigate('ScreenB');
    }
  }
};

// dynamicLinks().getInitialLink().then(handleDynamicLink);
Linking.getInitialURL().then(handleDynamicLink);

Linking.addEventListener('url', async ({url}) => {
  console.log('url linking===', url);
  const link = await dynamicLinks().buildLink({
    link: url,
    domainUriPrefix: 'https://techxpertapp.page.link',
  });
  handleDynamicLink(link);
});

export default firebase;
