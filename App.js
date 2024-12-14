import React, { useState, useRef }from 'react';
import LinearGradient from 'react-native-linear-gradient'; 
import { View, Text, StyleSheet, Image, ImageBackground,  TouchableOpacity,  Animated, TextInput} from 'react-native';

const FloatingLabelInput = ({ label, value, onChangeText, secureTextEntry, keyboardType }) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabelPosition = useRef(new Animated.Value(value ? -10 : 15)).current;
  const animatedLabelFontSize = useRef(new Animated.Value(value ? 15 : 15)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedLabelPosition, {
      toValue: -20,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedLabelFontSize, {
      toValue: 16,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
      Animated.timing(animatedLabelPosition, {
        toValue: 15,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(animatedLabelFontSize, {
        toValue: 16,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Animated.Text
        style={[
          styles.label,
          {
            top: animatedLabelPosition,
            fontSize: animatedLabelFontSize,
            color: isFocused || value ? 'white' : 'white',
          },
        ]}
      >
        {label}
      </Animated.Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocused && (
        <LinearGradient
          colors={['#83CE2C', '#426816']} 
          style={styles.gradientBar}
        />
      )}
    </View>
  );
};


const ProfileScreen = () => {
  const [username, changeUsername]= useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [location, changeLocation] = useState('')

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background1.png')}
        style={styles.image}
        imageStyle={styles.roundedBorder}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>My Profile</Text>
        </View>
        {/* The leaf icon should be placed within the ImageBackground */}
        <Image
          source={require('./assets/leaf-removebg-preview1.png')}
          style={styles.leaf}
        />
        <View style={styles.formContainer}>
          <FloatingLabelInput
          label="Username"
          value={username}
          onChangeText={changeUsername}
        />

          <FloatingLabelInput
          label="Email"
          value={email}
          onChangeText={changeEmail}
          keyboardType="email-address"
        />
          <FloatingLabelInput
          label="Password"
          value={password}
          onChangeText={changePassword}
          secureTextEntry
        />

          <FloatingLabelInput
          label="Location"
          value={location}
          onChangeText={changeLocation}
          secureTextEntry
        />


        <TouchableOpacity style={styles.ConfirmButton}>
          <LinearGradient
            colors={['#83CE2C', '#6BA924', '#5C901F', '#426816']}
            style={styles.gradient} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }} >
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      </ImageBackground>
  {/* Bottom navigation bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/fertilizer.png')} // Replace with your icon path
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/bell.png')} // Replace with your icon path
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/recycle-sign1.png')} // Replace with your icon path
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/user1.png')} // Replace with your icon path
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/menu.png')} // Replace with your icon path
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 411,
    height: 720,
    top:130,
    borderRadius: 30,
  },
  roundedBorder: {
    borderRadius: 50,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    top: 13,
    fontFamily: 'notoserif', 
  },
  leaf: {
    position: 'absolute', 
    top: -90, 
    right: -8, 
    width: 120, 
    height: 120, 
    resizeMode: 'contain', 
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 5,
    top : 45,
  },
  navItem: {
    padding: 10,
  },
  icon: {
    width: 30, 
    height: 30, 
    resizeMode: 'contain',
  },

  formContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: 20,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 40,
  },
  label: {
    position: 'absolute',
    left: 100,
    color : 'white'
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#83CE2C',
    paddingVertical: 5,
    fontSize: 16,
  },
  confirmButton: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default ProfileScreen;
