import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View ,Text, TouchableOpacity} from 'react-native';


const HomeScreen = () =>{
    const navigation = useNavigation();
    return(
        <View>
            <View>
                <Text>Portfolio</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen;