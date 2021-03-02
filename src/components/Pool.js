import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getQuestions } from "../redux/modules/questions";
import { getUsers } from "../redux/modules/users";

export default function Pool(props) {
  const users = useSelector(getUsers);
  const questions = useSelector(getQuestions);

  const questionID = props.match.params.id;
  const authorID = questions[questionID].author;
  const authorName = users[questions[questionID].author].name;
  const authorAvatar = users[authorID].avatarURL;
  const optionOne = questions[questionID].optionOne.text;
  const optionTwo = questions[questionID].optionTwo.text;

  const onSubmit = (event) => {
    event.preventDefault();
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
          <Form>
            <Form.Check
              type="radio"
              label={optionOne}
              name="pollVote"
              value={optionOne}
              className="text-left"
              required
            />
            <Form.Check
              type="radio"
              label={optionTwo}
              name="pollVote"
              value={optionTwo}
              className="text-left"
              required
            />
            <Button type="submit" className="w-100 button" variant="success">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </li>
  );
}
