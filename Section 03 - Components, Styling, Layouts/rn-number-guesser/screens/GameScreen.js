import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import ButtonMain from '../components/ButtonMain';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import { Ionicons } from '@expo/vector-icons';
import BodyText from '../components/BodyText';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else return randomNum;
};

const renderListItem = (value, roundNum) => {
  return (
    <View key={value} style={styles.listItem}>
      <BodyText>#{roundNum}</BodyText>
      <BodyText>{value}</BodyText>
    </View>
  );
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setpastGuesses] = useState([initialGuess]);

  const currentMin = useRef(1);
  const currentMax = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const handleNextGuess = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'higher' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    let newGuess;

    if (direction === 'lower') {
      currentMax.current = currentGuess;
    } else if (direction === 'higher') {
      currentMin.current = currentGuess + 1;
    }

    newGuess = generateRandomBetween(
      currentMin.current,
      currentMax.current,
      currentGuess
    );

    setCurrentGuess(newGuess);
    setpastGuesses((currentPastGuesses) => [newGuess, ...currentPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <ButtonMain onPress={handleNextGuess.bind(this, 'lower')}>
          <Ionicons name='md-remove' size={24} color='white' />
        </ButtonMain>
        <ButtonMain onPress={handleNextGuess.bind(this, 'higher')}>
          <Ionicons name='md-add' size={24} color='white' />
        </ButtonMain>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
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
    width: 400,
    maxWidth: '90%',
  },
  listContainer: {
    flex: 1,
    width: '60%',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    width: '100%',
  },
});

export default GameScreen;
