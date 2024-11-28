import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import profileStyle from '../../style.jsx/profileStyle';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
    const navigation = useNavigation();
    const userData = {
        name: 'Test',
        mobile: '2017547281',
        email: 'test@example.com',
        bio: 'Software developer with a passion for building user-friendly applications and exploring new technologies.',
    };
    const profileData = (data, userData) => {
        return (
            <View style={profileStyle.profileSection}>
                <Text style={profileStyle.label}>{data}:</Text>
                <Text style={profileStyle.value}>{userData}</Text>
            </View>
        )
    }
    
    return (
        <ScrollView style={profileStyle.container}>
            <Text style={profileStyle.title}>User Profile</Text>
            {profileData('Name', userData.name)}
            {profileData('Mobile', userData.mobile)}
            {profileData('Email', userData.email)}
            {profileData('Bio', userData.bio)}
            <TouchableOpacity onPress={() => navigation.navigate('MobileInfoScreen')}>
            {profileData('Mobile Infomation', 'User\'s Mobile Info')}
            </TouchableOpacity>
            
        </ScrollView>
    );
};

export default UserProfileScreen;
