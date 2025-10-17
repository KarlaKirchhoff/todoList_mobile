import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// renderizar cada uma das tarefas
export default function TaskItem({ task }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.date}>Concluir até: {task.dueDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, borderBottomWidth: 1 },
  title: { fontSize: 16 },
  date: { fontSize: 12, color: 'gray' },
});