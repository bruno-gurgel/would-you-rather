import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function PreviewCard(props) {
  return (
    <li className="user-card">
      <h5 className="card-header text-left ">{props.questionAuthor} asks:</h5>
      <div className="d-flex">
        <div
          className="contact-avatar avatar-preview"
          style={{
            backgroundImage: `url(${props.avatar})`,
          }}
        />
        <div className="contact-details">
          <h6 className="text-left pt-3">Would you rather:</h6>
          <p className="font-italic">...{props.questionPreview}...</p>
          <Link to={`/questions/${props.id}`}>
            <Button className="w-50 button" variant="success">
              View Pool
            </Button>
          </Link>
        </div>
      </div>
    </li>
  );
}

PreviewCard.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  questionAuthor: PropTypes.string.isRequired,
  questionPreview: PropTypes.string.isRequired,
};
