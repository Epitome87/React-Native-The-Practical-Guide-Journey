import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else return randomNum;
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0);

  const currentMin = useRef(1);
  const currentMax = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const handleNextGuess = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    let newGuess;

    if (direction === 'lower') {
      currentMax.current = currentGuess;
      newGuess = generateRandomBetween(
        currentMin.current,
        currentMax.current,
        currentGuess
      );
      setCurrentGuess(newGuess);
    } else if (direction === 'greater') {
      currentMin.current = currentGuess;
      newGuess = generateRandomBetween(
        currentMin.current,
        currentMax.current,
        currentGuess
      );
    }

    setRounds((currentRounds) => currentRounds + 1);
    setCurrentGuess(newGuess);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title='LOWER' onPress={handleNextGuess.bind(this, 'lower')} />
        <Button
          title='GREATER'
          onPress={handleNextGuess.bind(this, 'greater')}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;
