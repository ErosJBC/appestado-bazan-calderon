import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00476e',
        paddingTop: 80,
    },
    title: {
        color: 'white',
        fontWeight: '400',
        alignSelf: 'center',
        textTransform: 'uppercase',
        fontSize: 16
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        width: 300,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        minWidth: '85%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 5
    },
    textList: {
        alignSelf: 'center',
        fontSize: 16
    },
    containerInput: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    input: {
        height: 40,
        margin: 8,
        borderWidth: 0.5,
        padding: 10,
        width: '85%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5
    },
    marginBottom20: {
        marginBottom: 20
    },
    error: {
        color: 'white',
        backgroundColor: 'red',
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        fontWeight: '600',
        marginBottom: 15
    }
})

export default styles;