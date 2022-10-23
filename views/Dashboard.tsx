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
import {Button, Text, TextInput} from 'react-native-paper';

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
        <TextInput
          mode="outlined"
          label="Amount (£)"
          placeholder="1738"
          style={{marginTop: 24}}
        />
      </View>
    </SafeAreaView>
  );
};

export default DashboardView;
