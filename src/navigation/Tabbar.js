import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenName } from "./ScreenName";
import HomePageScreen from "../screens/HomePage/HomePageScreen";
import LibraryScreen from "../screens/Library/LibraryScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import { Foundation, Ionicons, FontAwesome } from "@expo/vector-icons";
import { Colors } from "../Themes/Colors";

const Tab = createBottomTabNavigator();

export default function Tabbar() {
  return (
    <Tab.Navigator
      initialRouteName={ScreenName.homepage}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { height: 70, paddingBottom: 10 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case ScreenName.homepage: {
              iconName = <Foundation name="home" color={color} size={30} />;
              break;
            }
            case ScreenName.library: {
              iconName = (
                <Ionicons name="md-library-sharp" color={color} size={30} />
              );
              break;
            }
            case ScreenName.search: {
              iconName = <FontAwesome name="search" color={color} size={30} />;
              break;
            }
          }
          return iconName;
        },
        tabBarActiveTintColor: Colors.primary50,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name={ScreenName.homepage}
        options={{ title: "Home" }}
        component={HomePageScreen}
      />
      <Tab.Screen
        name={ScreenName.search}
        options={{ title: "Search" }}
        component={SearchScreen}
      />
      <Tab.Screen
        name={ScreenName.library}
        options={{ title: "Library" }}
        component={LibraryScreen}
      />
    </Tab.Navigator>
  );
}
