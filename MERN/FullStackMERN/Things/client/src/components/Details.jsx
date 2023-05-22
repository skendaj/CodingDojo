import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate, Link} from "react-router-dom";
import LikesDashboard from './LikeDashboard';

const Details =() => {
    const [thing, setThing] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/things/" + id)
            .then( res => {
                console.log(res.data);
                setThing(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);

    const handleLikes = () => {
        axios
          .post('http://localhost:8000/api/things/' + id)
          .then((res) => {
            setThing({ ...thing,  likes: thing.likes + 1 });
            navigate("/" );
          })
          .catch((err) => console.log(err));
      };

    const deleteThing = (thingId) => {
        axios.delete('http://localhost:8000/api/things/' + thingId)
            .then(res => {
                const updatedThing = { ...thing }; 
                delete updatedThing[thingId];
                setThing(updatedThing);
                navigate("/", { replace: true });
            })
            .catch(err => console.log(err))
    }

    
    const resetLikes = () => {
        axios
          .put('http://localhost:8000/api/things/' + id)
          .then((res) => {
            setThing({ ...thing,  likes:0 });
          })
          .catch((err) => console.log(err));
      };

 return (
   <div>
     <div className="dashboard">
        <LikesDashboard />
        <p>
         <Link to={"/"}>go to home</Link>
       </p>
     </div>
     <h2>{thing.name}</h2>
     <p>Likes: {thing.likes}</p>
     <div className="buttons">
        <button  onClick={handleLikes} class="btn btn-primary mr-2" >Like</button>
       
       <button class="btn btn-primary" onClick={(e)=>{deleteThing(thing._id)}}>Delete This Thing</button>
       <button onClick={resetLikes} class="btn btn-primary">Reset Likes</button>
       <button class="btn btn-outline-info">
         <Link style={{textDecoration: 'none'}} to={`/things/edit/${thing._id}`}>Change Name</Link>
         {/* <Link to={"/api/things/edit/"+ thing._id}>Change Name</Link> */}
       </button>
     </div>
   </div>
 );
}

export default Details;