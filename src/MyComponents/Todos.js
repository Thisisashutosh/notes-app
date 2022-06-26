import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todo list</h3>
      {props.todos.length===0?"No Todos to display":props.todos.map((todo) => {
        return (
          <React.Fragment key={todo.sno}>
          <>
            <TodoItem todo={todo} onDelete={props.onDelete} />
          </>
          </React.Fragment>
        )
      })}
    </div>
  )
}
