import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleText from './TitleText';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    // fontSize: 18,
    // fontFamily: 'open-sans-bold',
    // color: 'black',
  },
});

export default Header;
