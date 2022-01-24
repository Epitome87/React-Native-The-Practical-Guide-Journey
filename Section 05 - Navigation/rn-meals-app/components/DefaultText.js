import { StyleSheet, Text } from 'react-native';
import React from 'react';

// Simple wrapper component to give our text some default, universal styling
const DefaultText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
});

export default DefaultText;
