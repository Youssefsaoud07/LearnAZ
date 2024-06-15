import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const schoolBg = 'https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg'; // Image de fond

const HomeScreen = ({ navigation }) => {
  const buttons = [
    { screenName: 'TextToSpeech', title: 'Plume et Parole', color: '#3e7af0', size: 'big' },
    { screenName: 'Exercice', title: 'Mes Exercices', color: '#e67e22', size: 'small' },
    { screenName: 'MaFamille', title: 'Ma Famille', color: '#f1c40f', size: 'small' },
    { screenName: 'MonAmour', title: 'Mon Amour', color: '#e74c3c', size: 'big' },
    { screenName: 'MonEcole', title: 'Mon École', color: '#16a085', size: 'small' },
    { screenName: 'MonCorps', title: 'Mon Corps', color: '#3498db', size: 'big' },
    { screenName: 'DansMonAssiette', title: 'Dans Mon Assiette', color: '#2ecc71', size: 'small' },
    { screenName: 'MesAmisLesAnimaux', title: 'Mes Amis, Les Animaux', color: '#9b59b6', size: 'big' },
    { screenName: 'MonAmiLeLivre', title: 'Mon Ami, Le Livre', color: '#e67e22', size: 'small' },
    { screenName: 'BlogScreen', title: 'Blog Scolaire', color: '#3498db', size: 'big' },
  ];

  const renderButton = ({ item }) => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate(item.screenName)}
    >
      <Text style={[styles.buttonText, { fontSize: item.size === 'big' ? 24 : 16 }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={{ uri: schoolBg }} style={styles.container}>
      <Text style={styles.title}>Bienvenue dans LearnAZ</Text>
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <View key={index} style={styles.buttonWrapper}>
            {renderButton({ item: button })}
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonWrapper: {
    margin: 5,
  },
  button: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
