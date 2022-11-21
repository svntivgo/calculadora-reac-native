/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Calculadora from './src/screens/Calculadora';

// const operacion: string = '2+2';
// historialItems.forEach(item => {
//   historial.push(
//     <Text key={`historial__${item}`} style={styles.historialItem}>
//       {item}
//     </Text>,
//   );
// });

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Calculadora />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
