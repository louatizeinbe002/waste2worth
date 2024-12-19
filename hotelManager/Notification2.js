import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from './NavBar2';

const Notification2 = () => {
  const navigation = useNavigation();

  const notifications = [
    { id: 1, title: 'New Delivery Update', description: 'We are on the way. Estimated arrival in 30 minutes.', time: '10 minutes ago' },
    { id: 2, title: 'Monthly Report Available', description: 'Your monthly efficiency report is ready.', time: '1 day ago' },
    { id: 3, title: 'Food Waste', description: 'A new entry of 5kg was added to the shelf.', time: '2 hours ago' },
  ];

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('./assets/assets/background1.png')}
        style={styles.image}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Notifications</Text>
        </View>
      </ImageBackground>

      {/* Notification List */}
      <ScrollView style={styles.contentContainer}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationCard}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationDescription}>{notification.description}</Text>
            <Text style={styles.notificationTime}>{notification.time}</Text>
          </View>
        ))}
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
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 150,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    padding: 15,
  },
  notificationCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
    textAlign: 'right',
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

export default Notification2;
