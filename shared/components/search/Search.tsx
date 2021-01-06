import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Styled
import styles from './search.styles';

const placeHolderDefault = 'Search here...';

const Search = ({ placeholder = placeHolderDefault }) => {
  const [textEntered, setTextEntered] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={setTextEntered}
        value={textEntered}
        style={styles.input}
      />
      <Ionicons name="md-calendar" size={32} color="#333" style={styles.icon} />
      <Ionicons name="md-search" size={32} color="#333" style={styles.icon} />
    </View>
  );
};

export default Search;
