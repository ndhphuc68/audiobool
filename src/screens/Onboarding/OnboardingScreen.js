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
import Swiper from "react-native-swiper";
import { Colors } from "../../Themes/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../navigation/ScreenName";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const swiper = useRef(null);
  const [indexSlide, setIndexSlide] = useState(0);

  const hanldeSroll = () => {
    swiper.current.scrollBy(1, true);
    setIndexSlide(indexSlide + 1);
  };

  const handleChangeIndex = (index) => {
    setIndexSlide(index);
  };

  return (
    <View style={styles.container}>
      <Image
        source={ImageCode.brackgrourdImage}
        resizeMode="contain"
        style={{ width: width, height: height / 2 }}
      />
      <View style={styles.slide}>
        <Swiper
          ref={swiper}
          loop={true}
          onIndexChanged={(index) => handleChangeIndex(index)}
          activeDotStyle={{ backgroundColor: Colors.accent50 }}
          dotStyle={{ backgroundColor: Colors.primary50 }}
        >
          <View style={styles.itemSlide}>
            <Image
              style={{ width: width - 100, height: 400 }}
              source={ImageCode.people}
              resizeMode="contain"
            />
            <Text
              style={{
                color: Colors.neutral80,
                fontWeight: "bold",
                fontSize: 24,
              }}
            >
              Tittle One
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: 5,
                fontSize: 16,
                color: Colors.neutral80,
              }}
            >
              Lorem ipsum dolor sit amet la maryame dor sut colondeum.
            </Text>
          </View>
          <View style={styles.itemSlide}>
            <Image
              style={{ width: width - 100, height: 400 }}
              source={ImageCode.knowledge}
              resizeMode="contain"
            />
            <Text
              style={{
                color: Colors.neutral80,
                fontWeight: "bold",
                fontSize: 24,
              }}
            >
              Tittle One
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: 5,
                fontSize: 16,
                color: Colors.neutral80,
              }}
            >
              Lorem ipsum dolor sit amet la maryame dor sut colondeum.
            </Text>
          </View>
          <View style={styles.itemSlide}>
            <Image
              style={{ width: width - 100, height: 400 }}
              source={ImageCode.conmunity}
              resizeMode="contain"
            />
            <Text
              style={{
                color: Colors.neutral80,
                fontWeight: "bold",
                fontSize: 24,
              }}
            >
              Tittle One
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: 5,
                fontSize: 16,
                color: Colors.neutral80,
              }}
            >
              Lorem ipsum dolor sit amet la maryame dor sut colondeum.
            </Text>
          </View>
        </Swiper>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {indexSlide === 2 ? (
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.login)}
              style={{
                height: 56,
                backgroundColor: Colors.primary50,
                width: width - 100,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Lets Get Started
              </Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate(ScreenName.login)}
                style={{
                  height: 56,
                  width: 140,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: Colors.primary50,
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Skip
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => hanldeSroll()}
                style={{
                  height: 56,
                  backgroundColor: Colors.primary50,
                  width: 140,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
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
    height: height - height / 4,
    left: 0,
    bottom: 0,
    marginBottom: 50,
  },
  itemSlide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
