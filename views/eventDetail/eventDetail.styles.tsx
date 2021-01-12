import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#1D8A99',
    padding: 20,
  },
  container: {
    padding: 10,
  },
  map: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height - 20,
  },
});
