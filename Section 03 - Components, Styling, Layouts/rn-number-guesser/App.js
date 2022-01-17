import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { StartGameScreen, GameScreen, GameOverScreen } from './screens/';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if (!isDataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsDataLoaded(true)}
        onError={console.warn}
      />
    );
  }

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
