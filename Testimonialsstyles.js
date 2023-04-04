import { StyleSheet } from 'react-native';

const testimonialsStyles = StyleSheet.create({
  testimonialsContainer: {
    padding: 32,
    backgroundColor: '#f8f9fa', // Adjust the background color as needed
  },
  testimonialsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  testimonial: {
    width: 300,
    padding: 16,
    borderColor: '#dee2e6',
    borderWidth: 1,
    borderRadius: 4,
    textAlign: 'center',
    margin: 8,
  },
});

export default testimonialsStyles;
