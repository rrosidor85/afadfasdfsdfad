import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const vehicle = {
  id: 1,
  name: 'Honda Civic',
  image: 'https://via.placeholder.com/300',
  price: 100,
  features: ['Air conditioning', 'Bluetooth', 'GPS'],
  availability: 'Available',
};

const VehicleDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{vehicle.name}</Text>
      <Image style={styles.image} source={{ uri: vehicle.image }} />
      <Text style={styles.text}>Price: ${vehicle.price} per day</Text>
      <Text style={styles.text}>Availability: {vehicle.availability}</Text>
      <Text style={styles.subTitle}>Features:</Text>
      <View style={styles.featuresList}>
        {vehicle.features.map((feature, index) => (
          <Text key={index} style={styles.feature}>{feature}</Text>
        ))}
      </View>
    </View>
  );
};

export default VehicleDetails;
