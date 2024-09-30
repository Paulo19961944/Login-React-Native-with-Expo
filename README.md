# PÁGINA DE LOGIN NO REACT NATIVE COM EXPO
O Projeto de Hoje é uma página de Login com React Native e com Expo. E como dizemos, Página de Login é uma base, pois tudo que você entra tem uma página de login. Ou seja, qualquer aplicativo e basicamente tudo mesmo. 

## TECNOLOGIAS UTILIZADAS
**1. JavaScript -** Utilizando o JavaScript com a biblioteca React Native, que é uma biblioteca em JavaScript que permite criar base em Aplicativos Móveis, ele pode ser usado em IOS ou Android em um mesmo código.<br></br>
**2. Expo -** É um framework que tem vários componentes prontos, agilizando o processo de desenvolvimento<br></br>
**3. Firebase Authentication -** O Firebase Authentication permite a Autenticação de usuários de forma rápida e funciona bem com baixa escalabilidade<br></br>
**4. Firestore Database -** É um Banco de Dados que permite integrações rápidas, e funciona bem com baixa escalabilidade. O que no projeto como é uma demonstração, serve bem, como exemplos para controlar IoT dentro de casa é bom, pois a escalabilidade desse tipo de projeto tende a ser baixa.

## APLICAÇÕES

### 1. Sistema de Autenticação
  * Login: Usuários podem se autenticar usando email e senha.
  * Registro: Permite que novos usuários se cadastrem.
  * Logout: Usuários podem sair da aplicação.
### 2. Gerenciamento de Usuários
  * Perfil de Usuário: Criação de uma página para que usuários possam visualizar e editar suas informações (nome, email, etc.).
  * Recuperação de Senha: Implementar um fluxo para recuperação de senhas esquecidas.
### 3. Armazenamento de Dados
  * Firestore: Armazenar informações adicionais dos usuários, como nome, foto de perfil, preferências, etc.
  * Histórico de Atividades: Registros de atividades dos usuários na aplicação.
### 4. Interface do Usuário
  * Navegação entre Páginas: Expansão da navegação para incluir páginas como "Sobre", "Configurações", etc.
  * Feedback do Usuário: Implementação de mensagens de feedback para ações como login, logout e cadastro.
### 5. Segurança e Validação
  * Validação de Formulários: Implementar validações no registro e login para garantir que os dados sejam inseridos corretamente.
  * Criptografia: Armazenar senhas de forma segura, utilizando práticas recomendadas.
### 6. Integrações
  * API Externa: Conectar com APIs para funcionalidades como verificação de email ou autenticação social (Google, Facebook).
  * Notificações: Implementar um sistema de notificações para alertar usuários sobre novas funcionalidades ou mensagens.
### 7. Melhorias e Recursos Adicionais
  * Tema e Estilização: Permitir que usuários escolham temas (claro/escuro) ou personalizem a interface.
  * Analytics: Integrar ferramentas para monitorar o uso da aplicação e coletar dados sobre interações do usuário.
### 8. Experiência do Usuário
  * Tutoriais: Criar guias ou tutoriais interativos para novos usuários.
  * Acessibilidade: Melhorar a acessibilidade da aplicação para todos os usuários.

## EXEMPLOS DE USO
  * Aplicativo de Redes Sociais: Onde usuários podem se conectar, compartilhar conteúdos e interagir.
  * Aplicativo de Aprendizado: Oferecendo cursos e recursos para usuários registrados.
  * Aplicativo de Gestão de Tarefas: Para que usuários organizem suas atividades diárias.

## COMO UTILIZAR
1. **Criar um novo projeto React Native (se ainda não tiver feito)**:
   ```bash
   npx expo-cli init nome-do-seu-projeto
   ```

2. **Navegar até o diretório do projeto**:
   ```bash
   cd nome-do-seu-projeto
   ```

3. **Instalar Firebase**:
   ```bash
   npm install firebase
   ```

4. **Instalar React Navigation**:
   ```bash
   npm install @react-navigation/native @react-navigation/native-stack
   ```

5. **Instalar dependências do React Navigation**:
   ```bash
   npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
   ```

6. **Instalar AsyncStorage**:
   ```bash
   npm install @react-native-async-storage/async-storage
   ```

7. **Instalar Expo Font (se você estiver usando fontes personalizadas)**:
   ```bash
   expo install expo-font
   ```


## CONCLUSÃO
Esse é um projeto que pode ter várias utilidades, pois todas as aplicações tem login e senha, e esse aplicativo cumpre bem o seu papel. Caso tenha uma pergunta sobre o projeto fica a vontade
