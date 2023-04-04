import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'rgba(30, 136, 229, 1)',
  },
  carouselContainer: {
    flex: 1,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  rentARec: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 16,
  },
});

export default styles;
