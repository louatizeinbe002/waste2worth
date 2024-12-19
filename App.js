import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing main screens
import Choose from './final/Choose';
import Dashboard from './final/dashboard';
import LoginScreen from './final/LoginScreen';
import NotificationScreen from './final/NotificationScreen';
import Profile from './final/Profile';
import SignupScreen from './final/SignupScreen';
import Welcome from './final/welcom';
import Menu from './final/Menu';
import Marketplace from './final/MarketPlace';
import Filter from './final/Filter';
import Cart from './final/cart';
// Importing order flow screens
import OrderDetail from './final/OrderDetail';
import ConfirmOrder from './final/ConfirmOrder';
import Payment from './final/Payment';

import SetLocation from './final/SetLocation';
import TrackOrder from './final/TrackOrder';
import Review from './final/Review'; // Import the Review screen

// Importing password recovery flow screens
import ForgotPassword from './screens/ForgotPassword';
import VerifyCode from './screens/VerifyCode';
import PasswordReset from './screens/PasswordReset';
import SetNewPassword from './screens/SetNewPassword';
import Success from './screens/Success';
import EditProfile from './final/EditProfile'; // Path to your EditProfile.js

// Importing the LogoutConfirmation screen
import LogoutConfirmation from './final/logout';
//importing the hotelmanager dashbord 
import HotelDash from './hotelManager/HotelDash';
import FoodWasteDetails from './hotelManager/FoodWasteDetails';
import Shelf from './hotelManager/Shelf';
import FullShelf from './hotelManager/FullShelf';
import AddWaste from './hotelManager/AddWaste';
import TrackFood from './hotelManager/TrackFood';
import Notification2 from './hotelManager/Notification2';

// Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false, // Default header behavior
        }}
      >
        {/* Main Screens */}
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Choose" component={Choose} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Marketplace" component={Marketplace} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="Cart" component={Cart}
        options={{
          headerShown: true, // Show header for Profile only
          title: 'Your Cart', // Custom title for Profile header
          headerStyle: { backgroundColor: '#fff' }, // Custom header color
           // Text color in header
          // Center the header title
        }}  />
        <Stack.Screen name="Review" component={Review} />  
        {/* Profile Screen with Header */}
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            headerShown: true, // Show header for Profile only
            title: 'My Profile', // Custom title for Profile header
            headerStyle: { backgroundColor: '#fff' }, // Custom header color
             // Text color in header
            headerTitleAlign: 'center', // Center the header title
          }} 
        />

        {/* Adding Edit Profile */}
        <Stack.Screen 
          name="EditProfile" 
          component={EditProfile}
          options={{
            headerShown: true,
            title: 'Edit Profile',
          
          }} 
        />

        {/* Adding Logout Confirmation */}
        <Stack.Screen 
          name="LogoutConfirmation" 
          component={LogoutConfirmation}
          options={{ headerShown: false }} // No header for Logout screen
        />
        
        <Stack.Screen name="Notifications" component={NotificationScreen} />

        {/* Password Recovery Flow */}
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPassword} 
          options={{ title: 'Forgot Password' }}
        />
        <Stack.Screen 
          name="VerifyCode" 
          component={VerifyCode} 
          options={{ title: 'Verify Code' }}
        />
        <Stack.Screen 
          name="PasswordReset" 
          component={PasswordReset} 
          options={{ title: 'Reset Password' }}
        />
        <Stack.Screen 
          name="SetNewPassword" 
          component={SetNewPassword} 
          options={{ title: 'Set New Password' }}
        />
        <Stack.Screen 
          name="Success" 
          component={Success} 
          options={{ title: 'Success' }}
        />

        {/* Order Flow */}
        <Stack.Screen 
          name="OrderDetail" 
          component={OrderDetail} 
          options={{
            title: 'Order Details',
            headerShown: true, // Show header
            headerBackTitleVisible: true, // Show back button text
          }}
        />
        <Stack.Screen 
          name="ConfirmOrder" 
          component={ConfirmOrder} 
          options={{
            title: 'Confirm Order',
            headerShown: true, // Show header
            headerBackTitleVisible: true, // Show back button text
          }}
        />
        <Stack.Screen 
          name="Payment" 
          component={Payment} 
          options={{
            title: 'Payment',
            headerShown: true, // Show header
            headerBackTitleVisible: true, // Show back button text
          }}
        />
        
        <Stack.Screen 
          name="SetLocation" 
          component={SetLocation} 
          options={{
            title: 'Set Location',
            headerShown: true, // Show header
            headerBackTitleVisible: true, // Show back button text
          }}
        />
        <Stack.Screen 
          name="TrackOrder" 
          component={TrackOrder} 
          options={{
            title: 'Track Order',
            headerShown: true, // Show header
            headerBackTitleVisible: true, // Show back button text
          }}
        />
         {/* Hotel Manager Dashboard */}
         <Stack.Screen 
          name="HotelDash" 
          component={HotelDash} 
          options={{
            title: 'Hotel Manager Dashboard',
            headerShown: true, // Show header for Hotel Manager Dashboard
            
            headerTintColor: 'black',
            
          }}
        />
        {/* Food Waste Details */}
        <Stack.Screen 
          name="FoodWasteDetails" 
          component={FoodWasteDetails} 
          options={{
            title: 'Food Waste Details',
            headerShown: true,
           
            headerTintColor: 'black',
            
          }} 
        />
        <Stack.Screen 
          name="Shelf" 
          component={Shelf} 
          options={{
          title: 'Shelf',
          headerShown: true, 
         
          headerTintColor: 'black',
          
          }} 
        />
        <Stack.Screen 
          name="FullShelf" 
          component={FullShelf} 
          options={{
          title: 'FullShelf',
          headerShown: true, 
          
          headerTintColor: 'black',
        
          }} 
        />
         <Stack.Screen 
          name="AddWaste" 
          component={AddWaste} 
          options={{
          title: 'AddWaste',
          headerShown: true, 
         
          headerTintColor: 'black',
         
          }} 
        />
         <Stack.Screen 
          name="TrackFood" 
          component={TrackFood} 
          options={{
          title: 'TrackFood',
          headerShown: true, 
         
          headerTintColor: 'black',
         
          }} 
        />
        <Stack.Screen 
          name="Notification2" 
          component={Notification2} 
          options={{
          title: 'Notifications',
          headerShown: true, 
         
          headerTintColor: 'black',
         
          }} 
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
