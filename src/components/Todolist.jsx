import React from "react";

const Todolist = (props) => {
  return (
    <>
      <div className="todo_style">
      <button onClick={()=>{
          props.onSelect(props.id)
      }}> <i className="fas fa-times"></i> </button>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default Todolist;
