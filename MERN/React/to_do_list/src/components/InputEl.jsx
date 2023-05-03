import React, { useState } from 'react';

function InputEl (props) {
    const { toDoList, setToDoList } = props
    const [toDo, setToDo] = useState({})

    const HandleChange = (e) => {
        setToDo({text:e.target.value,
        selected: false})
        console.log(e.target.value)
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        setToDoList([...toDoList, toDo])
        console.log(toDoList)
    }


    return (
        <div>
            <form className ="form-group" onSubmit={HandleSubmit}>
                <input className="form-control" type="text" placeholder='Input' onChange={HandleChange}/>
                <input className="btn btn-primary" type="submit" value ="Add"/>
            </form>
        </div>
    )
}

export default InputEl;