import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen'; // Adjust the path as necessary
import TextToSpeechScreen from './screens/TextToSpeechScreen'; // Adjust the path as necessary

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
