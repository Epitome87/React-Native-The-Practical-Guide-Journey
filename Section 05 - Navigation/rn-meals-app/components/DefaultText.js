import { StyleSheet, Text } from 'react-native';
import React from 'react';

// Simple wrapper component to give our text some default, universal styling
const DefaultText = (props) => {
  return <Text style={props.bold ? styles.textBold : styles.textRegular}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  textBold: {
    fontFamily: 'open-sans-bold',
  },
  textRegular: {
    fontFamily: 'open-sans',
  },
});

export default DefaultText;
