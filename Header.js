import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const vehicleTypes = [
    'Jet-Skis',
    'Dirt-Bikes',
    'Four-Wheelers',
    'Golf-Carts',
    'Motorcycles',
    "RV's",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Rent-A-Rec</Text>
      <View style={styles.datePickers}>
        <DatePicker
          style={styles.datePicker}
          date={startDate}
          mode="date"
          placeholder="From"
          format="MM/DD/YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => setStartDate(date)}
        />
        <DatePicker
          style={styles.datePicker}
          date={endDate}
          mode="date"
          placeholder="Until"
          format="MM/DD/YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => setEndDate(date)}
        />
      </View>
      <View style={styles.vehicleDropdown}>
        {/* Implement vehicle dropdown here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 16,
    justifyContent: 'space-between',
  },
  brand: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  datePickers: {
    flexDirection: 'row',
  },
  datePicker: {
    marginLeft: 8,
  },
  vehicleDropdown: {
    // Style for vehicle dropdown
  },
});

export default Header;
