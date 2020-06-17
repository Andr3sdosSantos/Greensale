/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="with-content" />
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            Primeiro, deixe eu ver se você é um Greener 👽
          </Text>
          <TextInput
            style={styles.sectionInput}
            placeholder={' Enter with your name'}
          />
          <TextInput
            style={styles.sectionInput}
            placeholder={' Enter with corporative email'}
          />
          <TextInput
            style={styles.sectionInput}
            placeholder={' Enter with a sector'}
            multiline // Guarda em um 'cache' o que foi digitado
          />
          <TextInput
            style={styles.sectionInput}
            placeholder={' Enter a secret password'}
          />
          <TextInput
            style={styles.sectionInput}
            placeholder={' Please, confirm this password'}
            marginBottom={32}
          />

          <Button title="I'm a Greener?" color="#b1ba49" />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  StatusBar: {
    backgroundColor: '#7159C1',
  },
  sectionInput: {
    height: 40,
    borderWidth: 3,
    marginTop: 25,
    borderColor: '#b1ba49',
    borderRadius: 2,
  },
  TextInput: {
    marginTop: 32,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: '900',
    color: '#b1ba49',
  },
  sectionDescription: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
