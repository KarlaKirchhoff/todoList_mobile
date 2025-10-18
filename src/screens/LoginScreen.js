import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { supabase } from "../utils/supabase";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) Alert.alert('Erro ao entrar', error.message)
        else navigation.replace('Home')
    }  

    return(
        <View>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail}/>
            <TextInput placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword}/>
            <Button title="Entrar" onPress={handleLogin}/>
        </View>
    )
}