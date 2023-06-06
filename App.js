import React, { useState, useEffect, useRef } from 'react';
import { Platform, StyleSheet, Button, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      if (location) {
        setLocation({ data: location, type: 'position' });
      } else {
        alert('error 발생');
      }
    })();
  }, []);

  const webViewRef = useRef();
  const sendMessageToWeb = () => {
    webViewRef.current.postMessage(JSON.stringify(location));
  };

  return (
    <>
      <WebView
        style={styles.container}
        ref={webViewRef}
        source={{ uri: 'https://sscetch-15b24.web.app/' }}
        javaScriptEnabled={true}
      />
      <View
        style={{
          marginBottom: 40,
          marginTop: 10,
          backgroundColor: '#0f0',
          maxHeight: '8%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          opacity: 0.7,
          margin: 20,
        }}
      >
        <Button
          style={{ width: '100%' }}
          color='white'
          title='현재 위치로 이동하기'
          onPress={sendMessageToWeb}
        ></Button>
      </View>
    </>
  );
}
