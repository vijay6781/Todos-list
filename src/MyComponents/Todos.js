import React from 'react'
import {Todoitem} from "../MyComponents/Todoitem"
export const Todos = (props) => {
    return (
        <div className ="conatiner, text-center my-3">
            <h3>Todos List</h3>
            {props.todos.map((todo)=>{
                
                return(
                <>
                <h3>HI BRO</h3>
                <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                </>)
            })}
            
        </div>
    )
}
 