import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { supabase } from "../utils/supabase";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    const handleSignup = async () => {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) Alert.alert('Erro ao cadastrar', error.message)
        else {
            Alert.alert('Cadastro feito com sucesso')
            navigation.replace('Login')
        }
    }

    return (
        <View>
            <TextInput
             placeholder="Email" 
             value={email} 
             autoCapitalize="npne"
             keyboardType="email-address"
             onChangeText={setEmail} />
            <TextInput placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
            <Button title="Cadastrar" onPress={handleSignup} />
        </View>
    )
}