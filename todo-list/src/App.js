import React, { useState } from "react";
import "./App.scss";
import AddNewList from "./components/AddNewList";
import Item from "./components/Item";
import styled from "styled-components";

const UL = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  text-align: left;
  li {
    margin: 0 0 10px;
    button {
      opacity: 0;
      transition: 0.2s all ease;
    }
    &:hover {
      button {
        opacity: 1;
      }
    }
  }
`;

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <div>
          <AddNewList onInsert={item => setList([...list, item])} />
          <UL>
            {list.map((item, index) => (
              <Item
                key={index}
                item={item}
                index={index}
                onDelete={itemIndex => {
                  setList(list.filter((_item, _index) => _index !== itemIndex));
                }}
                onItemUpdate={(index, newItem) => {
                  setList(
                    list.map((_item, _index) => {
                      if (_index === index) {
                        return newItem;
                      }
                      return _item;
                    })
                  );
                }}
              />
            ))}
          </UL>
        </div>
      </header>
    </div>
  );
}

export default App;
