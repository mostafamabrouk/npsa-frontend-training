import React from "react";
import "./App.css";
import AddNewList from "./components/AddNewList";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <div>
          <AddNewList />
        </div>
      </header>
    </div>
  );
}

export default App;
