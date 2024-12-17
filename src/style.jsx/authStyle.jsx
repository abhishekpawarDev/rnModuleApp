import { StyleSheet } from 'react-native';

export const authStylesheet = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 16,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
  inputStyle: {
    height: 70,
    borderColor: '#ccc',
    borderWidth:1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#f9f9f9', 
  },
  buttonMain: {
    height: 50,
    backgroundColor: '#789dcf',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderColor:'black',
    borderWidth:2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
