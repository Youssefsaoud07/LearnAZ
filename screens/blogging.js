import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

const schoolBg = 'https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg'; // Image de fond

const BlogScreen = ({ navigation }) => {
  const articlesBlog = [
    { id: 1, titre: 'L\'importance de l\'éducation', auteur: 'Jean Dupont', date: '20 Juin 2024', contenu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed ex velit. Mauris vitae ligula lorem. Sed ut tincidunt arcu.', image: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_495235369_180481.jpg' },
    { id: 2, titre: 'Stratégies d\'enseignement pour les jeunes apprenants', auteur: 'Marie Martin', date: '18 Juin 2024', contenu: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed interdum, magna ut consequat luctus, neque justo porta magna.', image: 'https://www.skillstork.org/blog/wp-content/uploads/2022/07/Skillstork-1568x882.jpg' },
    { id: 3, titre: 'Créer un environnement d\'apprentissage positif', auteur: 'Pierre Durand', date: '15 Juin 2024', contenu: 'Nulla facilisi. Nullam posuere, sem et volutpat pharetra, lorem ipsum finibus ex, at vehicula sapien sapien in diam. Proin id velit elit.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-fPga9dPE49aeG3dS13O0p89MtmRGMX8WQ&s' },
  ];

  const rendreArticleBlog = (article) => (
    <TouchableOpacity
      key={article.id}
      style={styles.conteneurArticle}
      
    >
      <Image source={{ uri: article.image }} style={styles.imageArticle} />
      <Text style={styles.titreArticle}>{article.titre}</Text>
      <Text style={styles.metaArticle}>{article.auteur} | {article.date}</Text>
      <Text numberOfLines={3} ellipsizeMode="tail" style={styles.contenuArticle}>{article.contenu}</Text>
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
  contenuArticle: {
    fontSize: 16,
    color: '#333',
  },
});

export default BlogScreen;
