import { View, Text} from 'react-native'
import styles from './Style'
import Footer from '../Footer/Footer'

export default function InitialPageTemplate(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Seja Bem Vindo!</Text>
            <Text style={styles.text}>Você efetuou o primeiro login. Essa é a primeira base de toda a aplicação.</Text>
            <Text style={styles.logout}>Logout</Text>
            <Footer />
        </View>
    )
}