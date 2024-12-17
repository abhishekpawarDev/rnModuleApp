import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Text, ScrollView } from "react-native";

const Authentication = () => {

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.mainContainer}>
                <Text style={styles.headerText}>Welcome Back!</Text>

                <TextInput
                    placeholder="Enter Email or Mobile Number"
                    placeholderTextColor="#8E8E93"
                    style={styles.inputStyle}
                    keyboardType="email-address"
                />
                <TextInput
                    placeholder="Enter Password"
                    placeholderTextColor="#8E8E93"
                    style={styles.inputStyle}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.mainButton}>
                    <Text style={styles.buttonText}>Authenticate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainButton}>
                    <Text style={styles.buttonText}>Continue With Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainButton}>
                    <Text style={styles.buttonText}>Set Up Account</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: "#F5F5F7",
    },
    mainContainer: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 20,
    },
    headerText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#78aede",
        marginBottom: 30,
    },
    inputStyle: {
        borderWidth: 1,
        width: "85%",
        marginBottom: 15,
        height: 50,
        borderColor: "#CCC",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 18,
        color: "black",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    mainButton: {
        width: "85%",
        height: 40,
        backgroundColor: "#0095F6", 
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        marginVertical: 10
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Authentication;
