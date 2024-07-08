import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Linking, Image } from 'react-native';

const schoolBg = 'https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg'; // Background image

const BlogScreen = ({ navigation }) => {
  const articlesBlog = [
    { id: 1, titre: 'Nos conseils pour une bonne prononciation française', date: '20 Juin 2024', lien: 'https://www.lingoda.com/fr/content/prononciation-francaise/', image: 'https://www.lingoda.com/wp-content/webp-express/webp-images/uploads/2024/01/shutterstock_1232495455.jpg.webp' },
    { id: 2, titre: 'Fautes de français courantes à l’oral : 7 erreurs faciles à éviter.', date: '18 Juin 2024', lien: 'https://www.francaisauthentique.com/fautes-de-francais-courantes-oral/', image: 'https://www.francaisauthentique.com/wp-content/uploads/2023/08/fautes-francais-courantes.jpg' },
    { id: 3, titre: '5 activités pour aider mon enfant à augmenter sa fluidité en lecture.', date: '15 Juin 2024', lien: 'https://www.alloprof.qc.ca/fr/parents/articles/saines-habitudes-vie-activites-pedagogiques/activites-augmenter-fluidite-lecture-k1380', image: 'https://cms.alloprof.qc.ca/sites/default/files/styles/1440w/public/2023-03/GettyImages-646928066-1%20%281%29_0.jpg?itok=u2kROXEC' },
    { id: 4, titre: 'Améliorer l’apprentissage de la lecture chez l’enfant.', date: '12 Juin 2024', lien: 'https://www.epopia.com/blog/lirec/lire-et-ecrire/ameliorer-apprentissage-lecture-chez-enfant/', image: 'https://www.epopia.com/blog/wp-content/uploads/2021/06/ameliorer-apprentissage-de-la-lecture-chez-enfant.jpg' },
    { id: 5, titre: '15 jeux d’éveil amusants à faire avec bébé', date: '10 Juin 2024', lien: 'https://naitreetgrandir.com/fr/chroniques/15-jeux-eveil-amusants-faire-avec-bebe/', image: 'https://naitreetgrandir.com/DocumentsNG/Fiches/images/15-jeux-eveil-amusants-faire-avec-bebe-3.Png' },
    { id: 6, titre: 'Série de contes : niveau primaire', description: 'La collection "Boule de neige" est vivement conseillée par les enseignants aux petits écoliers qui viennent d’entamer leur apprentissage en langue française.', date: '8 Juin 2024', lien: 'https://www.yamamagroup.com/product/collection-boule-de-neige/', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdT_26dmzSbp4gMZ54s22WZI8ONl3SMADFAQ&s' }
  ];

  const rendreArticleBlog = (article) => (
    <TouchableOpacity
      key={article.id}
      style={styles.conteneurArticle}
      onPress={() => Linking.openURL(article.lien)}
    >
      <Image source={{ uri: article.image }} style={styles.imageArticle} />
      <Text style={styles.titreArticle}>{article.titre}</Text>
      <Text style={styles.metaArticle}>{article.date}</Text>
      {article.description && <Text style={styles.descriptionArticle}>{article.description}</Text>}
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={{ uri: schoolBg }} style={styles.conteneur}>
      <View style={styles.entete}>
        <Text style={styles.texteEntete}>Blog Scolaire</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contenu}>
        {articlesBlog.map(rendreArticleBlog)}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  conteneur: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  entete: {
    alignItems: 'center',
    marginBottom: 20,
  },
  texteEntete: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  contenu: {
    paddingHorizontal: 20,
  },
  conteneurArticle: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  imageArticle: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  titreArticle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  metaArticle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  descriptionArticle: {
    fontSize: 16,
    color: '#333',
  },
});

export default BlogScreen;
