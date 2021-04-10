import React, { useState } from "react";
import Todolist from "./components/Todolist";

const App = () => {
  const [showInput, setShowInput] = useState("");
  const [grabInput,setGrabInput] = useState([]);
  const userInput = (event) => {
    setShowInput(event.target.value);
  };

  const addItem =()=>{
    setGrabInput((totalValue)=>{
       return [...totalValue,showInput];
    })
    setShowInput("");
  };

  const deleteItem=(id)=>{
    setGrabInput((totalValue)=>{
      return totalValue.filter((lstArr,index)=>{
           return index!==id;
      })
    })
  };
  return (
    <>
      <div className="wrapper">
        <div className="showcase">
          <h1>To Do List</h1>
          <div className="introduction">
            <input type="text" placeholder="Add Items" onChange={userInput} value={showInput} />
            <button onClick={addItem}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <ul>
            
            {grabInput.map((initialValue,index)=>{
              return <Todolist 
              key={index}
              id={index}
              text={initialValue}
              onSelect={deleteItem}
              />
            })}

          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
