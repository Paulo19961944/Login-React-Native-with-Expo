// IMPORTA AS BIBLIOTECAS E OS COMPONENTES NECESSÁRIOS PARA O APP
import { View, Text } from 'react-native'
import styles from './Style'

// CARREGA A FUNÇÃO PARA EXIBIR O FOOTER
export default function Footer(){
    // RENDERIZA A PÁGINA
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Criado por Paulo Henrique Azevedo do Nascimento</Text>
        </View>
    )
}