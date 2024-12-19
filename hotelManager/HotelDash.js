import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from './NavBar2'; 

const HotelDash = () => {
  const navigation = useNavigation();
  const stats = {
    totalWaste: "125 kg",
    recycled: "85 kg",
    savings: "$320",
    efficiency: "68%"
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('./assets/assets/background1.png')}
        style={styles.image}
        imageStyle={styles.roundedBorder}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Manager's Dashboard</Text>
        </View>
       
      </ImageBackground>

      {/* Content Section */}
      <ScrollView style={styles.contentContainer}>
        {/* Order Tracking */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Tracking</Text>
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>Delivery : On the way</Text>
            <Text style={styles.orderStatus}>Estimated Arrival : 30 minutes</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('TrackFood')}>
            <Text style={styles.viewMore}>View More</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityCard}>
            <Text style={styles.activityText}>Food waste added - 5kg</Text>
            <Text style={styles.activityTime}>2 hours ago</Text>
          </View>
          <View style={styles.activityCard}>
            <Text style={styles.activityText}>Monthly report generated</Text>
            <Text style={styles.activityTime}>Yesterday</Text>
          </View>
        </View>

        {/* Navigate to Shelf.js */}
        
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>New Fertilizers Available</Text>
                  <View style={styles.cardRow}>
                    <View style={styles.card}>
                      <Image
                        source={require('./assets/assets/6724564.png')}
                        style={styles.cardIcon}
                      />
                      <Text style={styles.cardTitle}>food1</Text>
                      <Text style={styles.cardDescription}>food2.</Text>
                    </View>
                    <View style={styles.card}>
                      <Image
                        source={require('./assets/assets/6724564.png')}
                        style={styles.cardIcon}
                      />
                      <Text style={styles.cardTitle}>food3</Text>
                      <Text style={styles.cardDescription}>Available now!</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('Shelf')}>
                    <Text style={styles.viewMore}>View More</Text>
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
    height: 150, 
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 40, 
  },
  headerText: {
    fontSize: 30,
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
  activityCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  activityText: {
    fontSize: 14,
    color: '#333',
  },
  activityTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  orderCard: {
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  orderText: {
    fontSize: 16,
    color: '#00796b',
  },
  orderStatus: {
    fontSize: 14,
    color: '#004d40',
    marginTop: 5,
  },
  viewMore: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right',
  },
  viewMore: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right',
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
});

export default HotelDash; 
