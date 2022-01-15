import React, { useState } from 'react';
import { Button, Modal, View, TextInput, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  // Update the current goal to be the user's input
  const handleGoalInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  // Trigger callback, reset input to be blank
  const handleAddGoal = () => {
    props.handleInput(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter Goal'
          style={styles.goalInput}
          value={enteredGoal}
          onChangeText={handleGoalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='CANCEL'
              color='red'
              onPress={props.handleCancelGoal}
            />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  goalInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },

  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    width: '40%',
    color: 'red',
  },
});

export default GoalInput;
