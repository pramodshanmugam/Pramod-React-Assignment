import React, { useState } from 'react';
import Navbar from './components/Navbar';

import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';


const App: React.FC =() =>{

  const [todo, setTodo] = useState<string>("");

  console.log(todo);
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e :React.FormEvent) =>{ e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
      setTodo("");
    }

  };
  return(
    <>
     <Navbar />
     <div className='App'>
      <span className='heading'>Tracker</span>
      <InputField  todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
     </div>
     
     </>
     
  )
}

export default App;
