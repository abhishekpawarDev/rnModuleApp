import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationScreen from '../../screen/auth';
import HomeScreen from '../../screen/home';
import UserProfileScreen from '../../screen/profile';

// const navigation = useNavigation();
const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserProfile">
                <Stack.Screen
                    name="Auth"
                    component={AuthenticationScreen}
                    options={{ 
                        headerShown: false,
                     }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="UserProfile"
                    component={UserProfileScreen}
                    options={{ 
                        headerShown: false,
                     }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
