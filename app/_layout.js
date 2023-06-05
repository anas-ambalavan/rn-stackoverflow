import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "StackOverFlow" }} />
    </Stack>
  );
};

export default _layout;
