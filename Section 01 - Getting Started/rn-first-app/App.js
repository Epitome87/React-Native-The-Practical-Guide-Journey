import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  // Add current input as a new goal
  const handleAddGoal = (goal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goal },
    ]);
    setIsAddMode(false);
  };

  // Remove a goal based on its ID
  const handleDeleteGoal = (goalId) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== goalId)
    );
  };

  // Cancel the process of adding a goal by closing the Modal
  const handleCancelGoal = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput
        handleInput={handleAddGoal}
        handleCancelGoal={handleCancelGoal}
        visible={isAddMode}
      />
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            goal={itemData.item}
            handleDeleteGoal={() => handleDeleteGoal(itemData.item.id)}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#4b86b4',
    flex: 1,
    paddingTop: 100,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
