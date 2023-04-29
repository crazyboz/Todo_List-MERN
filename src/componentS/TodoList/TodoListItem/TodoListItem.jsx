import { useState } from "react"

const TodoListItem= (props) =>{
    const {item : {title,priority,_id,status},onDelete,edit}=props

    return (
        <div className={`item-card ${priority}`}>
            {
                status?(
                    <span className="checkbox"></span>
                ):(
                    <span className="material-symbols-outlined ">
                        check_box
                    </span>
                )
            }
            <div className={`card-title ${!status && 'strike'}`} >
                {title}
            </div>

            <div className={`badge ${priority}`}>
                {priority}
            </div>

            <div className="edit pointer">
                <span className="material-symbols-outlined" onClick={()=> {
                    edit(title,priority,_id,status)
                }}>
                    edit
                </span>
            </div>

            <div className="delete pointer" onClick={()=> onDelete(_id)}>
                <span className="material-symbols-outlined">
                    delete
                </span>
            </div>
        </div>
    )
}

export default TodoListItem;