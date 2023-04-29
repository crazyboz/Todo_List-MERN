import { useState , useEffect} from "react"



const NewItems=(props)=>{
    const {creation,createEdit}=props
    const [isValue,setValue]=useState("")
    const [isPrio,setPrio]=useState("")
    const priority=["high","medium","low"]
    const [isStatus,setStatus]=useState(true)
    
    let button_name = !(createEdit.length>0) ? "ADD" :"Update";

    useEffect(()=>{
        if(createEdit.length>0){
                setValue(createEdit[0])
                setPrio(createEdit[1])
                setStatus(createEdit[3])
                
            }
    },[createEdit])

    const change=(e)=>{
        setValue(e.target.value)
    }

    const statuschange=()=>{
        setStatus((current)=> !current)
    }

    const unchange=()=>{
        setValue(" ")
        setPrio(" ")
        setStatus(true)
    }


    return (
        <div className="new-item-card">
            {
                (isStatus)?(
                    <span className="checkbox pointer" onClick={statuschange}></span>
                    ):(            
                    <span className="material-symbols-outlined pointer" onClick={statuschange}>
                        check_box
                    </span>
                )
            }

            <div className="text_top">
                <input type="text" name="text" value={isValue} onChange={change} placeholder="type here...."/>
                {isValue && 
                    <div className="priority">
                        {
                            priority.map((item)=> 
                                <div className={`p-badge ${item}1 ${item===isPrio && item}`} onClick={()=> setPrio(item)} key={item}>
                                    {item}
                                </div>)
                        }
                    </div>
                }
                {isValue && 
                    <div className="btn">
                        <button onClick={()=>{
                            isValue && isPrio &&(

                                creation({title:isValue,priority:isPrio,_id:(createEdit?createEdit[2]:100),status:(createEdit?isStatus:true)})
                                )
                                unchange()
                        }}>
                            {button_name}
                        </button>
                        <button onClick={unchange}>Cancel</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default NewItems