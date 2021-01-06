import React, { useState } from 'react';
import { Text, View } from 'react-native';

// Styled
import styles from './card.styles';

const Card = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Card;
