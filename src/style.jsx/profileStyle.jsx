import { StyleSheet } from "react-native";

const profileStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
      },
      profileSection: {
        marginBottom: 15,
        padding: 15,
        backgroundColor: '#e9ecef',
        borderRadius: 10,
      },
      label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#555',
      },
      value: {
        fontSize: 18,
        color: '#333',
        marginTop: 5,
      },
});

export default profileStyle;