import React from "react";

const Item = props => {
  return (
    <li>
      {props.item}{" "}
      <button onClick={() => props.onDelete(props.index)}>Delete</button>
    </li>
  );
};
export default Item;
