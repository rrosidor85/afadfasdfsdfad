import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';

const VehicleList = () => {
  const vehicles = [
    { id: 1, name: 'Vehicle 1', image: 'https://via.placeholder.com/150', price: 100 },
    { id: 2, name: 'Vehicle 2', image: 'https://via.placeholder.com/150', price: 120 },
    { id: 3, name: 'Vehicle 3', image: 'https://via.placeholder.com/150', price: 150 },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => {/* Navigate to vehicle details */}}>
        <Image style={styles.cardImage} source={{ uri: item.image }} />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardText}>Price: ${item.price}</Text>
          <Text style={styles.cardLink}>View Details</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehicles</Text>
      <FlatList
        data={vehicles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
      />
    </View>
  );
};

export default VehicleList;
