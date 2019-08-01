import React from "react";
import "./App.css";
import Input from "./components/Input";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <div>
          <Input />
        </div>
      </header>
    </div>
  );
}

export default App;
