import { useEffect, useState } from "react"
import TodoListItem from "./TodoListItem/TodoListItem"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const TodoList=(props)=>{
    const {create,uncreate,edit,clearedit}=props
    const [isSelect,setSelect]=useState("none")
    const [isSelectValue,setSelectValue]=useState("none")

    useEffect (()=>{
        if(create) {
            if(create._id===undefined){
                fetch("https://todoapi-r2ra.onrender.com/data",{
                    method:"POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(create)
                }).then(response => {
                    return response.json()
                }).then((res)=>{
                    toast.success(res.msg)
                }).catch((err)=>{
                    toast.error(err)
                })
            }else{
                fetch("https://todoapi-r2ra.onrender.com/data",{
                    method:"PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(create)
                }).then((res)=>{
                    return res.json()
                }).then((res)=>{
                    clearedit()
                    toast.success(res.msg)
                }).catch((err)=>{
                    toast.error(err)
                })
            }    
        }
        uncreate()
    },[create])

    useEffect(()=>{
        fetch(`https://todoapi-r2ra.onrender.com/data/${isSelect}`).then((res)=>{
            return res.json()
        }).then((res)=>{
            setlist([...res])
        })
    },[create,isSelect])
    
    const [list,setlist]=useState([])

    const deleteItem=(id)=>{
        fetch("https://todoapi-r2ra.onrender.com/data",{
            method:"DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({_id:id})
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            toast.success(res.msg)
            fetch(`https://todoapi-r2ra.onrender.com/data/${isSelect}`).then((res)=>{
                return res.json()
            }).then((res)=>{
                setlist([...res])
            })
        }).catch((err)=>{
            toast.error(err)
        })
    }

    return (
        <>
            <div className="sort">
                <label >Choose based on the priority:</label>
                <select value={isSelectValue} onChange={(e)=>{setSelectValue(e.target.value)}}>
                    <option value="none">none</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <div className="btn pointer" onClick={()=>{setSelect(isSelectValue)}}>
                    sort
                </div>
            </div>

            {
                list.length==0? 
                   <p className="noItems">No such items</p> :
                list.map((item,index)=>{
                   return <TodoListItem key={index} item={item} edit={edit} onDelete={deleteItem}/>
                })
            }
        </>
        
    )
}

export default TodoList;