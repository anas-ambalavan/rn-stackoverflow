import { StyleSheet, Text, View, FlatList } from "react-native";
import questions from "../data/questions.json";
import QuestionListItem from "../src/components/QuestionListItem";

export default function Page() {

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
