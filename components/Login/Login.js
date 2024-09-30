import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from './Style';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, username, password);
      Alert.alert("Login realizado com sucesso!", "Bem-vindo de volta!");
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.text}>Digite o seu email:</Text>
      <TextInput 
        style={styles.input}
        placeholder='Email'
        value={username}
        onChangeText={setUsername}
        accessibilityLabel="Email"
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
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.createAccount}>Não tem uma conta?</Text>
      </TouchableOpacity>
    </View>
  );
}
