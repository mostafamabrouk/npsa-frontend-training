import React, { useState } from "react";
import "./App.css";
import AddNewList from "./components/AddNewList";
function App() {
  const [list, setList] = useState([]);
  console.log(list);
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <div>
          <AddNewList onInsert={item => setList([...list, item])} />
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
