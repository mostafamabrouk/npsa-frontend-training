import React, { useState } from "react";

const Input = props => {
  const [value, setValue] = useState("test");
  console.log("input", value);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button
        onClick={() => {
          console.log("we should add new item to our list", value);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
