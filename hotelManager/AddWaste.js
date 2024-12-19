import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from './NavBar2'; 

const AddWaste = () => {
  const navigation = useNavigation();
  const [foodWaste, setFoodWaste] = useState({ name: '', quantity: '', price: '' });
  
  const handleAddWaste = () => {
    console.log('Waste Added:', foodWaste);
    setFoodWaste({ name: '', quantity: '', price: '' });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('./assets/assets/background1.png')}
        style={styles.image}
        imageStyle={styles.roundedBorder}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Add Waste</Text>
        </View>
      </ImageBackground>

      <ScrollView style={styles.contentContainer}>
        <View style={styles.section}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Waste Name"
              value={foodWaste.name}
              onChangeText={(text) => setFoodWaste({ ...foodWaste, name: text })}
              placeholderTextColor="#666"
            />
           
          </View>
          
          <TouchableOpacity 
            style={styles.addButton}
            onPress={handleAddWaste}
          >
            <Text style={styles.addButtonText}>Add Waste</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => navigation.navigate('FoodWasteDetails')}
            style={styles.detailsButton}
          >
            <Text style={styles.detailsText}>Add Details</Text>
          </TouchableOpacity>
        </View>

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
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 30,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 69,
  },
  headerText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'notoserif',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20, 
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  addButton: {
    backgroundColor: '#7FD81E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsButton: {
    alignItems: 'center',
  },
  detailsText: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: 'bold',
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

export default AddWaste;