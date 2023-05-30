import { FlatList, Image, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "../../Themes/Colors";
import { HStack, ScrollView, Stack, VStack } from "native-base";
import { ImageCode } from "../../assets/images";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { category } from "../../redux/Category";
import { book } from "../../redux/Book";
import database from "@react-native-firebase/database";
import { AirbnbRating } from "react-native-ratings";
import { ScreenName } from "../../navigation/ScreenName";
import { useNavigation } from "@react-navigation/native";

export default function HomePageScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const listCategory = useSelector((state) => state.category.category);
  const listBook = useSelector((state) => state.book.listBook);

  useEffect(() => {
    // database()
    //   .ref(`/book`)
    //   .set([
    //     {
    //       id: 1,
    //       listens: 100,
    //       author: "Hoàng Phúc",
    //       name: "Nhật ký trong nhà",
    //       image:
    //         "https://firebasestorage.googleapis.com/v0/b/audio-book-a995a.appspot.com/o/imageBook%2Faudio1.png?alt=media&token=e0cf9d2f-3f2b-439d-9df8-4f3f5ad7378c",
    //     },
    //     {
    //       id: 2,
    //       listens: 100,
    //       author: "Hoàng Phúc",
    //       name: "Nhật ký trong nhà",
    //       image:
    //         "https://firebasestorage.googleapis.com/v0/b/audio-book-a995a.appspot.com/o/imageBook%2Faudio1.png?alt=media&token=e0cf9d2f-3f2b-439d-9df8-4f3f5ad7378c",
    //     },
    //     {
    //       id: 3,
    //       listens: 100,
    //       author: "Hoàng Phúc",
    //       name: "Nhật ký trong nhà",
    //       image:
    //         "https://firebasestorage.googleapis.com/v0/b/audio-book-a995a.appspot.com/o/imageBook%2Faudio1.png?alt=media&token=e0cf9d2f-3f2b-439d-9df8-4f3f5ad7378c",
    //     },
    //     {
    //       id: 4,
    //       listens: 100,
    //       author: "Hoàng Phúc",
    //       name: "Nhật ký trong nhà",
    //       image:
    //         "https://firebasestorage.googleapis.com/v0/b/audio-book-a995a.appspot.com/o/imageBook%2Faudio1.png?alt=media&token=e0cf9d2f-3f2b-439d-9df8-4f3f5ad7378c",
    //     },
    //     {
    //       id: 5,
    //       listens: 100,
    //       author: "Hoàng Phúc",
    //       name: "Nhật ký trong nhà",
    //       image:
    //         "https://firebasestorage.googleapis.com/v0/b/audio-book-a995a.appspot.com/o/imageBook%2Faudio1.png?alt=media&token=e0cf9d2f-3f2b-439d-9df8-4f3f5ad7378c",
    //     },
    //     {
    //       id: 6,
    //       listens: 100,
    //       author: "Hoàng Phúc",
    //       name: "Nhật ký trong nhà",
    //       image:
    //         "https://firebasestorage.googleapis.com/v0/b/audio-book-a995a.appspot.com/o/imageBook%2Faudio1.png?alt=media&token=e0cf9d2f-3f2b-439d-9df8-4f3f5ad7378c",
    //     },
    //     {
    //       id: 7,
    //       listens: 100,
    //       author: "Hoàng Phúc",
    //       name: "Nhật ký trong nhà",
    //       image:
    //         "https://firebasestorage.googleapis.com/v0/b/audio-book-a995a.appspot.com/o/imageBook%2Faudio1.png?alt=media&token=e0cf9d2f-3f2b-439d-9df8-4f3f5ad7378c",
    //     },
    //     {
    //       id: 8,
    //       listens: 100,
    //       author: "Hoàng Phúc",
    //       name: "Nhật ký trong nhà",
    //       image:
    //         "https://firebasestorage.googleapis.com/v0/b/audio-book-a995a.appspot.com/o/imageBook%2Faudio1.png?alt=media&token=e0cf9d2f-3f2b-439d-9df8-4f3f5ad7378c",
    //     },
    //     {
    //       id: 9,
    //       listens: 100,
    //       author: "Hoàng Phúc",
    //       name: "Nhật ký trong nhà",
    //       image:
    //         "https://firebasestorage.googleapis.com/v0/b/audio-book-a995a.appspot.com/o/imageBook%2Faudio1.png?alt=media&token=e0cf9d2f-3f2b-439d-9df8-4f3f5ad7378c",
    //     },
    //   ])
    //   .then(() => {});
    // storage()
    //   .ref("imageBook")
    //   .child("audio1.png")
    //   .getDownloadURL()
    //   .then((url) => {
    //     console.log(url);
    //   });
    database()
      .ref(`/category`)
      .on("value", (snapshot) => {
        dispatch(category.actions.setCategory(snapshot.val()));
      });
    database()
      .ref("/book")
      .on("value", (snapshot) => {
        dispatch(book.actions.setBook(snapshot.val()));
      });
  }, []);

  const renderTitleHeader = (title, data) => {
    return (
      <HStack justifyContent="space-between" paddingX={7}>
        <Text style={{ color: Colors.black, fontSize: 16, fontWeight: "500" }}>
          {title}
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreenName.detailcategory, {
              name: title,
              data: data,
            })
          }
        >
          <Text
            style={{ color: Colors.primary50, fontSize: 14, fontWeight: "500" }}
          >
            See more
          </Text>
        </TouchableOpacity>
      </HStack>
    );
  };

  const renderItemCategory = ({ item }) => {
    return (
      <TouchableOpacity key={item.id}>
        <View
          style={{ alignItems: "baseline", marginRight: 10, marginBottom: 10 }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: Colors.neutral5,
              borderRadius: 24,
            }}
          >
            <Text
              style={{
                color: Colors.neutral80,
                fontSize: 16,
                fontWeight: "400",
              }}
            >
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemBookRecommended = ({ item }, title) => {
    return (
      <TouchableOpacity key={item.id}>
        <Image
          style={{ width: 200, height: 300, marginRight: 15 }}
          resizeMode="contain"
          source={{ uri: item.image }}
        />
      </TouchableOpacity>
    );
  };

  const renderItemBookSeller = ({ item }) => {
    return (
      <Stack
        backgroundColor={Colors.neutral5}
        borderRadius={20}
        marginRight={15}
        padding={3}
      >
        <HStack>
          <Image
            style={{ width: 120, height: 100 }}
            source={{ uri: item.image }}
            resizeMode="contain"
          />
          <VStack marginLeft={1} justifyContent="space-between">
            <VStack space={1}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: Colors.neutral60,
                }}
              >
                {item.author}
              </Text>
            </VStack>
            <VStack>
              <AirbnbRating
                showRating={false}
                count={5}
                defaultRating={4}
                isDisabled={true}
                size={20}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: Colors.neutral60,
                }}
              >
                {item.listens} Listeners
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </Stack>
    );
  };

  const renderItemBookReleases = ({ item }) => {
    return (
      <VStack
        justifyContent="center"
        alignItems="center"
        marginRight={5}
        space={2}
      >
        <Image
          style={{ width: 160, height: 160 }}
          resizeMode="contain"
          source={{ uri: item.image }}
        />
        <Text
          style={{ fontSize: 16, fontWeight: "500", color: Colors.neutral80 }}
        >
          {item.name}
        </Text>
      </VStack>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        paddingX={5}
        marginY={6}
        w="100%"
      >
        <HStack alignItems="center">
          <Image
            source={ImageCode.logoSmall}
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
          />
          <Text
            style={{ color: Colors.primary50, fontSize: 24, fontWeight: "700" }}
          >
            Audi
            <Text
              style={{
                fontWeight: "400",
              }}
            >
              Books
            </Text>
            <Text style={{ color: Colors.accent50 }}>.</Text>
          </Text>
        </HStack>
        <Ionicons
          name="md-settings-outline"
          size={24}
          color={Colors.primary50}
        />
      </HStack>
      <ScrollView w="100%">
        <Stack space={5} w="100%">
          <HStack justifyContent="space-between" paddingX={7}>
            <Text
              style={{ color: Colors.black, fontSize: 16, fontWeight: "500" }}
            >
              Categories
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ScreenName.detailcategory, {
                  name: "Categories",
                  data: listCategory,
                })
              }
            >
              <Text
                style={{
                  color: Colors.primary50,
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                See more
              </Text>
            </TouchableOpacity>
          </HStack>
          <Stack paddingLeft={7}>
            <FlatList
              data={listCategory}
              horizontal={true}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={(item) => renderItemCategory(item)}
            />
          </Stack>
        </Stack>
        <Stack w="100%" marginTop={5} space={5}>
          <HStack justifyContent="space-between" paddingX={7}>
            <Text
              style={{ color: Colors.black, fontSize: 16, fontWeight: "500" }}
            >
              Recommended For You
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ScreenName.detailcategory, {
                  name: "Recommended For You",
                  data: listCategory,
                })
              }
            >
              <Text
                style={{
                  color: Colors.primary50,
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                See more
              </Text>
            </TouchableOpacity>
          </HStack>
          <Stack paddingLeft={7}>
            <FlatList
              data={listBook}
              horizontal={true}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={(item) =>
                renderItemBookRecommended(item, "Recommended For You")
              }
            />
          </Stack>
        </Stack>
        <Stack w="100%" marginTop={5} space={5}>
          <HStack justifyContent="space-between" paddingX={7}>
            <Text
              style={{ color: Colors.black, fontSize: 16, fontWeight: "500" }}
            >
              Best Seller
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ScreenName.detailcategory, {
                  name: "Best Seller",
                  data: listCategory,
                })
              }
            >
              <Text
                style={{
                  color: Colors.primary50,
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                See more
              </Text>
            </TouchableOpacity>
          </HStack>
          <Stack paddingLeft={7}>
            <FlatList
              data={listBook}
              horizontal={true}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={(item) => renderItemBookSeller(item)}
            />
          </Stack>
        </Stack>
        <Stack w="100%" marginTop={5} space={5}>
          <HStack justifyContent="space-between" paddingX={7}>
            <Text
              style={{ color: Colors.black, fontSize: 16, fontWeight: "500" }}
            >
              New Releases
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ScreenName.detailcategory, {
                  name: "New Releases",
                  data: listCategory,
                })
              }
            >
              <Text
                style={{
                  color: Colors.primary50,
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                See more
              </Text>
            </TouchableOpacity>
          </HStack>
          <Stack paddingLeft={7}>
            <FlatList
              data={listBook}
              horizontal={true}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={(item) => renderItemBookReleases(item)}
            />
          </Stack>
        </Stack>
        <Stack w="100%" marginTop={5} space={5} marginBottom={10}>
          <HStack justifyContent="space-between" paddingX={7}>
            <Text
              style={{ color: Colors.black, fontSize: 16, fontWeight: "500" }}
            >
              Trending Now
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ScreenName.detailcategory, {
                  name: "Trending Now",
                  data: listCategory,
                })
              }
            >
              <Text
                style={{
                  color: Colors.primary50,
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                See more
              </Text>
            </TouchableOpacity>
          </HStack>
          <Stack paddingLeft={7}>
            <FlatList
              data={listBook}
              horizontal={true}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={(item) => renderItemBookReleases(item)}
            />
          </Stack>
        </Stack>
      </ScrollView>
    </View>
  );
}
