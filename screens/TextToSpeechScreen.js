import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, I18nManager, Modal, Animated, ActivityIndicator, StatusBar, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';

const frenchBg = 'https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg'; // Replace with your URL
const arabicBg = 'https://static.vecteezy.com/system/resources/thumbnails/003/323/638/small_2x/flat-teachers-day-background-free-vector.jpg'; // Replace with your URL

const frenchExercises = [
  {
    id: 1,
    text: 'Le chien ___ sur le toit.',
    missingWord: 'est',
    image: 'https://img.freepik.com/free-photo/portrait-cute-dog-anime-style_23-2151382135.jpg',
  },
  {
    id: 2,
    text: 'Les enfants ___ au parc.',
    missingWord: 'jouent',
    image: 'https://img.freepik.com/vecteurs-premium/enfants-jouent-dans-parc_97632-481.jpg',
  },
  {
    id: 3,
    text: 'Marie ___ une lettre.',
    missingWord: 'écrit',
    image: 'https://previews.123rf.com/images/djvstock/djvstock2104/djvstock210400967/170012782-gar%C3%A7on-%C3%A9crit-une-lettre-dessin-anim%C3%A9.jpg',
  },
  {
    id: 4,
    text: 'Le chien ___ fort.',
    missingWord: 'aboie',
    image: 'https://img.freepik.com/vecteurs-premium/caricature-petit-garcon-prenant-son-chien-pour-promenade-plein-air-dans-nature-enfants-faisant-taches-menageres-maison-concept_283146-380.jpg',
  },
  {
    id: 5,
    text: 'Il ___ du café.',
    missingWord: 'boit',
    image: 'https://www.educatout.com/images/Enfants-et-cafeine-FB.jpg',
  },
  {
    id: 6,
    text: 'Nous ___ à la maison.',
    missingWord: 'sommes',
    image: 'https://i.ytimg.com/vi/ZlF_QS2fOOE/maxresdefault.jpg',
  },
  {
    id: 7,
    text: 'Vous ___ très gentils.',
    missingWord: 'êtes',
    image: 'https://www.leaetleo.com/uploads/leaetleo/comment-apprendre-a-votre-enfant-a-etre-gentil-mais-pas-trop-bc7d8e85ce78e7e97ff4c82ebc60603d.jpeg',
  },
  {
    id: 8,
    text: 'Ils ___ une voiture rouge.',
    missingWord: 'ont',
    image: 'https://i.ytimg.com/vi/kc8kwII_LsM/maxresdefault.jpg',
  },
  {
    id: 9,
    text: 'Elle ___ au téléphone.',
    missingWord: 'parle',
    image: 'https://img.freepik.com/vecteurs-premium/jolie-petite-fille-parle-aide-telephone-portable_97632-4602.jpg',
  },
  {
    id: 10,
    text: 'Nous ___ du pain.',
    missingWord: 'mangeons',
    image: 'https://img.freepik.com/vecteurs-premium/heureux-garcon-mignon-tenant-du-pain-frais_51635-8545.jpg',
  },
];

const arabicExercises = [
  {
    id: 1,
    text: 'الكلب ___ في الحديقة.',
    missingWord: 'يلعب',
    image: 'https://img.freepik.com/free-photo/portrait-cute-dog-anime-style_23-2151382135.jpg',
  },
  {
    id: 2,
    text: 'الأطفال ___ في المدرسة.',
    missingWord: 'يدرسون',
    image: 'https://www.nawa3em.com/big/child-3-02-09-2014.jpg',
  },
  {
    id: 3,
    text: 'محمد ___ الكتاب.',
    missingWord: 'يقرأ',
    image: 'https://previews.123rf.com/images/djvstock/djvstock2104/djvstock210400967/170012782-gar%C3%A7on-%C3%A9crit-une-lettre-dessin-anim%C3%A9.jpg',
  },
  {
    id: 4,
    text: 'الطائر ___ في السماء.',
    missingWord: 'يطير',
    image: 'https://png.pngtree.com/thumb_back/fw800/background/20230901/pngtree-a-bird-one-with-wings-wide-apart-flies-in-the-sky-image_13132918.jpg',
  },
  {
    id: 5,
    text: 'هي ___ الماء.',
    missingWord: 'تشرب',
    image: 'https://www.educatout.com/images/Enfants-et-cafeine-FB.jpg',
  },
  {
    id: 6,
    text: 'نحن ___ البيت.',
    missingWord: 'ندخل',
    image: 'https://i.ytimg.com/vi/ZlF_QS2fOOE/maxresdefault.jpg',
  },
  {
    id: 7,
    text: 'أناالعب ___ صديقي.',
    missingWord: 'مع',
    image: 'https://www.leaetleo.com/uploads/leaetleo/comment-apprendre-a-votre-enfant-a-etre-gentil-mais-pas-trop-bc7d8e85ce78e7e97ff4c82ebc60603d.jpeg',
  },
  {
    id: 8,
    text: 'هم ___ سيارة زرقاء.',
    missingWord: 'يملكون',
    image: 'https://i.ytimg.com/vi/kc8kwII_LsM/maxresdefault.jpg',
  },
  {
    id: 9,
    text: 'هي ___ على الكمبيوتر.',
    missingWord: 'تكتب',
    image: 'https://img.freepik.com/vecteurs-premium/jolie-petite-fille-parle-aide-telephone-portable_97632-4602.jpg',
  },
  {
    id: 10,
    text: 'نحن ___ العشاء.',
    missingWord: 'نطبخ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSATWUTuL-AkHoHS6oIHEv-y-FyEJspzQKVuQ&s',
  },
];



