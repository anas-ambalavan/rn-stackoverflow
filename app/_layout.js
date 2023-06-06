import { useEffect } from "react";
import { Image } from "react-native";
import { Link, Stack } from "expo-router";
import { Provider } from "urql";
import * as Font from "expo-font";
import { AntDesign } from "@expo/vector-icons";

import client from "../src/graphql/client";

const loadFonts = async () => {
  await Font.loadAsync({
    Courier: require("../assets/fonts/Courier.ttf"),
  });
};

const RootLayout = () => {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Provider value={client}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "StackOverflow",
            headerLeft: () => (
              <Image
                source={require("../assets/images/logo.png")}
                style={{ width: 25, height: 25 }}
              />
            ),
            headerRight: () => (
              <Link href="/search">
                <AntDesign name="search1" size={20} color="dimgray" />
              </Link>
            ),
          }}
        />
        <Stack.Screen name="[id]" options={{ title: "Question" }} />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
