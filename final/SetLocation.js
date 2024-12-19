import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapPlaceholder from './assets/image.png'; // Update with the correct path

const SetLocation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>Find Location</Text>

      {/* Map Placeholder */}
      <Image
        source={MapPlaceholder}
        style={styles.map}
      />

      {/* Set Location Button */}
      <TouchableOpacity
        style={styles.setButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Set Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginVertical: 10,
  },
  setButton: {
    backgroundColor: '#83CE2C',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SetLocation;
