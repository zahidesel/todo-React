import React from "react";

const TodoForm =(props) =>{
    const {handleSubmit, todoText, setTodoText, isEdit}=props;
    return(
<form onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          <input type="text" value={todoText} onChange={(event)=> setTodoText(event.target.value)} className="form-control" placeholder="Type your todo" />
          <button className={`btn btn-${isEdit===true ? "dark":"primary"}`} type="submit" >{isEdit===true ? "Save":"Add"}</button>
        </div>
      </form>
    )
}

export default TodoForm;