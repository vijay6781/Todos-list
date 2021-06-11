import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, { useState } from 'react';


function App() {
  const onDelete = (todo) =>{
    console.log("I am ondelete", todo);
    setTodos(todos.filter((e)=>{
      return  e!==todo;
    }
    ))
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "You need to go the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to market2",
      desc: "You need to go the market to get this job done"
    },
    {
      sno: 3,
      title: "Go to market2",
      desc: "You need to go the market to get this job done"
    },
  ]);

  return (
    <>
    
      <Header title="My Todos List" searchBar={false}/>
      <Footer/>
      <Todos todos={todos} onDelete={onDelete}/>
  
    </>
  );
}

export default App;
