import { Platform, StyleSheet, Switch, View } from 'react-native';
import React from 'react';
import DefaultText from './DefaultText';
import colors from '../constants/colors';

const FilterSwitch = ({ label, value, onValueChange }) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText>{label}</DefaultText>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ true: colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? colors.primaryColor : ''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
});

export default FilterSwitch;
