import React from "react";

const Card = (props) => {
  return (
    <div className="col-sm">
      <div className="containerCard">
        <div
          className="card"
        >
          <img className="card-img-top" src={props.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-primary">
              Find Out More!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;