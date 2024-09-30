import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import styles from './Style';

export default function CreateAccountPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const createAccountFromUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'Usuarios', user.uid), {
        user: username
      });

      Alert.alert("Cadastro realizado com sucesso!", "Você já pode fazer login.");
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
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
      <TouchableOpacity style={styles.button} onPress={createAccountFromUser}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.createAccount}>Faça seu Login</Text>
      </TouchableOpacity>
    </View>
  );
}
