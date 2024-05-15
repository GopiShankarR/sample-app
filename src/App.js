import './App.css';
import { useState } from "react";
import { Task } from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: inputValue,
      completed: false
    }
    setTodoList([...todoList, task]);
  };

  const deleteTask = (taskId) => {
    setTodoList(todoList.filter((task) => task.id !== taskId));
  };

  const changeCompleted = (taskId) => {
    setTodoList(
      todoList.map((task) => {
        if(task.id === taskId) {
          return {...task, completed: true}
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={(event) => setInputValue(event.target.value)}></input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} changeCompleted={changeCompleted}/>
        })}
      </div>
    </div>
  );
}

export default App;
