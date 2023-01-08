import React from "react";

const Todo =(props)=>{
const {item, deteleTodo, changeIsDone, setIsEdit, setTodoText, setWillUpdateTodo}=props;
    return(
        <div className={`alert alert-${props.item.isDone === true ? "success" : "secondary"} d-flex justify-content-between alignh-items-center`}>
        <p>{props.item.text}</p>
        <div>
          <button className="btn btn-sm btn-danger" onClick={()=>deteleTodo(props.item.id)}>Delete</button>
          <button className="btn btn-sm btn-dark mx-1" onClick={()=>{ setIsEdit(true); setWillUpdateTodo(props.item.id); setTodoText(props.item.text)}}>Edit</button>
          <button onClick={()=> changeIsDone(item.id)} className="btn btn-sm btn-success">{props.item.isDone==false ? "Done" : "Undone"}</button>
        </div>
      </div>
    )
}

export default Todo;