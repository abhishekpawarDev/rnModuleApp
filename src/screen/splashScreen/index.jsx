import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, {  } from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const SplashScreen = () => {
    const navigation = useNavigation();

    useFocusEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Auth");
        }, 3000);
    
        return () => clearTimeout(timer);
    });
    
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/splash.jpg")}
        style={styles.fullScreenImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take full screen space
    alignItems: "center",
    justifyContent: "center",
  },
  fullScreenImage: {
    width: width, // Device width
    height: height, // Device height
  },
});

export default SplashScreen;
