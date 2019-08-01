import React, { useState } from "react";

const AddNewList = props => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button
        onClick={() => {
          props.onInsert(value);
          setValue("");
          console.log("we should add new item to our list", value);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddNewList;
