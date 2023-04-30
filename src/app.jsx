import "./App.css"
import "./index.css"
import TodoList from "https://github.com/crazyboz/Todo_List-MERN/blob/5c9a8cf8162ecf86828a364e02a3d79b6dc0ad10/src/componentS/TodoList/TodoList.jsx"
import NewItems from "https://github.com/crazyboz/Todo_List-MERN/blob/d748ebacfd5680a707968dad9d67740c3d04c7ad/src/componentS/NewItems/NewItems.jsx";
import { useState } from "react";


const App=() =>{
  const [isCreated,setCreated]=useState("")
  const [isEdit,setEdit]=useState([])

  const create=(data)=>{
    setCreated(data)
  }

  const edit=(title,priority,_id,status)=>{
    const li=[title,priority,_id,status]
    setEdit([...li])
  }

  const clearedit=()=>{
    setEdit([])
  }

  return (  
  <div className="app">  
      <h1 className="title">Todo List</h1>
      <NewItems creation={create} createEdit={isEdit}/>
      <TodoList create={isCreated} edit={edit} uncreate={()=> setCreated("")} clearedit={clearedit}/>
    </div>
  );
}
export default App;
