import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAuthedUser } from "../redux/modules/authedUser";
import { handleNewAnswer } from "../redux/modules/shared";
import { fetchAllData } from "../redux/modules/shared";

export default function PollVote(props) {
  const dispatch = useDispatch();
  const authedUser = useSelector(getAuthedUser);

  const [selectedAnswer, updateSelectedAnswer] = useState(null);

  const { authorName, authorAvatar, optionOne, optionTwo, questionID } = props;

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(
      handleNewAnswer({ authedUser, qid: questionID, answer: selectedAnswer })
    ).then(() => dispatch(fetchAllData()));
  };
  return (
    <li className=" user-card w-50 mx-auto border">
      <h5 className="card-header text-left ">{authorName} asks:</h5>
      <div className="d-flex">
        <div
          className="contact-avatar avatar-preview"
          style={{
            backgroundImage: `url(/${authorAvatar})`,
          }}
        />
        <div className="contact-details">
          <h6 className="text-left pt-3">Would you rather:</h6>
          <Form
            onSubmit={onSubmit}
            onChange={(event) => updateSelectedAnswer(event.target.value)}
          >
            <Form.Check
              type="radio"
              label={optionOne}
              name="pollVote"
              value="optionOne"
              className="text-left"
              required
            />
            <Form.Check
              type="radio"
              label={optionTwo}
              name="pollVote"
              value="optionTwo"
              className="text-left"
              required
            />
            <Button type="submit" className="w-100 button" variant="success">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <div className="p-2 border-top" id="icons-attribute">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </li>
  );
}
