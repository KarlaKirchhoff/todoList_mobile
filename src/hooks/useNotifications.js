import { useEffect } from "react";
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import { Alert } from "react-native";

export default function useNotifications(){
    useEffect(() => {

        async function registerForPushNotificationsAsync(){
            if(Device.isDevice) {
                const {status} = await Notifications.requestPermissionsAsync()
                if (status !== 'granted') {
                    Alert.alert('Permissão Negada', 'Você não receberá notificações')
                }
            } else {
                console.log('Notificações executam em dispositivos físicos');
            }
            Notifications.setNotificationHandler({
                shouldShowAlert: true,
                shouldPlaySound: false,
                shouldSetBadge: false
            })
        }

      const subscription = Notifications.addNotificationResponseReceivedListener(response => {
        const taskId = response.notification.request.content.data.taskId;
        console.log('Usuário interagiu com a notificação da tarefa: ', taskId);
        
      });
      registerForPushNotificationsAsync()
      return () => subscription.remove()
    }, [])
    
}
