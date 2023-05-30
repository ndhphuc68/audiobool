import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ImageCode } from "../../assets/images";
import { Colors } from "../../Themes/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../navigation/ScreenName";
import {
  Button,
  Stack,
  Input,
  NativeBaseProvider,
  ScrollView,
  Image,
} from "native-base";
import database from "@react-native-firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { category } from "../../redux/Category";

const { width, height } = Dimensions.get("window");

export default function PersonalizationScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const uid = "S5LGavQfbPeMMNp3e3fnbhDpk0u1";

  const [listCategorySelect, setListCategorySelect] = useState([]);
  const [loading, setLoading] = useState(false);
  const listCategory = useSelector((state) => state.category.category);
  const [dataCategory, setDataCategory] = useState(listCategory);
  const [keyword, setKeyword] = useState("");
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    database()
      .ref(`/category`)
      .on("value", (snapshot) => {
        setDataCategory(snapshot.val());
        dispatch(category.actions.setCategory(snapshot.val()));
      });
  }, []);

  const handleSaveCatogory = async () => {
    setLoading(true);
    await database()
      .ref(`/users/${uid}`)
      .set({ category: listCategorySelect })
      .then(() => {
        setLoading(false);
        setFinish(true);
      });
  };

  const handleSelectCatgory = (id) => {
    if (listCategorySelect.length > 0) {
      const checkId = listCategorySelect.find((e) => e === id);
      if (checkId) {
        setListCategorySelect(listCategorySelect.filter((e) => e !== id));
      } else {
        setListCategorySelect(listCategorySelect.concat([id]));
      }
    } else {
      setListCategorySelect([id]);
    }
  };

  const handleSearchCategory = (text) => {
    setKeyword(text);
    let checkSearch = [];
    if (text !== "") {
      listCategory.forEach((e) => {
        if (e.name.toLowerCase().search(text) !== -1) {
          checkSearch.push(e);
        }
      });
    } else {
      checkSearch = listCategory;
    }
    setDataCategory(checkSearch);
  };

  const renderItemCategories = (item) => {
    const isSelect = listCategorySelect.find((e) => e === item.id);
    let styleCatogory = {};
    if (isSelect) {
      styleCatogory = {
        backgroundColor: Colors.primary50,
        borderColor: Colors.primary50,
        borderWidth: 1,
      };
    } else {
      styleCatogory = {
        borderColor: Colors.primary50,
        borderWidth: 1,
      };
    }

    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => handleSelectCatgory(item.id)}
      >
        <View
          style={{ alignItems: "baseline", marginRight: 10, marginBottom: 10 }}
        >
          <View
            style={[
              {
                paddingHorizontal: 15,
                paddingVertical: 7,
                borderRadius: 24,
              },
              styleCatogory,
            ]}
          >
            <Text
              style={
                isSelect
                  ? { color: "white", fontSize: 14 }
                  : { color: Colors.primary50, fontSize: 14 }
              }
            >
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Image
          style={{ width: "100%", height: height / 3 }}
          source={ImageCode.brackgrourdImage}
          contentFit="fill"
          alt="1r"
        />
      </View>
      {finish ? (
        <View style={styles.slide}>
          <Image
            style={{ width: "100%", height: 300 }}
            source={ImageCode.huray}
            resizeMode="center"
            alt="1r"
          />
          <Stack marginTop={5} space={5} alignItems="center" w="100%">
            <Text
              style={{
                textAlign: "center",
                color: Colors.neutral80,
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              You are ready to go!
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: Colors.neutral80,
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              Congratulation, any interesting topics will be shortly in your
              hands.
            </Text>
            <Button
              onPress={() =>
                navigation.navigate(ScreenName.bottomtab, {
                  screen: ScreenName.homepage,
                })
              }
              height={16}
              w="100%"
              backgroundColor={Colors.primary50}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Finish
              </Text>
            </Button>
          </Stack>
        </View>
      ) : (
        <View style={styles.slide}>
          <Text
            style={{
              color: Colors.neutral80,
              fontWeight: "600",
              fontSize: 16,
            }}
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
            Choose <Text style={{ fontWeight: "700" }}>min. 3 topic </Text>
            you like, we will give you more often that relate to it.
          </Text>
          <Stack marginTop={10} space={5} w="100%">
            <Input
              placeholder="Search Categories"
              w="100%"
              focusOutlineColor="gray"
              value={keyword}
              onChangeText={(text) => handleSearchCategory(text)}
              variant="filled"
            />
            <ScrollView height={150}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {dataCategory &&
                  dataCategory.map((item) => {
                    return renderItemCategories(item);
                  })}
              </View>
            </ScrollView>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: Colors.neutral80,
              }}
            >
              {listCategorySelect.length > 0 &&
                `${listCategorySelect.length} topics Selected`}
            </Text>
            <Stack space={5}>
              <Button
                onPress={() => handleSaveCatogory()}
                backgroundColor={Colors.primary50}
                height="16"
                isLoading={loading}
                isDisabled={listCategorySelect.length === 0 ? true : false}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "500", color: "white" }}
                >
                  Submit
                </Text>
              </Button>
              <Button
                height="16"
                variant="outline"
                borderColor={Colors.primary50}
                onPress={() => setFinish(true)}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: Colors.primary50,
                  }}
                >
                  Skip
                </Text>
              </Button>
            </Stack>
          </Stack>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  slide: {
    paddingHorizontal: 30,
  },
});
