import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import configureStore from './src/store/store';
import { enableScreens } from 'react-native-screens';

import Main from './src/views/Main';
import About from './src/views/About';

enableScreens();
const store = configureStore();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
