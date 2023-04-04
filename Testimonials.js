import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      quote: 'Great service and a fantastic selection of vehicles!',
    },
    {
      name: 'Jane Smith',
      quote: 'Rent-a-Rec made finding my perfect rental car a breeze!',
    },
    {
      name: 'Sam Brown',
      quote: 'Excellent customer service and a seamless booking process!',
    },
  ];

  return (
    <View style={styles.testimonialsContainer}>
      <Text style={styles.title}>Testimonials</Text>
      <View style={styles.testimonialsList}>
        {testimonials.map((testimonial, index) => (
          <View key={index} style={styles.testimonial}>
            <Text style={styles.quote}>{testimonial.quote}</Text>
            <Text style={styles.name}>- {testimonial.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Testimonials;
