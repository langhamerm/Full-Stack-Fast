import React from "react";
import Cardbtn from "../Cardbtn/Cardbtn";
// import "./card.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <Cardbtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <Cardbtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pick"
      />
    </div>
  );
}

export default Card;
