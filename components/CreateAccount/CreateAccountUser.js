import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';

export default function CreateAccountPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const createAccountFromUser = () => {
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
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
      <TouchableOpacity style={styles.button} onPress={createAccountFromUser}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.createAccount}>Faça seu Login</Text>
      </TouchableOpacity>
    </View>
  );
}
