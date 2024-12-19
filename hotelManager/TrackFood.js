import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NavBar from './NavBar2';

const TrackOrder = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Track Food</Text>
      <Text style={styles.orderId}>Order ID: 4544882266</Text>

      {/* Timeline Section */}
      <View style={styles.timelineSection}>
        <View style={styles.timeline}>
          <View style={styles.timelineItem}>
            <View style={styles.dot} />
            <Text style={styles.timelineText}>04:30 PM - Confirmed</Text>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.dot} />
            <Text style={styles.timelineText}>04:38 PM - Processing</Text>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.dot} />
            <Text style={styles.timelineText}>04:42 PM - On the way</Text>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.dot} />
            <Text style={styles.timelineText}>04:46 PM - Delivered</Text>
          </View>
        </View>
      </View>

      {/* Rider Information Section */}
      <View style={styles.section}>
        <Text style={styles.riderName}>Mr. Rider</Text>
        <Text style={styles.riderStatus}>25 minutes on the way</Text>

        {/* Call Button with Gradient Background */}
        <LinearGradient
          colors={['#82CE2B', '#6DBE45']}
          style={styles.callButton}
        >
          <TouchableOpacity onPress={() => navigation.navigate('CallRider')}>
            <Text style={styles.callText}>Call</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Bottom Navigation Bar */}
      {/* Navigation Bar */}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    paddingBottom: 80,
    // Ensuring enough space for the NavBar
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  orderId: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  timelineSection: {
    marginBottom: 30,
    alignItems: 'center',
  },
  timeline: {
    position: 'relative',
    borderLeftWidth: 3,
    borderColor: '#6DBE45',
    paddingLeft: 20,
  },
  timelineItem: {
    marginBottom: 20,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#6DBE45',
    marginRight: 10,
  },
  timelineText: {
    fontSize: 16,
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    elevation: 3,
  },
  riderName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  riderStatus: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  callButton: {
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 5,
    elevation: 3,
  },
  callText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TrackOrder;
