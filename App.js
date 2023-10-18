import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import EdtechScreen from './screens/EdtechScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <HomeScreen />
      <EdtechScreen />
      </ScrollView>
    </SafeAreaView>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
