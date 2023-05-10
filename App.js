// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, View, Image } from 'react-native';

// export default function App() {
//   const [test, setTest] = useState(false);
//   const handleTest = () => setTest(!test);
//   return (
//     <View style={styles.container}>
//       <Text>테스트!!!</Text>
//       <Button title='버튼테스트' color='black' onPress={handleTest} />
//       <Text style={{ display: test ? 'block' : 'none' }}>버튼 눌려짐</Text>

//       <StatusBar style='auto' />
//     </View>
//   );
// }
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const App = () => (
  <View>
    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 80 }}>React Native</Text>
  </View>
);

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
