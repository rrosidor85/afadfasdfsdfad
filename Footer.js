import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Divider />
      <View style={styles.textContainer}>
        <Text style={styles.footerText}>
          Vehicle Renting App &copy; {new Date().getFullYear()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#f8f9fa',
    paddingBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#212529',
  },
});

export default Footer;

