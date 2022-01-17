import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import colors from '../constants/colors';
import ButtonMain from '../components/ButtonMain';

const GameOverScreen = ({ userNumber, numberOfGuesses, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <Image
        style={styles.image}
        source={require('../assets/success.png')}
        resizeMode='cover'
      />
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{numberOfGuesses} </Text>rounds to
          guess the number <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>

      <ButtonMain onPress={onRestartGame}>NEW GAME</ButtonMain>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '80%',
    height: 300,
    // borderRadius: 200,
    // borderWith: 3,
    // borderColor: 'black',
    // overFlow: 'hidden',
    marginVertical: 50,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: '50%',
    borderWidth: 3,
    borderColor: 'black',
    marginVertical: 30,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
