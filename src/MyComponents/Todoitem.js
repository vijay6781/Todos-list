import React from 'react'
import { Todos } from './Todos'

export const Todoitem = ({todo,onDelete}) => {
    return (
        <div>
          <h4>{Todos.title}</h4>
          <p>{Todos.desc}</p>
          <button type="button" class="btn btn-primary" onClick={()=>onDelete(todo)}>Primary</button>
<button type="button" class="btn btn-secondary" onClick={()=>onDelete(todo)}>Secondary</button>

        </div>
    )
}
