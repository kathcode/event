import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

// Views
import CategoryList from './views/categoryList/categoryList/CategoryList';

// Theme
import { theme } from './app.theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <CategoryList />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
});
