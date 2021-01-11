import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Views
import CategoryList from './views/categoryList/categoryList/CategoryList';

// Shared component
import Logo from './shared/components/logo/Logo';

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
