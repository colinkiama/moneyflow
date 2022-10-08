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
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Appbar, Button, Text, TextInput} from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Appbar>
        <Appbar.Content title="Getting Started" />
      </Appbar>

      <View
        style={{
          height: '100%',
          flex: 1,
          paddingLeft: 12,
          paddingRight: 12,
        }}>
        <Text variant="headlineSmall">What's your Monthly Income?</Text>
        <TextInput
          mode="outlined"
          label="Amount (£)"
          placeholder="23000"
          style={{marginTop: 24}}
        />
      </View>

      <View style={{alignItems: 'center', marginBottom: 40}}>
        <Button
          icon="arrow-right"
          mode="contained"
          contentStyle={{flexDirection: 'row-reverse'}}
          onPress={() => console.log('Go to next page!')}>
          Next
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default App;
