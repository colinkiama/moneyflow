/**
 * @format
 */

import * as React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {Provider as PaperProvider, Appbar} from 'react-native-paper';
import {name as appName} from './app.json';
import {ExpensesView, IncomeView} from './views/GettingStarted';
import DashboardView from './views/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const pageTitleMap = {
  GettingStartedIncome: 'Getting Started',
  GettingStartedExpenses: 'Getting Started',
  Dashboard: 'Dashboard',
};

const getPageTitle = routeName => {
  return routeName in pageTitleMap ? pageTitleMap[routeName] : 'Page';
};

function CustomNavigationBar({navigation, back, route}) {
  return (
    <Appbar>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={getPageTitle(route.name)} />
    </Appbar>
  );
}

export default function Main() {
  return (
    <PaperProvider>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="GettingStartedIncome"
          screenOptions={{
            header: props => <CustomNavigationBar {...props} />,
          }}>
          <Stack.Screen name="GettingStartedIncome" component={IncomeView} />
          <Stack.Screen
            name="GettingStartedExpenses"
            component={ExpensesView}
          />
          <Stack.Screen name="Dashboard" component={DashboardView} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
