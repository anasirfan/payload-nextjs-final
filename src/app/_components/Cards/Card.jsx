import React from "react";
import "./CardSlider.css";
import pic from "../../assets/b1.png";

const Card = () => {
  return (
    <div>
      <div class="card">
        <div class="card__header">
          <img src={pic} alt="card__image" class="card__image" width="600" />
        </div>
        <div class="card_body">
          <h4 class="card_body_h4">Title Goes Here</h4>
          <p class="card_body_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
            atque quidem!
          </p>
          <h5 class="card_body_btn">Read More</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
