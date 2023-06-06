import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

import QuestionListItem from "../src/components/QuestionListItem";
import { getQuestions } from "../src/graphql/queries";
import { useQuery } from "urql";



export default function Page() {
  const [result] = useQuery({
    query: getQuestions,
    variables: { sort: "votes" },
  });

  if (result.fetching) {
    return <ActivityIndicator />;
  }
  if (result.error) {
    return <Text>Error: {result.error.message}</Text>;
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