const MyExercices = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [isArabic, setIsArabic] = useState(false);
  const [allCorrectModalVisible, setAllCorrectModalVisible] = useState(false);
  const [points, setPoints] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  const exercises = isArabic ? arabicExercises : frenchExercises;
  const exercise = exercises[currentExercise];
  const { text, missingWord, image } = exercise;
  const textArray = text.split('___');

  const checkAnswer = () => {
    if (userInput.trim() === missingWord) {
      setIsCorrect(true);
      setPoints(points + 10);
      if (currentExercise === exercises.length - 1) {
        setAllCorrectModalVisible(true);
      } else {
        startAnimation();
        setTimeout(() => {
          setModalVisible(true);
        }, 1000);
      }
    } else {
      setIsCorrect(false);
      startAnimation();
      setTimeout(() => {
        setModalVisible(true);
      }, 1000);
    }
  };

  const resetAll = () => {
    setCurrentExercise(0);
    setUserInput('');
    setIsCorrect(null);
    setPoints(0);
    setAllCorrectModalVisible(false);
    fadeAnim.setValue(0); // Reset the animation
  };

  const speak = () => {
    const fullText = text.replace('___', missingWord);
    Speech.speak(fullText, { language: isArabic ? 'ar' : 'fr' });
  };

  const nextExercise = () => {
    if (isCorrect) {
      setCurrentExercise((prev) => (prev + 1) % exercises.length);
      setIsCorrect(null);
      setUserInput('');
      setModalVisible(false);
      fadeAnim.setValue(0); // Reset the animation
    } else {
      setModalVisible(false); // Close the modal if the answer is incorrect
    }
  };

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
    I18nManager.forceRTL(!isArabic);
    setCurrentExercise(0);
    setUserInput('');
    setIsCorrect(null);
    setPoints(0);
  };

  const startAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground
      source={{ uri: isArabic ? arabicBg : frenchBg }}
      style={styles.container}
    >
      <StatusBar translucent backgroundColor="transparent" />
      <BlurView intensity={130} style={{...StyleSheet.absoluteFill, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>
          {isArabic ? 'النص إلى كلام' : 'Texte en parole'}
        </Text>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.exerciseText}>
          {textArray[0]}
          ---------
          {textArray[1]}
        </Text>
        <TextInput
          style={[styles.input, isArabic ? styles.inputRTL : styles.inputLTR]}
          placeholder={isArabic ? 'اكتب اجابتك' : 'Tapez votre réponse'}
          value={userInput}
          onChangeText={setUserInput}
          textAlign={isArabic ? 'right' : 'left'}
        />
        <TouchableOpacity style={styles.button} onPress={checkAnswer}>
          <Text style={styles.buttonText}>
            {isArabic ? 'تحقق' : 'Vérifier'}
          </Text>
        </TouchableOpacity>
        {isCorrect && (
          <>
            {isCorrect && (
              <TouchableOpacity style={styles.button} onPress={speak}>
                <Ionicons name="volume-high-outline" size={24} color="white" />
                <Text style={styles.buttonText}>
                  {isArabic ? 'استمع' : 'Écouter'}
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.button} onPress={nextExercise}>
              <Text style={styles.buttonText}>
                {isArabic ? 'السؤال التالي' : 'Question suivante'}
              </Text>
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity style={styles.switchButton} onPress={toggleLanguage}>
          <Ionicons name={isArabic ? 'language' : 'language-outline'} size={24} color="white" />
          <Text style={styles.buttonText}>
          
          </Text>
        </TouchableOpacity>
        <Text style={styles.pointsText}>
          {isArabic ? `النقاط: ${points}` : `Points: ${points}`}
        </Text>
      </BlurView>

      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
            <Text style={styles.congratsText}>
              {isCorrect
                ? isArabic
                  ? 'مبروك! لقد أجبت بشكل صحيح!'
                  : 'Félicitations! Vous avez bien répondu!'
                : isArabic
                ? 'إجابة خاطئة. حاول مرة أخرى.'
                : 'Réponse incorrecte. Essayez encore.'}
            </Text>
            <Text style={styles.pointsText}>
              {isArabic ? `النقاط: ${points}` : `Points: ${points}`}
            </Text>
            <TouchableOpacity style={styles.shareButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>
                {isCorrect
                  ? isArabic
                    ? 'حسنا'
                    : 'Ok'
                  : isArabic
                  ? 'حاول مرة أخرى'
                  : 'Essayez encore'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
      <Modal visible={allCorrectModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.congratsText}>
              {isArabic
                ? 'مبروك! لقد أجبت على جميع الأسئلة بشكل صحيح!'
                : 'Félicitations! Vous avez répondu correctement à toutes les questions!'}
            </Text>
            <Text style={styles.pointsText}>
              {isArabic ? `النقاط النهائية: ${points}` : `Score final: ${points}`}
            </Text>
            <TouchableOpacity style={styles.shareButton} onPress={resetAll}>
              <Text style={styles.buttonText}>
                {isArabic ? 'إعادة البدء' : 'Recommencer'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f15454',
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  exerciseText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'center',
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
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    width: 150,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  switchButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointsText: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 18,
    color: 'green',
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
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
    Horizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default MyExercices;
