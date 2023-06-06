const { gql } = require("urql");

// to get All questions
export const getQuestions = gql`
  query GetQuestions($sort:QuestionSort! ) {
    questions(sort: $sort) {
      has_more
      quota_max
      quota_remaining
      items {
        answer_count
        body_markdown
        creation_date
        is_answered
        link
        question_id
        score
        tags
        title
        view_count
      }
    }
  }
`;


// to get question by Id
export const getQuestionQuery = gql`
  query GetQuestion($id: Int!) {
    question(questionId: $id) {
      has_more
      quota_max
      quota_remaining
      items {
        title
        answer_count
        body_markdown
        creation_date
        is_answered
        link
        question_id
        score
        tags
        view_count
        answers {
          body_markdown
          score
          answer_id
          creation_date
          is_accepted
          question_id
        }
      }
    }
  }
`;