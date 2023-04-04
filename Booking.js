import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Booking = () => {
  const [dates, setDates] = useState({ startDate: '', endDate: '' });
  const [location, setLocation] = useState({ pickup: '', dropOff: '' });

  const handleBooking = (e) => {
    e.preventDefault();
    console.log('Booking details:', dates, location);
    // Send booking data to the back-end
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Vehicle</Text>
      <View style={styles.formGroup}>
        <Text>Pickup Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Pickup Date"
          value={dates.startDate}
          onChangeText={(text) => setDates({ ...dates, startDate: text })}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Drop-off Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Drop-off Date"
          value={dates.endDate}
          onChangeText={(text) => setDates({ ...dates, endDate: text })}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Pickup Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter pickup location"
          value={location.pickup}
          onChangeText={(text) => setLocation({ ...location, pickup: text })}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Drop-off Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter drop-off location"
          value={location.dropOff}
          onChangeText={(text) => setLocation({ ...location, dropOff: text })}
        />
      </View>
      {/* Add customer information fields here */}
      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Book</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Booking;
