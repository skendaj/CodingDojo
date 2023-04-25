import React, {useState} from "react";
import PetCard from "./Pet";
const PersonCard = (props) => {
    const {lastName, firstName, personAge, hairColor,kafshet} = props
    const [age, setAge] = useState(personAge)
    
    return ( 
        <>
    <h2>Name: {lastName} {firstName}</h2>
    <p>Age : {age}</p>
    <p>Hair color : {hairColor}</p>
    <button onClick={(event) => setAge(age + 1)}>Birthday Button for {firstName}</button>
    {kafshet? kafshet.map((e,index)=> <PetCard key={index} firstName = {e.firstName} lastName = {e.lastName}  />) : "" }

    
    </>
    )
}

export default PersonCard;