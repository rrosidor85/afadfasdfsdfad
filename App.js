import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import Testimonials from './components/Testimonials';
import VehicleDetails from './components/VehicleDetails';
import VehicleList from './components/VehicleList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ header: (props) => <Header {...props} /> }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ header: (props) => <Header {...props} /> }}
        />
        <Stack.Screen
          name="VehicleList"
          component={VehicleList}
          options={{ header: (props) => <Header {...props} /> }}
        />
        <Stack.Screen
          name="VehicleDetails"
          component={VehicleDetails}
          options={{ header: (props) => <Header {...props} /> }}
        />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{ header: (props) => <Header {...props} /> }}
        />
      </Stack.Navigator>
      <View style={{flex: 1}}>
        <Footer />
      </View>
    </NavigationContainer>
  );
};

export default App;
