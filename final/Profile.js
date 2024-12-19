import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For icons (install via npm/yarn)
import LinearGradient from 'react-native-linear-gradient'; // For gradient styling
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false); // State to toggle dark mode
  const navigation = useNavigation();

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      {/* Header with ImageBackground */}
      <ImageBackground
        source={require('./assets/background1.png')} // Use your desired background image
        style={[styles.headerBackground, darkMode && styles.darkHeaderBackground]}>
        <Image
          source={require('./assets/user1.png')} // Profile image
          style={styles.profileImage}
        />
        <Text style={[styles.username, darkMode && styles.darkText]}>John Doe</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditProfile')}>
          <Text style={[styles.editButtonText, darkMode && styles.darkText]}>Edit Profile</Text>
        </TouchableOpacity>
      </ImageBackground>

      {/* Search Bar */}
      <View style={[styles.searchContainer, darkMode && styles.darkSearchContainer]}>
        <Icon name="search" size={20} color={darkMode ? 'white' : 'grey'} style={styles.searchIcon} />
        <TextInput
          style={[styles.searchInput, darkMode && styles.darkInput]}
          placeholder="Search for settings..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Account Settings */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>Account Settings</Text>
          <TouchableOpacity
            style={[styles.itemContainer, darkMode && styles.darkItemContainer]}
            onPress={() => navigation.navigate('Notifications')}>
            <Icon name="notifications-outline" size={24} color={darkMode ? '#82CE2B' : '#6DBE45'} />
            <Text style={[styles.itemText, darkMode && styles.darkText]}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.itemContainer, darkMode && styles.darkItemContainer]}
            onPress={() => navigation.navigate('Cart')}>
            <Icon name="cart-outline" size={24} color={darkMode ? '#82CE2B' : '#6DBE45'} />
            <Text style={[styles.itemText, darkMode && styles.darkText]}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.itemContainer, darkMode && styles.darkItemContainer]}
            onPress={() => navigation.navigate('Menu')}>
            <Icon name="stats-chart-outline" size={24} color={darkMode ? '#82CE2B' : '#6DBE45'} />
            <Text style={[styles.itemText, darkMode && styles.darkText]}>Dashboard</Text>
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>Preferences</Text>
          <TouchableOpacity style={[styles.itemContainer, darkMode && styles.darkItemContainer]}>
            <Icon name="language-outline" size={24} color={darkMode ? '#82CE2B' : '#6DBE45'} />
            <Text style={[styles.itemText, darkMode && styles.darkText]}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.itemContainer, darkMode && styles.darkItemContainer]}
            onPress={toggleDarkMode}>
            <Icon name="moon-outline" size={24} color={darkMode ? '#82CE2B' : '#6DBE45'} />
            <Text style={[styles.itemText, darkMode && styles.darkText]}>Dark Mode</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button with updated gradient */}
        <LinearGradient
          colors={['#82CE2B', '#70BE19']} // Updated gradient colors
          style={styles.logoutButton}>
          <TouchableOpacity onPress={() => navigation.navigate('LogoutConfirmation')}>
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  darkContainer: {
    backgroundColor: '#000',  // Dark mode background
  },
  headerBackground: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  darkHeaderBackground: {
    backgroundColor: '#333', // Dark header background
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  darkText: {
    color: '#fff', // White text for dark mode
  },
  editButton: {
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 20,
    elevation: 3,
  },
  editButtonText: {
    color: '#6DBE45',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 25,
    width: '90%',
    paddingHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  darkSearchContainer: {
    backgroundColor: '#333', // Dark background for search bar
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  darkInput: {
    color: '#fff', // White text for input in dark mode
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  darkSectionTitle: {
    color: '#fff', // White text for section titles in dark mode
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  darkItemContainer: {
    backgroundColor: '#444', // Dark background for items in dark mode
  },
  itemText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 15,
  },
  logoutButton: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 15,
    elevation: 3,
  },
  logoutText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
