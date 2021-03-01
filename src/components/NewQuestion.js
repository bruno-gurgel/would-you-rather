import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getAuthedUser } from "../redux/modules/authedUser";
import { handleNewQuestion } from "../redux/modules/questions";
import { fetchAllData } from "../redux/modules/shared";

export default function NewQuestion() {
  const [optionOneText, updateOptionOneText] = useState("");
  const [optionTwoText, updateOptionTwoText] = useState("");
  const [toHome, updateToHome] = useState(false);

  const dispatch = useDispatch();
  const author = useSelector(getAuthedUser);

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(
      handleNewQuestion({ optionOneText, optionTwoText, author })
    ).then(() => dispatch(fetchAllData()));
    updateOptionOneText("");
    updateOptionTwoText("");
    updateToHome(true);
  };

  if (toHome === true) {
    return <Redirect to="/home" />;
  }

  return (
    <Container className="card">
      <h2 className="border-bottom p-3">Create new Question</h2>
      <h3 className="text-muted text-left">Complete the question:</h3>
      <h4>Would you rather...</h4>
      <Form className="mt-4" onSubmit={onSubmit}>
        <Form.Group controlId="formGroupQuestionOne">
          <Form.Control
            type="text"
            placeholder="Question one"
            className="w-50 mx-auto text-center"
            onChange={(event) => updateOptionOneText(event.target.value)}
          />
        </Form.Group>
        <p className="font-weight-bold">OR</p>
        <Form.Group controlId="formGroupQuestionTwo">
          <Form.Control
            type="text"
            placeholder="Question two"
            className="w-50 mx-auto text-center"
            onChange={(event) => updateOptionTwoText(event.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="m-3" variant="success">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
