import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prevRotation => (prevRotation + 2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          style={[styles.logo, { transform: [{ rotate: `${rotation}deg` }] }]}
          source={require('./src/assets/logo.png')}
        />
        <Text style={styles.text}>Hello, World!</Text>
        <TextInput style={styles.input}
          color='black'
          placeholder='Digite aqui o seu texto'
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Pressione</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    marginTop: 100,
  },
  logo: {
    width: 120,
    height: 120
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
    color: 'black',
    marginTop: 150,
    marginBottom: 100,
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#5C6672',
    borderRadius: 8,
    paddingLeft: 20,
  },
  btn: {
    marginTop: 40,
    backgroundColor: 'black',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 8,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700'
  },
});
