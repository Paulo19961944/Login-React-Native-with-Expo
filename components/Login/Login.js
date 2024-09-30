import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Style';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Usuário:', username);
        console.log('Senha:', password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.text}>Digite o seu nome de usuário:</Text>
            <TextInput 
                style={styles.input}
                placeholder='Usuário'
                value={username}
                onChangeText={setUsername}
                accessibilityLabel="Nome de usuário"
            />
            <Text style={styles.text}>Digite a sua senha:</Text>
            <TextInput 
                style={styles.input}
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                accessibilityLabel="Senha"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.createAccount}>Não tem uma conta?</Text>
        </View>
    );
}
