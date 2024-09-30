// IMPORTA AS BIBLIOTECAS E OS COMPONENTES NECESSÁRIOS PARA O APP
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './Style';
import Footer from '../Footer/Footer';
import { auth } from '../../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

// FUNÇÃO PARA CARREGAR A PÁGINA INICIAL
export default function InitialPageTemplate() {
  const navigation = useNavigation(); // Chama a funçao de navegação

  // FUNÇÃO DE LOGOUT
  const handleLogout = async () => {
    // SE DER TUDO CERTO
    try {
      await signOut(auth);
      navigation.replace('Login'); // Usar replace para não voltar ao inicial
    } catch (error) { // SE OCORRER UM ERRO
      Alert.alert("Erro", error.message);
    }
  };

  // RENDERIZA A PÁGINA
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja Bem Vindo!</Text>
      <Text style={styles.text}>Você efetuou o primeiro login. Essa é a primeira base de toda a aplicação.</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
}
