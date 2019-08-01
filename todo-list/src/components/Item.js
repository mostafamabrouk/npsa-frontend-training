import React from "react";

const Item = props => {
  return (
    <li>
      {props.item} <button>Delete</button>
    </li>
  );
};
export default Item;
