import React from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-paper';

const AccountCard = (props)_ => {
  return (
    <Card>
      <Card.Title title={props.title} />
      <Card.Content>
        <View>
          {/* Turn this into it's own component */}
          <Text>{heading.title}</Text>
          <Text>{heading.label}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default AccountCard;
