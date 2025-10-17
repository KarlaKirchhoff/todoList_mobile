import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { saveTask } from '../services/supabase.storage';
import { scheduleNotification } from '../services/notifications';
import { useNavigation } from '@react-navigation/native';

export default function AddTaskScreen() {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigation = useNavigation();

  const handleSave = async () => {
    const task = {
      id: Date.now().toString(),
      title,
      dueDate: new Date().toISOString()
    };
    await saveTask(task);
    await scheduleNotification(task);
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Título da tarefa" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Data de conclusão (YYYY-MM-DD)" value={dueDate} onChangeText={setDueDate} />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}