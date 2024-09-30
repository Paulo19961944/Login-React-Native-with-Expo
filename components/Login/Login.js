// IMPORTA OS COMPONENTES E AS BIBLIOTECAS NECESSÁRIAS PARA O APP
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from './Style';

// FUNÇÃO DA PÁGINA DE LOGIN
export default function LoginPage() {
  const [username, setUsername] = useState(''); // Define o Username como falso
  const [password, setPassword] = useState(''); // Define a Senha como Falso
  const navigation = useNavigation(); // Chama a função para navegação

  // TENTATIVA DE LOGIN
  const handleLogin = async () => {
    // SE DER TUDO CERTO
    try {
      await signInWithEmailAndPassword(auth, username, password);
      Alert.alert("Login realizado com sucesso!", "Bem-vindo de volta!");
      navigation.replace('Initial'); // Usar replace para não voltar ao login
    } catch (error) { // SE OCORRER UMA EXCEÇÃO
      Alert.alert("Erro", error.message);
    }
  };

  // RENDERIZA A PÁGINA DE LOGIN
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
