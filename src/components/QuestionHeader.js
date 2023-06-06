import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { decode } from "html-entities";

const QuestionHeader = ({ question }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{decode(question.title)}</Text>
      <Text style={styles.stats}>
        {question.score} votes •{" "}
        {question.is_answered && (
          <Entypo name="check" size={12} color="limegreen" />
        )}
        {question.answer_count} answers • {question.view_count} views
      </Text>
      <View style={styles.separator} />
      <Text style={styles.body}>{decode(question.body_markdown)}</Text>
      <View style={styles.tags}>
        {question.tags.map((tag) => (
          <Text key={tag} style={styles.tag}>
            {tag}
          </Text>
        ))}
        <Text style={styles.time}>
          asked {new Date(question.creation_date * 1000).toDateString()}
        </Text>
      </View>

      <Text style={{ fontSize: 16, marginVertical: 15 }}>
        {question.answer_count} Answers
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: "lightgray",
  },
  stats: {
    fontSize: 12,
  },
  title: {
    marginVertical: 5,
    fontSize: 20,
    lineHeight: 28,
    color: "#3b4045",
    fontWeight: "500",
  },
  body: {
    lineHeight: 18,
    color: "#232629",
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#e1ecf4",
    color: "#39739d",
    padding: 5,
    fontSize: 12,
    borderRadius: 3,
    overflow: "hidden",
  },
  time: {
    marginLeft: "auto",
    fontSize: 12,
    color: "#6a737c",
  },
  separator: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    marginVertical: 10,
  },
});
export default QuestionHeader;
