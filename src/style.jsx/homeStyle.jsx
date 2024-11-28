import { StyleSheet } from "react-native";

const HomeScreenStyle=StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileButton: {
        fontSize: 16,
        color: '#007BFF',
        fontWeight:'700'
    },
});

export default HomeScreenStyle;