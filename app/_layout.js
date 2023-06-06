import { Stack } from "expo-router";
import client from "../src/graphql/client";
import { Provider } from "urql";
import * as Font from "expo-font";
import { useEffect } from "react";

const loadFonts = async () => {
  await Font.loadAsync({
    Courier: require("../fonts/Courier.ttf"),
  });
};

const _layout = () => {
  
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Provider value={client}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "StackOverFlow" }} />
      </Stack>
    </Provider>
  );
};

export default _layout;
