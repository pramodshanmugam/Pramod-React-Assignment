import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Todo } from './model';
import './style.css';
type Props={
    index:number
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({index,todo,todos,setTodos}:Props) => {
  return (      
        
                    <form className='todos__single'>
                    <span className='todos__single--text>'>{todo.todo}</span>
                    </form>



      




    )
    
    
    }
    

export default SingleTodo