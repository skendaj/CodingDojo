import React, { useState } from 'react';

const ToDo =(props) =>{
    const {toDoList, setToDoList}=props
    
    const handleSelect = (e) => {
        toDoList[e.target.id].selected= !toDoList[e.target.id].selected;
        setToDoList([...toDoList])
    }

    const onDelete = (e) => {
        const temp=toDoList.filter((item, index)=>index !== e )
        setToDoList(temp)
    }
    
    return (
        <div>
            {toDoList.map((item, index)=>
            (<div>
                <p style={{textDecoration: item.selected? 'line-through' : ""}}>{item.text}</p>
                <input className="form-check-input" type="checkbox" id={index} onChange={handleSelect}/>
            <input className="btn btn-primary" type="submit" id={index} onClick={()=>onDelete(index)} value ="Delete"/>
            </div>))
            }
        </div>
    )
}

export default ToDo;