import Button from "react-bootstrap/Button";
import React from "react";
import { Container, Row } from "react-bootstrap";
import PreviewCard from "./PreviewCard";
import { useSelector } from "react-redux";
import { selectQuestions } from "../redux/modules/questions";
import { selectUsers } from "../redux/modules/users";

export default function Dashboard() {
  const questions = useSelector(selectQuestions);
  const users = useSelector(selectUsers);

  console.log({ users });
  console.log({ questions });

  return (
    <div className="dashboard">
      <Container fluid="md">
        <Row>
          <Button className="w-50" variant="info" active={true}>
            Unanswered Questions
          </Button>
          <Button className="w-50" variant="info" active={false}>
            Answered Questions
          </Button>
        </Row>
        <ul className="list-group contact-list">
          {Object.keys(questions).map((questionID) => {
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
      </Container>
    </div>
  );
}
