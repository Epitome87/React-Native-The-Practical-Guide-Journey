import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameOverScreen = ({ userNumber, numberOfGuesses, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>Number of Guesses: {numberOfGuesses}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title='NEW GAME' onPress={onRestartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
