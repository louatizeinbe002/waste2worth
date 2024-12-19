import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => navigation.navigate('Shelf')}
      >
        <Image source={require('./assets/assets/icon-food-waste-1.png')} style={styles.icon} />
        <Text style={styles.navText}>Shelf</Text>  {/* Optional label */}
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => navigation.navigate('Notification2')}
      >
        <Image source={require('./assets/assets/bell.png')} style={styles.icon} />
        <Text style={styles.navText}>Notifications</Text>  {/* Optional label */}
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => navigation.navigate('HotelDash')}
      >
        <Image source={require('./assets/assets/recycle-sign1.png')} style={styles.icon} />
        <Text style={styles.navText}>Dashboard</Text>  {/* Optional label */}
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => navigation.navigate('Profile')}
      >
        <Image source={require('./assets/assets/user1.png')} style={styles.icon} />
        <Text style={styles.navText}>Profile</Text>  {/* Optional label */}
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => navigation.navigate('Menu')}
      >
        <Image source={require('./assets/assets/menu.png')} style={styles.icon} />
        <Text style={styles.navText}>Menu</Text>  {/* Optional label */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    position: 'absolute', 
    bottom: 0,  
    width: '100%', 
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    padding: 10,
    alignItems: 'center',  
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  navText: {
    fontSize: 10,  
    color: '#333', 
  },
});

export default NavBar;
