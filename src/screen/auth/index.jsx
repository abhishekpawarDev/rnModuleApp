import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { authStylesheet } from '../../style.jsx/authStyle';

const AuthenticationScreen = () => {
  return (
    <ScrollView contentContainerStyle={authStylesheet.scrollViewContainer}>
      <View style={authStylesheet.formContainer}>
        <TextInput
          placeholder="Enter Email"
          style={authStylesheet.inputStyle}
        />
        <TextInput
          placeholder="Password"
          style={authStylesheet.inputStyle}
        />
        <TouchableOpacity style={authStylesheet.buttonMain}>
          <Text style={authStylesheet.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AuthenticationScreen;
