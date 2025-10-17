import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = 'TASKS';

export async function getTasks() {
  const json = await AsyncStorage.getItem(TASKS_KEY);
  return json ? JSON.parse(json) : [];
}

export async function saveTask(task) {
  const tasks = await getTasks();
  tasks.push(task);
  await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export async function deleteTask(task){
  await AsyncStorage.removeItem(task);
}