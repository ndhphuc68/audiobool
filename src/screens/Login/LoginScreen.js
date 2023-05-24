import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
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
  IconButton,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Colors } from "../../Themes/Colors";
const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

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
          <Input
            variant="filled"
            focusOutlineColor="gray"
            size="lg"
            placeholder="Email"
            w="100%"
          />
          <Input
            variant="filled"
            focusOutlineColor="gray"
            size="lg"
            w={{
              base: "100%",
              md: "25%",
            }}
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
            style={{ backgroundColor: Colors.primary50 }}
            onPress={() => console.log("hello world")}
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
            <TouchableOpacity>
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
