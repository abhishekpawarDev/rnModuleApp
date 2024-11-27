import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View>
                <Text>User Profile</Text>
            </View>
        </View>
    );
}

export default UserProfileScreen;
