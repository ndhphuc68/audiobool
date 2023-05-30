import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Themes/Colors";
import { FlatList } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function DetailCategoryScreen({ route }) {
  const { data } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <FlatList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({});
