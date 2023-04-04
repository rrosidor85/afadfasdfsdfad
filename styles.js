import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  carouselContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  carouselImage: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    position: 'relative',
    zIndex: 1,
  },
  searchContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 16,
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 16,
    marginRight: 32,
  },
  rentARec: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 16,
  },
});

export default styles;
