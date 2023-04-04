import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel'; // Import Carousel
import Search from './Search';
import Testimonials from './Testimonials';
import styles from './styles';

const image1 = require('../assets/image1.jpeg');
const image2 = require('../assets/image2.jpeg');
const image3 = require('../assets/image3.jpeg');

const Home = () => {
  const carouselItems = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
  ];

  const renderItem = ({ item }) => {
    return (
      <ImageBackground source={item.image} style={styles.carouselContainer}>
        {/* Add any overlay content you want on top of the carousel images */}
      </ImageBackground>
    );
  };

  return (
    <ScrollView style={styles.homeContainer}>
      <Carousel
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={styles.carouselContainer.width}
        itemWidth={styles.carouselContainer.width}
      />
      <View style={styles.contentContainer}>
        <View style={styles.searchContainer}>
          <Text style={styles.rentARec}>Rent-A-Rec</Text>
          <Search />
        </View>
        <Testimonials />
      </View>
    </ScrollView>
  );
};

export default Home;
