import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, TouchableOpacity} from 'react-native';

const ProfileButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={console.log('hello')} >
            <Text>Profile</Text>
        </TouchableOpacity>
    );
};
export default ProfileButton;