import React from "react";
import './styling/PlanCard.css';


const PlanCard = ({ image, title, price, ingredients}) => {

  return (
    <div className="planCard">
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <div className="planCardFooter">
            <p>{price}</p>
          </div>
    </div>
  );
};

export default PlanCard;
