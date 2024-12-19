import { StyleSheet } from "react-native";

const HomeScreenStyle=StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mainHeading:{
        fontSize:40,
        textAlign:'center',
        textDecorationLine:'underline',
        fontFamily:'Oswald-Bold',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      newsItem: {
        marginBottom: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
      },
      title: {
        fontSize: 19,
        fontFamily:'Oswald-Bold',
        textDecorationLine:'underline',
      },
      summary: {
        marginTop: 8,
        fontSize: 17,
        color: '#666',
        fontFamily:'Oswald-Regular'
      },
      accountData:{
        justifyContent:'flex-end',
        backgroundColor:'#4287f5',
        color:'white',
        padding:5,
  },
  accountDataText:{
    textAlign:'center',
    fontSize:17,
    fontFamily:'Oswald-Bold',
  }
});

export default HomeScreenStyle;