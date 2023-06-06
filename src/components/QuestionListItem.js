import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { decode } from "html-entities";

const QuestionListItem = ({ question }) => {
  return (
    <Link href={`/${question.question_id}`}>
      <View style={styles.container}>
        <Text style={styles.stats}>
          {question.score} votes •{" "}
          {question.is_answered && (
            <Entypo name="check" size={12} color="limegreen" />
          )}
          {question.answer_count} answers • {question.view_count} views
        </Text>
        <Text style={styles.title}>{decode(question.title)}</Text>
        <Text style={styles.body} numberOfLines={2}>
          {decode(question.body_markdown)}
        </Text>
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
      </View>
    </Link>
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
    color: "#0063bf",
    marginVertical: 5,
  },
  body: {
    fontSize: 11,
    color: "dimgrey",
    lineHeight: 15,
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
});

export default QuestionListItem;
