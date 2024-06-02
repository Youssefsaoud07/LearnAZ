import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, I18nManager, Modal, Animated, ActivityIndicator, StatusBar } from 'react-native';
import { BlurView } from 'expo-blur';
import * as Speech from 'expo-speech';
import * as Sharing from 'expo-sharing';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const frenchBg = 'https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg'; // Replace with your URL
const arabicBg = 'https://static.vecteezy.com/system/resources/thumbnails/003/323/638/small_2x/flat-teachers-day-background-free-vector.jpg'; // Replace with your URL

const TextToSpeechScreen = () => {
  const [text, setText] = useState('');
  const [isArabic, setIsArabic] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [points, setPoints] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  const speak = () => {
    if (text.trim()) {
      Speech.speak(text, { language: isArabic ? 'ar' : 'fr' });
    }
  };

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
    I18nManager.forceRTL(!isArabic);
  };

  const startAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (text.trim() && displayedText !== text) {
      setLoading(true);
      setTimeout(() => {
        setDisplayedText(text);
        setLoading(false);
      }, 1000); // Adjust the delay as needed
    }
  }, [text, displayedText]);

  const shareScore = async () => {
    await Sharing.shareAsync(isArabic ? 'لقد وصلت إلى 100 نقطة في تطبيق التحويل النص إلى كلام!' : 'J\'ai atteint 100 points dans l\'application de conversion de texte en parole !');
  };

  return (
    <ImageBackground
      source={{ uri: isArabic ? arabicBg : frenchBg }}
      style={styles.container}
    >
      <StatusBar translucent backgroundColor="transparent" />
      <BlurView intensity={130} style={StyleSheet.absoluteFill}>
        <Text style={styles.title}>
          {isArabic ? 'النص إلى كلام' : 'Texte en parole'}
        </Text>
        <TextInput
          style={[styles.input, isArabic ? styles.inputRTL : styles.inputLTR]}
          placeholder={isArabic ? 'اكتب بالعربية' : 'Tapez en français'}
          value={text}
          onChangeText={setText}
          multiline
          textAlign={isArabic ? 'right' : 'left'}
        />
        <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={speak}>
        <Ionicons name="volume-high-outline" size={24} color="white" />
          <Text style={styles.buttonText}>
            {isArabic ? 'استمع' : 'Écouter'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.switchButton} onPress={toggleLanguage}>
        <Ionicons name={isArabic ? 'language' : 'language-outline'} size={24} color="white" />
          <Text style={styles.buttonText}>
            {isArabic ? 'التبديل إلى الفرنسية' : 'Basculer en arabe'}
          </Text>
        </TouchableOpacity>
        </View>
      
      </BlurView>

      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
            <Text style={styles.congratsText}>
              {isArabic ? 'مبروك! لقد وصلت إلى 100 نقطة!' : 'Félicitations! Vous avez atteint 100 points !'}
            </Text>
            <TouchableOpacity style={styles.shareButton} onPress={shareScore}>
              <Text style={styles.buttonText}>
                {isArabic ? 'شارك على وسائل التواصل الاجتماعي' : 'Partager sur les médias sociaux'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    maringTop: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f15454',
    textAlign: 'center',
    marginTop: 20
  },
  input: {
    height: 100,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    textAlignVertical: 'top',
    fontSize: 18,
  },
  inputLTR: {
    textAlign: 'left',
  },
  inputRTL: {
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20
    ,
    borderRadius: 10,
    marginBottom: 10,
    width: 150,
    flexDirection: 'row',
    gap: 10
    },
    buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    },
    switchButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    width: 250,
    flexDirection: 'row',
    gap: 10
    },
    pointsText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
    },
    modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    },
    congratsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    },
    shareButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    },
    loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    });
    
    export default TextToSpeechScreen;
    