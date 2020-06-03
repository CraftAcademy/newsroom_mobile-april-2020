import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  CinzelDecorative_900Black,
} from "@expo-google-fonts/cinzel-decorative";
import { EBGaramond_400Regular } from "@expo-google-fonts/eb-garamond";

const Header = () => {
  let [fontsLoaded] = useFonts({
    CinzelDecorative_900Black,
    EBGaramond_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.background}>
        <Text style={styles.header}>DNS </Text>
        <Text style={styles.sub}> Daily News Sense</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontSize: 25,
    fontFamily: "CinzelDecorative_900Black",
    padding: 10,
    paddingTop: 50
  },
  background: {
    flexDirection: "row",
    backgroundColor: "#409d9b",
    justifyContent: "center",
    alignItems: "center",
  },
  sub: {
    color: "white",
    fontSize: 25,
    fontFamily: "EBGaramond_400Regular",
    padding: 10,
    paddingTop: 50
  },
});

export default Header;
