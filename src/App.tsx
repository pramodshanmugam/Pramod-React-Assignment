import React, { useState } from 'react';
import Navbar from './components/Navbar';

import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

const App: React.FC =() =>{

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setcompletedTodos] = useState<Todo[]>([])
  const handleAdd = (e :React.FormEvent) =>{ e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
      setTodo("");
    }

  };

  const onDragEnd=(result:DropResult) =>{
    console.log(result);
  }
  return(
    <>
     <Navbar />
     <DragDropContext onDragEnd={()=>{}}>
     <div className='App'>
      <span className='heading'>Tracker</span>
      <InputField  todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} 
      completedTodos={completedTodos} setcompletedTodos={setcompletedTodos}
      />
     </div>



     </DragDropContext>
     
     
     </>
     
  )
}

export default App;
