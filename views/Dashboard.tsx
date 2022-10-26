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
        {/*<Card>
          <Card.Title title="Main Account" />
          <Card.Content>
            <View>
               Turn this into it's own component 
              <Text>£250.42</Text>
              <Text>Remaining</Text>
            </View>
          </Card.Content>
        </Card>*/}
        <AccountCard
          title="Main Account"
          heading={{title: '£250.42', label: 'Reamaining'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default DashboardView;
