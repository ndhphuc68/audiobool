import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import OnboardingScreen from "./src/screens/Onboarding/OnboardingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenName } from "./src/navigation/ScreenName";
import LoginScreen from "./src/screens/Login/LoginScreen";
import { NativeBaseProvider } from "native-base";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ScreenName.login}>
          <Stack.Screen
            name={ScreenName.onboarding}
            options={{ headerShown: false }}
            component={OnboardingScreen}
          />
          <Stack.Screen
            name={ScreenName.login}
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
