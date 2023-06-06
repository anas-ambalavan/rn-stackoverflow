import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const Centered = (props) => {
  return (
    <SafeAreaView style={styles.centeredText}>{props.children}</SafeAreaView>
  );
};

export default Centered;

const styles = StyleSheet.create({
  centeredText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
