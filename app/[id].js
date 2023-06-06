import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useSearchParams } from "expo-router";
import { useQuery } from "urql";

import QuestionHeader from "../src/components/QuestionHeader";
import AnswerListItem from "../src/components/AnswerListItem";
import { getQuestionQuery } from "../src/graphql/queries";

const QuestionDetailsPage = () => {
  const { id } = useSearchParams();

  const [result] = useQuery({
    query: getQuestionQuery,
    variables: { id: id },
  });


  if (result.fetching) {
    return <ActivityIndicator />;
  }
  if (result.error) {
    return <Text>Error: {result.error.message},id:{id}</Text>;
  }

  const question = result.data.question.items[0];

  if (!question) {
    return <Text>Question Not Found</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={question.answers}
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
