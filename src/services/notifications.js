import * as Notifications from 'expo-notifications'

export async function scheduleNotification(task) {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: 'Tarefa criada!',
            body: `Tarefa: ${task.title}`,
            data: { taskId: task.id }
        },
        trigger: { seconds: 2 }
    })
}