import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Views
import CategoryList from './views/categoryList/CategoryList';
import CategoryDetail from './views/categoryDetail/CategoryDetail';

// Theme
import { theme } from './app.theme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Category" component={CategoryList} />
          <Stack.Screen name="Category Detail" component={CategoryDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
});
