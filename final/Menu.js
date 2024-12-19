import React, { Keyboard } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import NavBar from './NavBar'; // Import the NavBar component
import LinearGradient from 'react-native-linear-gradient'; // For gradient buttons
import LottieView from 'lottie-react-native'; // Import Lottie

const MenuScreen = () => {
  const navigation = useNavigation(); // Access navigation object

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* Background Header Section */}
        <ImageBackground
          source={require('./assets/background1.png')}
          style={styles.headerBackground}>
          <Text style={styles.headerTitle}>Menu</Text>
        </ImageBackground>

        {/* NavBar Component */}
        <NavBar />

        {/* Centered Content */}
        <View style={styles.centeredContainer}>
          {/* Farmer Dashboard */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Dashboard')} // Navigate to Dashboard
            style={styles.dashboardBox}>
            <LinearGradient
              colors={['#82CE2B', '#426816']} // Gradient colors for button
              style={styles.gradient}>
              <Text style={styles.dashboardText}>Farmer Dashboard</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Lottie Animation */}
          <View style={styles.animationContainer}>
            <LottieView
              source={require('./assets/menu.json')} // Replace with your Lottie animation file
              autoPlay
              loop
              style={styles.lottie}
            />
          </View>

          {/* Hotels/Restaurants Dashboard */}
          <TouchableOpacity
            onPress={() => navigation.navigate('HotelsRestaurantsDashboard')} // Change this as needed
            style={styles.dashboardBox}>
            <LinearGradient
              colors={['#82CE2B', '#426816']} // Gradient colors for button
              style={styles.gradient}>
              <Text style={styles.dashboardText}>HRC Dashboard</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerBackground: {
    width: '100%',
    height: 130, // Adjust height to your preference
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    paddingHorizontal: 10,
  },
  dashboardBox: {
    width: '80%', // Make the boxes responsive
    height: 140, // Adjust height as needed
    borderRadius: 15,
    marginBottom: 20,
    elevation: 5,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  dashboardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  animationContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  lottie: {
    width: 200,
    height: 200, // Adjust as needed
  },
});

export default MenuScreen;
