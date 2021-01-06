import React from 'react';
import { StyleSheet, View } from 'react-native';

// Views
import CategoryList from './views/categoryList/categoryList/CategoryList';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
});
