import React from "react";

function First(props) {

return ( 
    <div>
        <p>Shtete ne EU : {props.data.filter(data => data.continent.includes("Europe")).map(data =><h1>{data.name} <br/> </h1>)} </p>
    </div>
)

}
export default First;