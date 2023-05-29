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
import LoadingScreen from "./screens/Loading/LoadingScreen";
import HomePageScreen from "./screens/HomePage/HomePageScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const TabBar = () => {
    return (
      <Tab.Navigator
        initialRouteName={ScreenName.homepage}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name={ScreenName.homepage} component={HomePageScreen} />
      </Tab.Navigator>
    );
  };

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
              <Stack.Screen
                name={ScreenName.loading}
                component={LoadingScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="aaaa" component={TabBar} />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </AlertNotificationRoot>
    </Provider>
  );
}
