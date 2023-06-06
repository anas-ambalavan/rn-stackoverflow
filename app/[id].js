import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import questions from "../data/questions.json";
import answers from "../data/answers.json";
import QuestionHeader from "../src/components/QuestionHeader";
import AnswerListItem from "../src/components/AnswerListItem";
import { FlatList } from "react-native-gesture-handler";

const QuestionDetailsPage = () => {
  const { id } = useSearchParams();
  const question = questions.items.find((q) => q.question_id == id);

  if (!question) {
    return <Text>Question Not Found</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={answers.items}
        renderItem={({ item }) => <AnswerListItem answer={item} />}
        ListHeaderComponent={() => <QuestionHeader question={question} />}
      />
    </View>
  );
};

export default QuestionDetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
