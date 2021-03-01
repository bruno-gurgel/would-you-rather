import React from "react";
import { Button } from "react-bootstrap";

export default function PreviewCard(props) {
  return (
    <li className="contact-list-item">
      <div
        className="contact-avatar avatar-preview"
        style={{
          backgroundImage: `url(${props.avatar})`,
        }}
      />
      <div className="contact-details">
        <h5 className="card-header text-left ">{props.questionAuthor} asks:</h5>
        <h6 className="text-left pt-3">Would you rather:</h6>
        <p className="font-italic">...{props.questionPreview}...</p>
        <Button className="w-50 button" variant="success">
          View Poll
        </Button>
      </div>
    </li>
  );
}
