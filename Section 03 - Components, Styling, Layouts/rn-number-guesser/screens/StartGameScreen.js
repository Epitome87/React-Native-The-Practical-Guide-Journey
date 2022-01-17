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
        <Text>You selected</Text>
        <View>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <Button
            title='START GAME'
            onPress={() => props.onStartGame(selectedNumber)}
          />
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPess={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
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
    marginTop: 20,
    alignItems: 'center',
  },
});

export default StartGameScreen;
