/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider, Appbar} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './App';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function CustomNavigationBar({navigation, back, route}) {
  return (
    <Appbar>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={route.name} />
    </Appbar>
  );
}

export default function Main() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Getting Started"
          screenOptions={{
            header: props => <CustomNavigationBar {...props} />,
          }}>
          <Stack.Screen name="Getting Started" component={App} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
