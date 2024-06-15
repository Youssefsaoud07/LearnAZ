import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen'; // Adjust the path as necessary
import TextToSpeechScreen from './screens/PlumeEtEcrire'; // Adjust the path as necessary
import MaFamille from './screens/MaFamille';
import MonAmour from './screens/MonAmour';
import MonEcole from './screens/MonEcole';
import MonCorps from './screens/MonCorps';
import DansMonAssiette from './screens/DansMonAssiette';
import MesAmisLesAnimaux from './screens/MesAmisLesAnimaux';
import MonAmiLeLivre from './screens/MonAmiLeLivre';
import MyExercices from './screens/TextToSpeechScreen';
import BlogScreen from './screens/blogging';


const Stack = createStackNavigator();

const App = () => {
  const shareIcon = (navigation) => (
    <Ionicons
      name="share-social-outline"
      size={24}
      color="#ffffff"
      style={{ marginRight: 15 }}
      onPress={() => {
        // Logic for sharing to social media
        // You can use libraries like expo-sharing for this functionality
      }}
    />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f15454',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => shareIcon(),
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="TextToSpeech"
          component={TextToSpeechScreen}
          options={{ title: 'Text to Speech' }}
        />
          <Stack.Screen
          name="Exercice"
          component={MyExercices}
          options={{ title: 'Mes exercices' }}
        />
         <Stack.Screen
          name="MaFamille"
          component={MaFamille}
          options={{ title: 'Ma Famille' }}
        />
        <Stack.Screen
          name="MonAmour"
          component={MonAmour}
          options={{ title: 'Mon Amour' }}
        />
        <Stack.Screen
          name="MonEcole"
          component={MonEcole}
          options={{ title: 'Mon École' }}
        />
        <Stack.Screen
          name="MonCorps"
          component={MonCorps}
          options={{ title: 'Mon Corps' }}
        />
        <Stack.Screen
          name="DansMonAssiette"
          component={DansMonAssiette}
          options={{ title: 'Dans Mon Assiette' }}
        />
        <Stack.Screen
          name="MesAmisLesAnimaux"
          component={MesAmisLesAnimaux}
          options={{ title: 'Mes Amis, Les Animaux' }}
        />
        <Stack.Screen
          name="MonAmiLeLivre"
          component={MonAmiLeLivre}
          options={{ title: 'Mon Ami, Le Livre' }}
        />
         <Stack.Screen
          name="BlogScreen"
          component={BlogScreen}
          options={{ title: 'Blog Scolaire' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
