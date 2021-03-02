import React from "react";
import { useSelector } from "react-redux";
import { getAuthedUser } from "../redux/modules/authedUser";
import { getQuestions } from "../redux/modules/questions";
import { getUsers } from "../redux/modules/users";
import PollResults from "./PollResults";
import PollVote from "./PollVote";

export default function Poll(props) {
  const users = useSelector(getUsers);
  const questions = useSelector(getQuestions);
  const authedUser = useSelector(getAuthedUser);

  const questionID = props.match.params.id;
  const authorID = questions[questionID].author;
  const authorName = users[questions[questionID].author].name;
  const authorAvatar = users[authorID].avatarURL;
  const optionOne = questions[questionID].optionOne.text;
  const optionTwo = questions[questionID].optionTwo.text;

  const authedUserAnswers = Object.keys(users[authedUser].answers);
  const selectedAnswer = users[authedUser].answers[questionID];

  const optionOneVotes = questions[questionID].optionOne.votes.length;
  const optionTwoVotes = questions[questionID].optionTwo.votes.length;

  if (authedUserAnswers.includes(questionID)) {
    return (
      <PollResults
        authorName={authorName}
        authorAvatar={authorAvatar}
        optionOne={optionOne}
        optionTwo={optionTwo}
        optionOneVotes={optionOneVotes}
        optionTwoVotes={optionTwoVotes}
        selectedAnswer={selectedAnswer}
      />
    );
  } else {
    return (
      <PollVote
        authorName={authorName}
        authorAvatar={authorAvatar}
        optionOne={optionOne}
        optionTwo={optionTwo}
        questionID={questionID}
      />
    );
  }
}
