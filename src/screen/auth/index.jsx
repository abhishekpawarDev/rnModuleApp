import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Text, ScrollView } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from "@react-navigation/native";
import authanticationData from '../../authanticationData.json'

const Authentication = () => {
    const navigation = useNavigation();
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });
    
    const [authData , setAuthData] = useState([]);
    
    useEffect(() => {
        setAuthData(authanticationData);
    }, []);

    const handleAuthentication = (values) => {
        const user = authData.find(item => item.useremail === values.email && item.userpassword === values.password);
        
        if (user) {
            console.log('User authenticated:', user);
            navigation.navigate('HomeScreen'); // Navigate to HomeScreen if credentials match
        } else {
            alert('Invalid credentials'); // Show error if no match
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.mainContainer}>
                <Text style={styles.headerText}>Welcome Back!</Text>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleAuthentication}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <TextInput
                                placeholder="Enter Email or Mobile Number"
                                placeholderTextColor="#8E8E93"
                                style={styles.inputStyle}
                                keyboardType="email-address"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                            <TextInput
                                placeholder="Enter Password"
                                placeholderTextColor="#8E8E93"
                                style={styles.inputStyle}
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                            <TouchableOpacity style={styles.mainButton} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Authenticate</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
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
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 5,
    },
});

export default Authentication;
