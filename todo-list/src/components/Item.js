import React, { useState, useEffect } from "react";

const Item = props => {
  const [showPanel, setShowPanel] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(props.item);

  useEffect(() => {
    console.log("Component has been mounted");
  }, []);

  useEffect(() => {
    console.log("Component will be called on rerender");
  });

  useEffect(() => {
    console.log('variable "updatedItem" has been update', updatedItem);
  }, [updatedItem]);

  return (
    <li>
      <span>{props.item}</span>{" "}
      <button onClick={() => props.onDelete(props.index)}>Delete</button>
      <button onClick={() => setShowPanel(!showPanel)}>Edit</button>
      {showPanel && (
        <div>
          <input
            value={updatedItem}
            onChange={event => setUpdatedItem(event.target.value)}
            type="text"
          />
          <button
            onClick={() => {
              setShowPanel(false);
              props.onItemUpdate(props.index, updatedItem);
            }}
          >
            Update
          </button>
        </div>
      )}
    </li>
  );
};
export default Item;
