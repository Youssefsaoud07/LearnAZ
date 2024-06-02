import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const schoolBg = 'https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg' // Replace with your background image

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={{uri:schoolBg}} style={styles.container}>
      <Text style={styles.title}>Bienvenue dans LearnAZ</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TextToSpeech')}
      >
        <Text style={styles.buttonText}>Aller à la Texte à la Voix</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f15454', // Red
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
