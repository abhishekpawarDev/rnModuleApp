import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserProfileScreen = ({ navigation }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await AsyncStorage.getItem("userData");
                if (data) {
                    setUserData(JSON.parse(data)); 
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem("userData");
            navigation.navigate("Auth");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <View style={styles.container}>
            {userData ? (
                <>
                    <Text style={styles.welcomeText}>
                        Welcome, {userData.username || userData.useremail}!
                    </Text>
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={handleLogout}
                    >
                        <Text style={styles.logoutButtonText}>Logout</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text style={styles.loadingText}>Loading user data...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F7",
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#0095F6",
        marginBottom: 20,
    },
    logoutButton: {
        width: "80%",
        height: 50,
        backgroundColor: "#FF3B30",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    logoutButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    loadingText: {
        fontSize: 18,
        color: "#8E8E93",
    },
});

export default UserProfileScreen;
