import React from 'react';
import { Text, View } from 'react-native';

// Shared components
import Icon from '../icon/Icon';

// Styles
import { styles } from './logo.styles';

const Logo = () => (
  <View style={styles.logoContainer}>
    <Icon iconMaterial="event" color="#7C77B9" size={40} />
    <Text style={styles.title}>Events</Text>
  </View>
);

export default Logo;
