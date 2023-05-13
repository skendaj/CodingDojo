import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const ItemList = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
    .then(response => setPosts(response.data))
    .catch(error => console.log(error))
    }, []);

    
    return(
        <div>
            <h1>List of data</h1>
            <ul className="list-group">
                {posts.map((post, index) => (
                    <li key={index} className="list-group-item"> 
                    <Link to={`/edit/${post.userId}`}>  <h4>Post {index+1}</h4></Link>
                        <p>User Id: {post.userId}</p>
                        <p>Id: {post.id}</p>
                        <p>Title: {post.title}</p>
                        <p>Body: {post.body}</p> 
                        <br/></li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList;