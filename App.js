import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import { Form } from './components/Form';

import { Privacy } from './components/Privacy';
import { Tabs } from './components/Tabs';


const App = () =>  {

  return (
    <SafeAreaView style={styles.fondo}>
      <Text style={styles.titulo}>Login</Text>
      <Privacy/>
      <Tabs/>
      <Form/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontFamily: 'Sakkal Majalla',
    fontStyle: 'normal',
    fontSize: 40,
    lineHeight: 56,
    textAlign: 'center',
  },
  fondo: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 45,
    paddingVertical: 35
  },
});

export default App;
