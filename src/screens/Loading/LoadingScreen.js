import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Themes/Colors";
import { Image } from "native-base";
import { ImageCode } from "../../assets/images";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../navigation/ScreenName";

export default function LoadingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ScreenName.homepage);
    }, 2000);
  });

  return (
    <View
      style={{ flex: 1, backgroundColor: Colors.white, alignItems: "center" }}
    >
      <Image source={ImageCode.logo} resizeMode="contain" width="50%" alt="1" />
    </View>
  );
}

const styles = StyleSheet.create({});
