import { StyleSheet, Text } from 'react-native';
import React from 'react';

// Simple wrapper component to give our text some default, universal styling
const DefaultText = ({ children, bold, style }) => {
  return (
    <Text style={[style, bold ? styles.textBold : styles.textRegular]}>
      {children}
    </Text>
  );
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
