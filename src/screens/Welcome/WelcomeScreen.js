import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ImageCode } from "../../assets/images";
import { Colors } from "../../Themes/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../navigation/ScreenName";
import { Button, VStack, Center, NativeBaseProvider } from "native-base";

const { width, height } = Dimensions.get("window");

export default function WelComeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={ImageCode.brackgrourdImage}
        resizeMode="contain"
        style={{ width: width, height: height / 2 }}
      />
      <View style={styles.slide}>
        <Text
          style={{ color: Colors.accent50, fontWeight: "600", fontSize: 16 }}
        >
          Welcome !
        </Text>
        <Text
          style={{
            color: Colors.primary50,
            fontWeight: "200",
            fontSize: 60,
          }}
        >
          Find what you are looking for
        </Text>
        <Text
          style={{
            color: Colors.neutral80,
            fontWeight: "400",
            fontSize: 14,
          }}
        >
          By personalize your account, we can help you to find what you like.
        </Text>
        <VStack space={5} marginTop={10} marginBottom={32}>
          <Button
            height="12"
            backgroundColor={Colors.primary50}
            onPress={() => navigation.navigate(ScreenName.personalization)}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
              Personalize Your Account
            </Text>
          </Button>
          <Button
            height="12"
            backgroundColor="white"
            borderColor={Colors.primary50}
            variant="outline"
          >
            <Text
              style={{
                color: Colors.primary50,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Skip
            </Text>
          </Button>
        </VStack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    position: "relative",
  },
  slide: {
    position: "absolute",
    // height: height - height / 4,
    left: 0,
    bottom: 0,
    marginBottom: 0,
    paddingHorizontal: 40,
  },
});
