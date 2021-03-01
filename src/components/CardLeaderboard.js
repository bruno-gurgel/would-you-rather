import React from "react";

export default function CardLeaderboard(props) {
  return (
    <li className="contact-list-item d-flex w-50 mx-auto border">
      <div
        className="contact-avatar avatar-leaderboard"
        style={{
          backgroundImage: `url(${props.avatar})`,
        }}
      />
      <div className="contact-details">
        <h5 className="card-header">{props.user}</h5>
        <p className="text-left d-flex justify-content-between mt-3 font-weight-bold">
          Answered questions<span>{props.answeredQuestions}</span>
        </p>
        <p className="text-left d-flex justify-content-between border-top pt-2 font-weight-bold">
          Created questions<span>{props.createdQuestions}</span>
        </p>
      </div>
      <div className="ml-3 d-flex flex-column justify-content-between">
        <h6 className="card-header">Score</h6>
        <p className="number-circle">{props.score}</p>
      </div>
    </li>
  );
}
