import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ImageCode } from "../../assets/images";
import { Colors } from "../../Themes/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../navigation/ScreenName";
import { Button, Stack, Input, NativeBaseProvider } from "native-base";

const { width, height } = Dimensions.get("window");

export default function PersonalizationScreen() {
  const navigation = useNavigation();

  const renderItemCategories = (item) => {
    return (
      <>
        <TouchableOpacity>
          <Text
            style={{ backgroundColor: "white", borderColor: Colors.primary50 }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={ImageCode.brackgrourdImage}
        resizeMode="contain"
        style={{ width: width, height: height / 2 }}
      />
      <View style={styles.slide}>
        <Text
          style={{ color: Colors.neutral80, fontWeight: "600", fontSize: 16 }}
        >
          Personalize Suggestion
        </Text>
        <Text
          style={{
            color: Colors.neutral80,
            fontWeight: "400",
            fontSize: 14,
            marginTop: 10,
          }}
        >
          Choose min. 3 topic you like, we will give you more often that relate
          to it.
        </Text>
        <Stack marginTop={10} space={5} w="100%">
          <Input
            placeholder="Search Categories"
            w="100%"
            focusOutlineColor="gray"
            variant="filled"
          />
          <FlatList
            data={[1, 2, 3, 4, 5, 62, 72, 82]}
            renderItem={({ item }) => renderItemCategories(item)}
            keyExtractor={(item) => item}
          />
        </Stack>
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
    paddingHorizontal: 30,
  },
});
