import React from "react";

const Tabs= (props)=> {
    const content=["Flogerti","eshte","problematik"]

    const HandleClick = (e) => {
        e.preventDefault()
        props.description(content[e.target.id])
    }
    return(
        <div>
            <button id="0" onClick={HandleClick}>Tab 1</button>
            <button id="1" onClick={HandleClick}>Tab 2</button>
            <button id="2" onClick={HandleClick}>Tab 3</button>
        </div>
    )
}

export default Tabs;