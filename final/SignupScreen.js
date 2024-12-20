import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isFarmer, setIsFarmer] = useState(false);
  const [isRestaurant, setIsRestaurant] = useState(false);
  const navigation = useNavigation();

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const validateAndSignup = () => {
    if (!name) {
      Alert.alert('Validation Error', 'Name is required.');
      return;
    }
    if (!email) {
      Alert.alert('Validation Error', 'Email is required.');
      return;
    }
    if (!password) {
      Alert.alert('Validation Error', 'Password is required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert('Validation Error', 'Invalid email format.');
      return;
    }
    if (!isFarmer && !isRestaurant) {
      Alert.alert(
        'Validation Error',
        'Please select your type (Farmer or Restaurant/Hotel).'
      );
      return;
    }
    navigation.navigate('Login');
  };

  const handleThirdPartyLogin = async (platform) => {
    let url = '';
    switch (platform) {
      case 'Google':
        url = 'https://accounts.google.com/';
        break;
      case 'Facebook':
        url = 'https://www.facebook.com/';
        break;
      case 'Twitter':
        url = 'https://www.twitter.com/';
        break;
      default:
        Alert.alert('Error', 'Unknown platform');
        return;
    }

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', `Unable to open URL: ${url}`);
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while trying to open the URL.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          <LottieView
            source={require('./assets/wel.json')}
            autoPlay
            loop
            style={styles.animatedIcon}
          />
        </View>

        <Text style={styles.title}>Create an Account</Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Enter your Name"
            placeholderTextColor="#aaa"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            placeholderTextColor="#aaa"
            secureTextEntry
          />

          <View style={styles.checkboxRow}>
            <BouncyCheckbox
              size={22}
              fillColor="#72C21B"
              unfillColor="#FFFFFF"
              text="Farmer"
              textStyle={styles.checkboxText}
              iconStyle={{ borderColor: '#72C21B' }}
              onPress={(isChecked) => {
                setIsFarmer(isChecked);
                if (isChecked) setIsRestaurant(false);
              }}
              isChecked={isFarmer}
            />

            <BouncyCheckbox
              size={22}
              fillColor="#72C21B"
              unfillColor="#FFFFFF"
              text="Restaurant/Hotel"
              textStyle={styles.checkboxText}
              iconStyle={{ borderColor: '#72C21B' }}
              onPress={(isChecked) => {
                setIsRestaurant(isChecked);
                if (isChecked) setIsFarmer(false);
              }}
              isChecked={isRestaurant}
            />
          </View>

          <TouchableOpacity style={styles.signupButton} onPress={validateAndSignup}>
            <LinearGradient
              colors={['#72C21B', '#81CE2C', '#426816']}
              style={styles.signupButtonGradient}
            >
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Already have an account? Log In</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>Or sign up with</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleThirdPartyLogin('Google')}
          >
            <Icon name="google" size={24} color="#DB4437" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleThirdPartyLogin('Facebook')}
          >
            <Icon name="facebook" size={24} color="#4267B2" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleThirdPartyLogin('Twitter')}
          >
            <Icon name="twitter" size={24} color="#1DA1F2" />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationContainer: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
  animatedIcon: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#426816',
    marginBottom: 30,
  },
  formContainer: {
    width: '85%',
  },
  label: {
    fontSize: 16,
    color: '#426816',
    marginBottom: 5,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#81CE2C',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#426816',
    backgroundColor: '#F5F5F5',
    marginBottom: 20,
  },
  signupButton: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  signupButtonGradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 13,
    fontSize: 14,
    color: '#426816',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  checkboxRow: {
    marginTop: 10,
    marginBottom: 30,
  },
  checkboxText: {
    textDecorationLine: 'none',
    color: '#426816',
    fontSize: 16,
  },
  orText: {
    marginTop: 30,
    fontSize: 16,
    color: '#426816',
    fontWeight: 'bold',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '60%',
  },
  socialButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
});

export default SignupScreen;
