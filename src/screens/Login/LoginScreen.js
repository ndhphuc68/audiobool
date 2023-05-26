import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { ImageCode } from "../../assets/images";
import {
  Input,
  Stack,
  Pressable,
  Icon,
  HStack,
  Checkbox,
  Button,
  FormControl,
  WarningOutlineIcon,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Colors } from "../../Themes/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../navigation/ScreenName";
import auth from "@react-native-firebase/auth";
import { validate } from "email-validator";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../../redux/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateEmail, setValidateEmail] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    Keyboard.dismiss();
    setValidateEmail(false);
    setValidatePassword(false);
    setLoading(true);
    if (!validate(email)) {
      setValidateEmail(true);
      return;
    }
    if (password === "") {
      setValidatePassword(true);
      return;
    }
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setLoading(false);
        AsyncStorage.setItem("uid", response.user.uid);
        dispatch(user.actions.getInfoUser(response.user));
        navigation.navigate(ScreenName.welcome);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={ImageCode.logo}
        resizeMode="contain"
      />
      <View>
        <Text
          style={{
            color: Colors.neutral80,
            fontWeight: "600",
            fontSize: 16,
            marginVertical: 20,
          }}
        >
          Login to Your Account
        </Text>
        <Stack space={4} w="100%">
          <FormControl isInvalid={validateEmail} w="100%">
            <Input
              variant="filled"
              focusOutlineColor="gray"
              size="lg"
              placeholder="Email"
              w="100%"
              value={email}
              onChangeText={setEmail}
            />
            {validateEmail ? (
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Email sai định dạng
              </FormControl.ErrorMessage>
            ) : null}
          </FormControl>
          <FormControl isInvalid={validatePassword} w="100%">
            <Input
              variant="filled"
              focusOutlineColor="gray"
              size="lg"
              w={{
                base: "100%",
                md: "25%",
              }}
              type={showPassword ? "text" : "password"}
              value={password}
              onChangeText={setPassword}
              InputRightElement={
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={showPassword ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
              placeholder="Password"
            />
            {validatePassword ? (
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Mật khẩu không được bỏ trống
              </FormControl.ErrorMessage>
            ) : null}
          </FormControl>
        </Stack>
        <HStack marginTop={5} space={6}>
          <Checkbox
            shadow={2}
            colorScheme="indigo"
            value="test"
            defaultIsChecked
          >
            <Text
              style={{
                color: Colors.neutral80,
                fontWeight: "400",
                fontSize: 14,
              }}
            >
              Remenber me
            </Text>
          </Checkbox>
        </HStack>
        <Stack marginTop={5}>
          <Button
            size="lg"
            isLoading={loading}
            style={{ backgroundColor: Colors.primary50 }}
            onPress={() => handleLogin()}
          >
            Login
          </Button>
        </Stack>
        <Text
          style={{
            textAlign: "right",
            marginTop: 20,
            color: Colors.accent50,
            fontWeight: "600",
            fontSize: 14,
          }}
        >
          Forget Password ?
        </Text>
        <Stack marginTop={30} w="100%">
          <Text
            style={{
              textAlign: "center",
              color: Colors.neutral80,
              fontWeight: "400",
              fontSize: 14,
            }}
          >
            Or login with
          </Text>
          <HStack
            marginTop={5}
            w="100%"
            space={3}
            justifyContent="space-evenly"
          >
            <Button width="24" colorScheme="indigo" variant="outline">
              <Image
                source={ImageCode.facebook}
                style={{ width: 30, height: 30 }}
                resizeMode="cover"
              />
            </Button>
            <Button width="24" colorScheme="indigo" variant="outline">
              <Image
                source={ImageCode.google}
                style={{ width: 30, height: 30 }}
                resizeMode="cover"
              />
            </Button>
            <Button width="24" colorScheme="indigo" variant="outline">
              <Image
                source={ImageCode.twitter}
                style={{ width: 30, height: 30 }}
                resizeMode="cover"
              />
            </Button>
          </HStack>
          <HStack marginTop={5} marginBottom={10} justifyContent="center">
            <Text style={{ color: Colors.neutral80 }}>
              Don’t have an accoun’t ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.register)}
            >
              <Text style={{ color: Colors.accent50 }}>Register</Text>
            </TouchableOpacity>
          </HStack>
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
    paddingHorizontal: 36,
    alignItems: "center",
    paddingTop: 70,
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
