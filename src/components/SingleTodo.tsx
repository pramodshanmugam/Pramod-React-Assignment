import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Todo } from './model';
import './style.css';
type Props={
    index:number;
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({index,todo,todos,setTodos}:Props) => {
  return (      
            <Draggable draggableId={todo.id.toString()} index ={index}>
                {

                    (provided) => (

                        <form className='todos__single'
                        // onSubmit={(e)=> handleEdit(e,todo.id)}
                        {...provided.draggableProps}
                         {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                    <span className='todos__single--text>'>{todo.todo}</span>
                    <span className='todos__single--text>'>{todo.todo}</span>
                    <span className='todos__single--text>'>{todo.todo}</span>
                    </form>

                    )
                }           


            </Draggable>
                   


      




    )
    
    
    }
    

export default SingleTodo