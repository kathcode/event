import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Views
import CategoryEventList from './views/categoryEventList/CategoryEventList';
import EventList from './views/eventList/eventList';
import EventDetail from './views/eventDetail/EventDetail';

// Theme
import { theme } from './app.theme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoryEventList} />
          <Stack.Screen name="Events" component={EventList} />
          <Stack.Screen name="Event detail" component={EventDetail} />
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
