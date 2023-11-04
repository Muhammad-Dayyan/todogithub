
import { useEffect, useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import { addTodo, getAllTodo } from './Utlis/HandleApi'

function App() {
 const [toDo,setTodo]=useState([])
 const [text,setText]=useState('')
 useEffect(()=>{
  getAllTodo(setTodo)
 },[])

  return (
   <div className='App'>
    <div className='container'>
      <h1>TODO APP</h1>
      <div className='top'>
        <input type='text' placeholder='add todoos.' value={text}
        onChange={(e)=>setText(e.target.value)}/>
        <div className="add" onClick={()=>addTodo(text,setText,setTodo)}>ADD</div>
      </div>
      <div className="list">
{toDo.map((item)=><Todos key={item._id} text={item.text}/>)}


      </div>
    </div>

   </div>
  )
}

export default App
