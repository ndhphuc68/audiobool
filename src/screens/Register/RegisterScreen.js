import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { ImageCode } from "../../assets/images";
import {
  Input,
  Stack,
  Pressable,
  Icon,
  Button,
  FormControl,
  WarningOutlineIcon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../Themes/Colors";
import auth from "@react-native-firebase/auth";
import { validate } from "email-validator";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../navigation/ScreenName";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validateEmail, setValidateEmail] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleRegister = async () => {
    Keyboard.dismiss();
    setLoading(true);
    setDisabled(true);
    if (!validate(email)) {
      setValidateEmail(true);
      return;
    }
    if (password.trim() !== confirmPassword.trim()) {
      setValidatePassword(true);
      return;
    }
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        setDisabled(false);
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Success",
          textBody: "Đăng kí thành công!",
          button: "Close",
          onPressButton: () => {
            Dialog.hide();
            navigation.navigate(ScreenName.login);
          },
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
          setLoading(false);
          setDisabled(false);
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
          setLoading(false);
          setDisabled(false);
        }

        console.error(error);
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
          Register
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
          <Input
            variant="filled"
            focusOutlineColor="gray"
            size="lg"
            w={{
              base: "100%",
              md: "25%",
            }}
            value={password}
            onChangeText={setPassword}
            type={showPassword ? "text" : "password"}
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
          <FormControl isInvalid={validatePassword} w="100%">
            <Input
              variant="filled"
              focusOutlineColor="gray"
              size="lg"
              w={{
                base: "100%",
                md: "25%",
              }}
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              InputRightElement={
                <Pressable
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Icon
                    as={
                      <MaterialIcons
                        name={
                          showConfirmPassword ? "visibility" : "visibility-off"
                        }
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
              placeholder="Confirm Password"
            />
            {validatePassword ? (
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Mật khẩu không trùng khớps
              </FormControl.ErrorMessage>
            ) : null}
          </FormControl>
          <Text
            style={{
              letterSpacing: 1,
              color: Colors.primary50,
              fontWeight: "400",
              fontSize: 14,
            }}
          >
            By signing up, you agree to our{" "}
            <Text style={{ color: Colors.accent50 }}>Terms, Data Policy</Text>{" "}
            and
            <Text style={{ color: Colors.accent50 }}> Cookies Policy</Text>.
          </Text>
        </Stack>
        <Stack marginTop={5} space={4} marginBottom={20}>
          <Button
            size="lg"
            isLoading={loading}
            style={{ backgroundColor: Colors.primary50 }}
            onPress={() => handleRegister()}
          >
            <Text style={{ color: "white", fontWeight: "500", fontSize: 16 }}>
              Register
            </Text>
          </Button>
          <Button
            size="lg"
            disabled={disabled}
            variant="outline"
            style={{ borderColor: Colors.primary50 }}
            onPress={() => console.log("hello world")}
          >
            <Text
              style={{
                color: Colors.primary50,
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              Cancel
            </Text>
          </Button>
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
