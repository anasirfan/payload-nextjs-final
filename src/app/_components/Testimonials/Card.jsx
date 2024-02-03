import React from "react";
import "./CardSlider.css";
import { Media } from "../Media";

const Card = ({ testimonial }) => {
  return (
      <div className="card">
        <div className="card__header">
          <Media resource={testimonial?.media} alt="card__image" className="card__image" width="600" />
        </div>
        <div className="card_body">
          <h4 className="card_body_h4">{testimonial?.title}</h4>
          <p className="card_body_para">{testimonial?.description}</p>
          <a href={testimonial?.link} className="card_body_btn">
            Read More
          </a>
        </div>
      </div>
  );
};

export default Card;
