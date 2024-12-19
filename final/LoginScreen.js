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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // Function to dismiss the keyboard when tapping outside input fields
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  // Function to validate inputs and proceed with login
  const validateAndLogin = () => {
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
    // Navigate to Dashboard after successful validation
    navigation.navigate('Choose');
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* Animated Icon */}
        <View style={styles.animationContainer}>
          <LottieView
            source={require('./assets/wel.json')} // Animated asset for visual appeal
            autoPlay
            loop
            style={styles.animatedIcon}
          />
        </View>

        {/* Page Title */}
        <Text style={styles.title}>Welcome to Waste2Worth</Text>

        {/* Form Inputs */}
        <View style={styles.formContainer}>
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

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={validateAndLogin}>
            <LinearGradient
              colors={['#72C21B', '#81CE2C', '#426816']} // Gradient for button
              style={styles.loginButtonGradient}
            >
              <Text style={styles.loginButtonText}>Log In</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Forgot Password Link */}
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Links */}
        <View style={styles.footerLinks}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.footerLink}>Don’t have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set background color to white
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
    color: '#426816', // Dark green for title text
    marginBottom: 30,
  },
  formContainer: {
    width: '85%',
  },
  label: {
    fontSize: 16,
    color: '#426816', // Dark green for labels
    marginBottom: 5,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#81CE2C', // Light green border for inputs
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#426816', // Dark green for input text
    backgroundColor: '#F5F5F5', // Light grey background for input fields
    marginBottom: 20,
  },
  loginButton: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  loginButtonGradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    fontSize: 14,
    color: '#426816', // Dark green for links
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  footerLinks: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerLink: {
    fontSize: 14,
    color: '#426816', // Dark green for footer links
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
