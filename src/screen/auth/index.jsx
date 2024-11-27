import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { authStylesheet } from '../../style.jsx/authStyle';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

const AuthenticationScreen = () => {
  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <ScrollView contentContainerStyle={authStylesheet.scrollViewContainer}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // console.log('Form Data:', values);
          navigation.navigate('HomeScreen');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={authStylesheet.formContainer}>
            <TextInput
              placeholder="Enter Email"
              style={authStylesheet.inputStyle}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={authStylesheet.error}>{errors.email}</Text>
            )}
            <TextInput
              placeholder="Password"
              style={authStylesheet.inputStyle}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={authStylesheet.error}>{errors.password}</Text>
            )}
            <TouchableOpacity
              style={authStylesheet.buttonMain}
              onPress={handleSubmit} 
            >
              <Text style={authStylesheet.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AuthenticationScreen;
