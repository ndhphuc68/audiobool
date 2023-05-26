import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import OnboardingScreen from "./screens/Onboarding/OnboardingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenName } from "./navigation/ScreenName";
import LoginScreen from "./screens/Login/LoginScreen";
import { NativeBaseProvider } from "native-base";
import RegisterScreen from "./screens/Register/RegisterScreen";
import { AlertNotificationRoot } from "react-native-alert-notification";
import store from "./redux/store";
import { Provider } from "react-redux";
import WelcomeScreen from "./screens/Welcome/WelcomeScreen";
import PersonalizationScreen from "./screens/Personalization/PersonalizationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <AlertNotificationRoot>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={ScreenName.personalization}>
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
              <Stack.Screen
                name={ScreenName.register}
                options={{ headerShown: false }}
                component={RegisterScreen}
              />
              <Stack.Screen
                name={ScreenName.welcome}
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={ScreenName.personalization}
                component={PersonalizationScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </AlertNotificationRoot>
    </Provider>
  );
}
