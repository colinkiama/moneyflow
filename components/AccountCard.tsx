import React from 'react';
import {View} from 'react-native';
import {Card, ProgressBar, Text} from 'react-native-paper';

const AccountCard = (props)_=> {
  return (
    <Card>
      <Card.Title title={props.title} />
      <Card.Content>
        <View>
          {/* Turn this into it's own component */}
          <Text variant="titleLarge">{props.heading.title}</Text>
          <Text variant="labelSmall">{props.heading.label}</Text>
          {props.type === 'main' &&
            <ProgressBar progress={props.progress ?? 0} />
          }
        </View>
      </Card.Content>
    </Card>
  );
};

export default AccountCard;
