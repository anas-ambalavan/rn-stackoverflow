import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import questions from "../data/questions.json";
import QuestionHeader from "../src/components/QuestionHeader";

const QuestionDetailsPage = () => {
  const { id } = useSearchParams();
  const question = questions.items.find((q) => q.question_id == id);

  if (!question) {
    return <Text>Question Not Found</Text>;
  }
  return (
    <View style={styles.container}>
      <QuestionHeader question={question} />
    </View>
  );
};

export default QuestionDetailsPage;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    backgroundColor:"white"
  },
});
