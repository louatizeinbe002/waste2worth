import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import NavBar from './NavBar2';

const FullShelfScreen = ({ navigation }) => {
  const [products, setProducts] = useState([
    { id: 1, title: 'Organic Mix', description: 'Boost yield naturally.', image: require('./assets/assets/6724564.png') },
    { id: 2, title: 'Nitrogen Boost', description: 'Available in stock.', image: require('./assets/assets/6724564.png') },
  ]);

  const handleDelete = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    console.log(`Deleted product with id: ${id}`);
  };

  const handleChange = (id) => {
    console.log(`Changed product with id: ${id}`);
    navigation.navigate('FoodWasteDetails', { productId: id });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <ImageBackground source={require('./assets/assets/background1.png')} style={styles.headerBackground}>
        <Text style={styles.headerTitle}>Full Shelf</Text>
      </ImageBackground>

      {/* Product List */}
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>All Available Products</Text>
        <View style={styles.cardRow}>
          {products.map((product) => (
            <View key={product.id} style={styles.card}>
              <Image source={product.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{product.title}</Text>
              <Text style={styles.cardDescription}>{product.description}</Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.changeButton} onPress={() => handleChange(product.id)}>
                  <Text style={styles.buttonText}>Change</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(product.id)}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HotelDash')}>
        <Text style={styles.backButtonText}>Back to Dashboard</Text>
      </TouchableOpacity>

      {/* Navigation Bar */}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  headerBackground: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  changeButton: {
    backgroundColor: '#83CE2C',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#FFB300',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FullShelfScreen;
