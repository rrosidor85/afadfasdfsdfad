import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import Search from './Search';
import Testimonials from './Testimonials';
import styles from './styles';

const Home = () => {
  // Your component code here

  return (
    <LinearGradient
      colors={['#1E88E5', '#FFC107']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.homeContainer}
    >
      {/* Your component contents here */}
    </LinearGradient>
  );
};

export default Home;
