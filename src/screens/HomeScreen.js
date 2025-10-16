import React, { useState, useEffect } from 'react';
import { View, FlatList, Button } from 'react-native';
import TaskItem from '../components/TaskItem';
import { getTasks } from '../services/storage';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
      <Button title="Adicionar Tarefa" onPress={() => navigation.navigate('AddTask')} />
    </View>
  );
}