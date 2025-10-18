import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Button } from 'react-native';
import TaskItem from '../components/TaskItem';
import { getTasks } from '../services/supabase.storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { deleteTask } from '../services/storage';

import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();

  /* useEffect(() => {
    getTasks().then(setTasks);
  }, []); */

  useFocusEffect(
    useCallback(() => {
      getTasks().then(setTasks);
    }, [])
  )

 /*  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
      <Button title="Adicionar Tarefa" onPress={() => navigation.navigate('AddTask')} />
    </View>
  ); */
  return (
    <SignupScreen />
  )
}