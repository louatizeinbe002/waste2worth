import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ImageBackground, 
  ScrollView, 
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from './NavBar2';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('./assets/assets/background1.png')}
        style={styles.image}
        imageStyle={styles.roundedBorder}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Manager's Shelf</Text>
        </View>
      </ImageBackground>

      {/* Content Section */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently Added Products</Text>
          <View style={styles.cardRow}>
            <View style={styles.card}>
              <Image
                source={require('./assets/assets/6724564.png')}
                style={styles.cardIcon}
              />
              <Text style={styles.cardTitle}>Food </Text>
              <Text style={styles.cardDescription}>Recently Added</Text>
            </View>
            <View style={styles.card}>
              <Image
                source={require('./assets/assets/6724564.png')}
                style={styles.cardIcon}
              />
              <Text style={styles.cardTitle}>Food</Text>
              <Text style={styles.cardDescription}>Available now!</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('FullShelf')}>
            <Text style={styles.viewMore}>Browse Shelf</Text>
          </TouchableOpacity>
        </View>
        
        {/* Add Waste Button Container */}
        <View style={styles.addButtonContainer}>
          <TouchableOpacity 
            style={styles.addButton} 
            onPress={() => navigation.navigate('AddWaste')}
          >
            <View style={styles.addButtonInner}>
              <Text style={styles.plusIcon}>+</Text>
              <Text style={styles.addButtonText}>Add Waste</Text>
            </View>
          </TouchableOpacity>
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
    justifyContent: 'space-between',
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
    marginHorizontal: 10,
    marginVertical: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    width: '48%',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
  viewMore: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right',
  },
  addButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  addButton: {
    backgroundColor: '#7FD81E', // Bright green color
    width: 100,  // Reduced from 150
    height: 100, // Reduced from 150
    borderRadius: 50, // Half of width/height for perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  addButtonInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    fontSize: 32, 
    color: '#fff',
    marginBottom: 2,
    fontWeight: 'bold',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14, 
    fontWeight: 'bold',
  },
});

export default DashboardScreen;