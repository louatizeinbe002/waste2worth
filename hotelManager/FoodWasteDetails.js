import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from './NavBar2';

const FoodWasteDetails = () => {
  const navigation = useNavigation();
  const [foodWasteDetails, setFoodWasteDetails] = useState({ type: '', quantity: '', unitPrice: '' });

  const handleAddDetails = () => {
    console.log('Food Waste Details Added:', foodWasteDetails);
    setFoodWasteDetails({ type: '', quantity: '', unitPrice: '' });
    navigation.navigate('Shelf');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Food Waste Details</Text>

      <ScrollView style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type"
            value={foodWasteDetails.type}
            onChangeText={(text) => setFoodWasteDetails({ ...foodWasteDetails, type: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            value={foodWasteDetails.quantity}
            onChangeText={(text) => setFoodWasteDetails({ ...foodWasteDetails, quantity: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Unit Price"
            value={foodWasteDetails.unitPrice}
            onChangeText={(text) => setFoodWasteDetails({ ...foodWasteDetails, unitPrice: text })}
          />
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAddDetails}>
          <Text style={styles.addButtonText}>Add Details</Text>
        </TouchableOpacity>

        {/* Bottom Image */}
        <View style={styles.bottomImageContainer}>
          <Image
            source={require('./assets/assets/6724564.png')}
            style={styles.bottomImage}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      {/* Navigation Bar */}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  contentContainer: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#83CE2C',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  bottomImage: {
    width: '80%',
    height: 160,
    marginBottom: 90,
  },
});

export default FoodWasteDetails;
