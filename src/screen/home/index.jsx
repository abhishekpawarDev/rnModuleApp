import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import HomeScreenStyle from '../../style.jsx/homeStyle';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={HomeScreenStyle.mainContainer}>
            <View style={HomeScreenStyle.header}>
                <Text style={HomeScreenStyle.title}>Portfolio</Text>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                    <Text style={HomeScreenStyle.profileButton}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default HomeScreen;
