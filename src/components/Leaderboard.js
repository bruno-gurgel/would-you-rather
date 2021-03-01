import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUsers } from "../redux/modules/users";
import CardLeaderboard from "./CardLeaderboard";

export default function Leaderboard() {
  const users = useSelector(getUsers);

  const sortedUsers = () => {
    const usersWithScores = Object.values(users).map((user) => {
      const answeredQuestions = Object.keys(user.answers).length;
      const createdQuestions = user.questions.length;
      const score = answeredQuestions + createdQuestions;
      return {
        ...user,
        score,
      };
    });
    return usersWithScores.sort((a, b) => b.score - a.score);
  };

  return (
    <Container fluid="md">
      {sortedUsers().map((user) => {
        const answeredQuestions = Object.keys(user.answers).length;
        const createdQuestions = user.questions.length;
        return (
          <CardLeaderboard
            key={user.id}
            avatar={user.avatarURL}
            user={user.name}
            answeredQuestions={answeredQuestions}
            createdQuestions={createdQuestions}
            score={answeredQuestions + createdQuestions}
          />
        );
      })}
    </Container>
  );
}
