import React, { useState } from "react";
import "./App.css";
import AddNewList from "./components/AddNewList";
import Item from "./components/Item";
function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <div>
          <AddNewList onInsert={item => setList([...list, item])} />
          <ul>
            {list.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
