import { StyleSheet, Text, View, FlatList } from "react-native";
import questions from "../data/questions.json";
import QuestionListItem from "../src/components/QuestionListItem";
import { useEffect } from "react";
import * as Font from "expo-font";

const loadFonts=async()=>{
  await Font.loadAsync({
    Courier: require("../fonts/Courier.ttf"),
  })
}

export default function Page() {

  useEffect(()=>{
    loadFonts();
  },[])
   
  return (
    <View style={styles.container}>
      <FlatList
        data={questions.items}
        renderItem={({ item }) => <QuestionListItem question={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
