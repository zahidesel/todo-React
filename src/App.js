import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
function App(){
  const[todoText, setTodoText] = useState("");
  const[todos, setTodos] = useState([]);
  const [isEdit, setIsEdit]= useState(false)
  const [willUpdateTodo, setWillUpdateTodo]= useState("")
  
  useEffect(()=> {
    const todosFromLocalStorage=localStorage.getItem("todos");
    if(todosFromLocalStorage===null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      setTodos(JSON.parse(todosFromLocalStorage));
    }
  }, [])

  const changeIsDone =(id)=>{
    const searhedTodo=todos.find(item => item.id=== id);
    const uptatedTodo={
      ...searhedTodo, 
      isDone: !searhedTodo.isDone,
    }
    const filteredTodo=todos.filter(item => item.id !==id)
    setTodos([uptatedTodo, ...filteredTodo])
    localStorage.setItem("todos", JSON.stringify([uptatedTodo, ...filteredTodo]))
  };
  const handleSubmit =(event) =>{
    event.preventDefault();
    if (todoText === ""){
      alert("Todo text can't be empty!");
      return;
    }

    const hasTodos=todos.find(item => item.text===todoText)
    if (hasTodos!== undefined){
      alert("You have the todo already")
      return; 
    }
    if(isEdit===true){
      const searchesTodo=todos.find((item)=>item.id===willUpdateTodo)
      const uptatedTodo={...searchesTodo, text:todoText}
    
    const filteredTodo=todos.filter((item)=>item.id!==willUpdateTodo);
    setTodos([uptatedTodo, ...filteredTodo])
    localStorage.setItem("todos",JSON.stringify([uptatedTodo, ...filteredTodo]))
    setTodoText("")
    setIsEdit(false)
    setWillUpdateTodo("")

    }else {
      const newTodo = {
        id: new Date().getTime(),
        isDone: false,
        text: todoText,
        date: new Date(),
      };
      setTodos([newTodo, ...todos]);
      localStorage.setItem("todos",JSON.stringify([newTodo, ...todos]))
      setTodoText("")
    }
    
  };

  const deteleTodo=(id)=>{
    const filteredTodo=todos.filter((item)=>item.id!==id)
    setTodos(filteredTodo);
    localStorage.setItem("todos", JSON.stringify(filteredTodo))

  }


  return(
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <TodoForm isEdit={isEdit} handleSubmit={handleSubmit} todoText={todoText} setTodoText={setTodoText}/>
      {
        todos.length <= 0 
        ? <p className="text-center my-5">You don't have any todos yet</p>
        : <React.Fragment>
          {
            todos.map(item => (
           <Todo item={item} deteleTodo={deteleTodo} setIsEdit={setIsEdit} setWillUpdateTodo={setWillUpdateTodo} setTodoText={setTodoText} changeIsDone={changeIsDone}/>
            ))
          }
        </React.Fragment>
      }
    </div>
  );
}
export default App;