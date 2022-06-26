import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import { useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';

function App() {
  const onDelete=(todo)=>{
   setTodos(todos.filter((e)=>{
    return e!==todo
   }))
  }

  const addTodo=(title,desc)=>{
    let sno=todos[todos.length-1].sno+1
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    console.log(myTodo)
    setTodos([...todos,myTodo])
  }
 const [todos,setTodos]=useState([
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go to the market to get this job done"
    },
    {
      sno:2,
      title:"Go to the market",
      desc:"You need to go to the office to get this job done"
    },
    {
      sno:3,
      title:"Go to the market",
      desc:"You need to go to the mall to get this job done"
    }
  ])
  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
