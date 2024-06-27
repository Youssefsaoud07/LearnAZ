import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';
import MrPerroquet from '../assets/logo.png'
import bgImage from '../assets/bgimagemobile.png'
const schoolBg = 'https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg'; // Image de fond

const HomeScreen = ({ navigation }) => {
  const buttons = [
    { screenName: 'TextToSpeech', title: 'Plume et Parole', color: '#3e7af0', size: 'small' },
    { screenName: 'Exercice', title: 'Mes jeux préférés', color: '#e67e22', size: 'small' },
    { screenName: 'MaFamille', title: 'Ma Famille', color: '#f1c40f', size: 'small' },
    { screenName: 'MonAmour', title: 'Mon Amour', color: '#e74c3c', size: 'small' },
    { screenName: 'MonEcole', title: 'Mon École', color: '#16a085', size: 'small' },
    { screenName: 'MonCorps', title: 'Mon Corps', color: '#3498db', size: 'small' },
    { screenName: 'DansMonAssiette', title: 'Dans Mon Assiette', color: '#2ecc71', size: 'small' },
    { screenName: 'MesAmisLesAnimaux', title: 'Mes Amis, Les Animaux', color: '#9b59b6', size: 'small' },
    { screenName: 'MonAmiLeLivre', title: 'Mon Ami, Le Livre', color: '#e67e22', size: 'small' },
    { screenName: 'BlogScreen', title: 'Blog Scolaire', color: '#3498db', size: 'small' },
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
    <ImageBackground source={bgImage} resizeMode='cover' style={styles.container}>
      <Text style={styles.title}>Bienvenue dans Mr Perroquet</Text>
      <Image source={MrPerroquet } style={styles.imageLogo} />
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
    resizeMode:'repeat'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
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
    width: 100,
    height: 100,
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
  imageLogo:{
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 100
  }
});

export default HomeScreen;
