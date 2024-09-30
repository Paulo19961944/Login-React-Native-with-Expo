import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        position: 'absolute',
        bottom: 0,
        height: 120,
        width: '100%',
    }, 
    text: {
        fontSize: 12,
        fontFamily: 'TitilliumWeb-Regular',
        paddingHorizontal: 40,
        color: '#ddd',
    },
});

export default styles;