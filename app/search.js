import React, { useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "expo-router";
import { useQuery } from "urql";

import { searchQuery } from "../src/graphql/queries";
import QuestionListItem from "../src/components/QuestionListItem";
import Centered from "../src/components/Centered";

const search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [result, fetch] = useQuery({
    query: searchQuery,
    variables: { term: searchTerm },
    pause: true,
  });

  const navigation = useNavigation();

  const search = () => {
    if (!searchTerm) return;
    fetch();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event) => setSearchTerm(event.nativeEvent.text),
        // onBlur: search,
      },
    });
    let timer;
    if (searchTerm) {
      timer = setTimeout(() => {
        search();
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [navigation, searchTerm, setSearchTerm]);

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

  if (!result.data?.search) {
    return (
      <Centered>
        <Text>Search for a question</Text>
      </Centered>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={result.data.search.items}
        renderItem={({ item }) => <QuestionListItem question={item} />}
      />
    </SafeAreaView>
  );
};

export default search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
