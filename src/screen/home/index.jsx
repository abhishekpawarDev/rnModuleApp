import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, HomeScreenStyleheet, ScrollView, ActivityIndicator, FlatList, Button } from 'react-native';
import HomeScreenStyle from '../../style.jsx/homeStyle';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await fetch('https://api.first.org/data/v1/news');
          const json = await response.json();
          setNews(json.data);
        } catch (error) {
          console.error('Error fetching news:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchNews();
    }, []);
  
    if (loading) {
      return (
        <View style={HomeScreenStyle.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading news...</Text>
        </View>
      );
    }
    return (
        <View style={HomeScreenStyle.mainContainer}>
            <Text style={HomeScreenStyle.mainHeading}>HEADLINE HUB</Text>     
            <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={HomeScreenStyle.newsItem}>
            <Text style={HomeScreenStyle.title}>{item.title}</Text>
            <Text style={HomeScreenStyle.summary}>{item.summary}</Text>
            <Text style={HomeScreenStyle.summary}>Last Update : {item.published}</Text>
            
          </View>
        )}
      />
      <View style={HomeScreenStyle.accountData}>
        <TouchableOpacity onPress={()=>navigation.navigate('UserProfile')}>
        <Text style={HomeScreenStyle.accountDataText}>USER PROFILE</Text>
        </TouchableOpacity>
      </View>
        </View>
    );
};


export default HomeScreen;
