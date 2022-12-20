import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from './model';
import SingleTodo from './SingleTodo';
import "./style.css";
interface Props{
    todos:Todo[];
    setTodos :React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setcompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({ todos, setTodos,completedTodos, setcompletedTodos}) => {
  return (
    <div className='container'>
      <Droppable droppableId='TodosList'>\
      {
        (provided)=>(
          <div className='todos' ref={provided.innerRef}
          {...provided.droppableProps}
          >
        <span className='todos__heading'>
          Active Tasks
        </span>
        {todos.map((todo) => (
              <SingleTodo
            todos={todos}
            todo={todo}
            key={todo.id}
            setTodos={setTodos} index={0}              />
            ))}
      </div>



        )
      }
      
      </Droppable>

      <Droppable droppableId='TodosRemove'>
        {
          (provided) => (
          <div className='todos remove' 
            ref={provided.innerRef}
          {...provided.droppableProps}
            >
      <span className='todos__heading'>
          Completed Tasks
        </span>
      {completedTodos.map((todo,index) => (
              <SingleTodo
              index={index}
                todos={completedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setcompletedTodos}
              />
            ))}


      </div>
 
          )
        }

      



      </Droppable>

      
    
      <div className='todosremove'>
      <span className='todos__heading'>
          Completed Tasks
        </span>
      {todos.map((todo) => (
              <SingleTodo
          todos={todos}
          todo={todo}
          key={todo.id}
          setTodos={setTodos} index={0}              />
            ))}


      </div>
    </div>

  )
}

export default  TodoList;