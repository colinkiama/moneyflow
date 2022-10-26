/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from 'react-native-paper';
import AccountCard from '../components/AccountCard';

const DashboardView = ({navigation}) => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <View
        style={{
          height: '100%',
          flex: 1,
          paddingLeft: 12,
          paddingRight: 12,
          marginTop: 12,
        }}>
        <Text variant="headlineSmall">Home</Text>

        <AccountCard
          title="Main Account"
          heading={{title: '£250.42', label: 'Reamaining'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default DashboardView;
