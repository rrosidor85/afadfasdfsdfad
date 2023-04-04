import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
    // Fetch data from back-end based on searchQuery
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Vehicles</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Search</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter search query"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      {/* Add more input fields and filters here */}
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
});

export default Search;
