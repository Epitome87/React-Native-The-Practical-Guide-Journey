import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const handleConfigureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handleEndGame = (numRounds) => {
    setGuessRounds(numRounds);
  };

  let renderedContent = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber && guessRounds <= 0) {
    renderedContent = (
      <GameScreen userChoice={userNumber} onGameOver={handleEndGame} />
    );
  } else if (guessRounds > 0) {
    renderedContent = (
      <GameOverScreen
        userNumber={userNumber}
        numberOfGuesses={guessRounds}
        onRestartGame={handleConfigureNewGame}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {renderedContent}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
