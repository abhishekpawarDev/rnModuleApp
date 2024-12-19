import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const UserProfileScreen = () => {
    const navigation = useNavigation();
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
        <View>
            <View>
            {userData ? (
                <>
                    <Text style={{textAlign:'center', fontFamily:'Oswald-Regular' , fontSize:25}}>
                        Welcome, {userData.username || userData.useremail}!
                    </Text>
                    <TouchableOpacity
                        onPress={handleLogout}
                        style={{backgroundColor:'red', marginHorizontal:'10%' , padding:3 , marginTop:20 , borderRadius:5 }}
                    >
                        <Text style={{textAlign:'center' , fontSize:20,fontFamily:'Oswald-Regular' , color:'white'}}>Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('HomeScreen')}
                        style={{backgroundColor:'#4287f5', marginHorizontal:'10%' , padding:3 , marginTop:20 , borderRadius:5 }}
                    >
                        <Text style={{textAlign:'center' , fontSize:20,fontFamily:'Oswald-Regular' , color:'white'}}>Go Back</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text>Loading user data...</Text>
            )}
            </View>
            <View>
                <Text style={{fontSize:15, marginVertical:20 , marginHorizontal:20 , fontFamily:'Oswald-Regular'}}>
                The News App is a React Native-based mobile application designed to deliver the latest and trending news. It ensures user privacy by not saving any personal data except the user's Gmail for authentication purposes.
                </Text>
                <Text style={{fontSize:15, marginHorizontal:20 , fontFamily:'Oswald-Regular'}}>Key Features:</Text>
                <Text style={{fontSize:15, marginHorizontal:20 , fontFamily:'Oswald-Regular'}}>
                Latest News Updates: Stay informed with real-time news from various categories like technology, sports, entertainment, and more.
                </Text>
                <Text style={{fontSize:15, marginHorizontal:20 , fontFamily:'Oswald-Regular'}}>
                User-Friendly Interface: Clean and intuitive UI for seamless navigation and reading experience.
                </Text>
                <Text style={{fontSize:15, marginHorizontal:20 , fontFamily:'Oswald-Regular'}}>
                Gmail Authentication: Easy and secure login using Gmail.
                </Text>
                <Text style={{fontSize:15, marginHorizontal:20 , fontFamily:'Oswald-Regular'}}>
                Efficient Performance: Optimized for smooth and responsive usage across devices.
                </Text>
                
            </View>
        </View>
    );
};

export default UserProfileScreen;