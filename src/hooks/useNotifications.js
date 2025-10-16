import { useEffect } from "react";
import * as Notifications from 'expo-notifications'

export default function useNotifications(){
    useEffect(() => {
      const subscription = Notifications.addNotificationResponseReceivedListener(response => {
        const taskId = response.notification.request.content.data.taskId;
        console.log('Usuário interagiu com a notificação da tarefa: ', taskId);
        
      });
      return () => subscription.remove()
    }, [])
    
}
