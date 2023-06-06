import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useQuery } from "urql";

import QuestionListItem from "../src/components/QuestionListItem";
import { getQuestions } from "../src/graphql/queries";
import Centered from "../src/components/Centered";



export default function Page() {
  const [result] = useQuery({
    query: getQuestions,
    variables: { sort: "votes" },
  });

  if (result.fetching) {
    return (
      <Centered>
        <ActivityIndicator />
      </Centered>
    );
  }
  if (result.error) {
    return (
      <Centered>
        <Text>Error: {result.error.message}</Text>
      </Centered>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={result.data.questions.items}
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
