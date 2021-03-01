import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import PreviewCard from "./PreviewCard";
import { useSelector } from "react-redux";
import {
  getQuestions,
  getSortedQuestionsIDs,
} from "../redux/modules/questions";
import { getUsers } from "../redux/modules/users";
import { getAuthedUser } from "../redux/modules/authedUser";

export default function Dashboard() {
  const questions = useSelector(getQuestions);
  const sortedQuestionsIDs = useSelector(getSortedQuestionsIDs);
  const users = useSelector(getUsers);
  const authedUser = useSelector(getAuthedUser);

  const [viewAnsweredQuestions, updateViewAnsweredQuestions] = useState(false);

  const questionsAnsweredByAuthedUser = Object.keys(users[authedUser].answers);

  const answeredQuestionsList = sortedQuestionsIDs.filter((question) =>
    questionsAnsweredByAuthedUser.includes(question)
  );

  const questionsNotAnsweredList = sortedQuestionsIDs.filter(
    (question) => !answeredQuestionsList.includes(question)
  );

  const returnPreviewCards = (questionsArray) => {
    return (
      <ul className="list-group contact-list">
        {questionsArray.map((questionID) => {
          const questionAuthor = users[questions[questionID].author].name;
          const questionPreview = questions[questionID].optionOne.text;
          return (
            <PreviewCard
              key={questionID}
              questionAuthor={questionAuthor}
              questionPreview={questionPreview}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <div className="dashboard">
      <Container fluid="md">
        <Row>
          <Button
            className="w-50"
            variant="info"
            active={!viewAnsweredQuestions}
            onClick={() => updateViewAnsweredQuestions(false)}
          >
            Unanswered Questions
          </Button>
          <Button
            className="w-50"
            variant="info"
            active={viewAnsweredQuestions}
            onClick={() => updateViewAnsweredQuestions(true)}
          >
            Answered Questions
          </Button>
        </Row>
        {viewAnsweredQuestions
          ? returnPreviewCards(answeredQuestionsList)
          : returnPreviewCards(questionsNotAnsweredList)}
      </Container>
    </div>
  );
}
