import React from "react";

const Card = (props: any) => {
  return (
    <div className="card">
      <img src={props.imageURL} alt={props.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
