import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import colors from '../constants/colors';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import ButtonMain from '../components/ButtonMain';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleInput = (inputText) => {
    // Validate input first: We only want numbers
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const handleConfirmInput = (event) => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [
          {
            text: 'OK',
            style: 'destructive',
            onPress: handleReset,
          },
        ]
      );

      return;
    }

    Keyboard.dismiss();
    setHasConfirmed(true);
    setSelectedNumber(parseInt(chosenNumber));
    setEnteredValue('');
  };

  const handleReset = (event) => {
    setHasConfirmed(false);
    setEnteredValue('');
  };

  let confirmedOutput;

  if (hasConfirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <View>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <ButtonMain onPress={() => props.onStartGame(selectedNumber)}>
            START GAME
          </ButtonMain>
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPess={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game!</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText style={styles.text}>Select a Number</BodyText>
          <Input
            style={styles.input}
            value={enteredValue}
            onChangeText={handleInput}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='Reset'
                onPress={handleReset}
                color={colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='Confirm'
                onPress={handleConfirmInput}
                color={colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 75,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  summaryContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'open-sans',
  },
});

export default StartGameScreen;
