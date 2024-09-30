// IMPORTA AS BIBLIOTECAS E OS COMPONENTES NECESSÁRIOS PARA O APP
import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './components/Login/Login';
import CreateAccountPage from './components/CreateAccount/CreateAccountUser';
import InitialPageTemplate from './components/InitialPage/InitialPage';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator(); // Cria a Navegação

// FUNÇÃO APP
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false); // Define se a fonte foi carregada como falsa
  const [user, setUser] = useState(null); // Define o Usuário

  // FUNÇÃO PARA CARREGAR AS FONTES
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'TitilliumWeb-Regular': require('./assets/fonts/TitilliumWeb-Regular.ttf'),
        'TitilliumWeb-Bold': require('./assets/fonts/TitilliumWeb-Bold.ttf'),
        'TitilliumWeb-SemiBold': require('./assets/fonts/TitilliumWeb-SemiBold.ttf'),
      });
      setFontLoaded(true); // Define a fonte carregada como true
    }
    loadFonts(); // Chama a função que carrega a fonte

    // AUTENTICAÇÃO DE USUÁRIO DO FIREBASE
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Retorna a Função de Autenticação do Usuário
  }, []);

  // SE A FONTE NÃO FOR CARREGADA
  if (!fontLoaded) {
    return (
      <ActivityIndicator size="large" color='#00f' /> // Chama o Loading Page
    );
  }

  // RENDERIZA O CONTAINER SE O USUÁRIO NÃO ESTIVER LOGADO
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Initial" : "Login"}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="CreateAccount" component={CreateAccountPage} />
        <Stack.Screen name="Initial" component={InitialPageTemplate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
