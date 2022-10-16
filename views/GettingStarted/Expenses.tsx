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

const ExpensesView = ({navigation}) => {
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
        <Text variant="headlineSmall">What are your monthly expnses?</Text>
        <TextInput mode="outlined" label="Name" style={{marginTop: 24}} />
        <TextInput
          mode="outlined"
          label="Amount (£)"
          placeholder="1738"
          style={{marginTop: 24}}
        />

        <Button
          style={{
            marginTop: 24,
          }}
          icon="plus"
          mode="contained"
          contentStyle={{flexDirection: 'row-reverse'}}
          onPress={() => navigation.navigate('Getting Started - Expenses')}>
          Next
        </Button>
      </View>

      <View style={{alignItems: 'center', marginBottom: 40}}>
        <Button
          icon="arrow-right"
          mode="contained"
          contentStyle={{flexDirection: 'row-reverse'}}
          onPress={() => navigation.navigate('Getting Started - Expenses')}>
          Next
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ExpensesView;
