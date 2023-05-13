import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const ItemList = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => setPost(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <div className='ml-2'>   
                <h2>Homefeed</h2>
            </div>
            <ul className='list-group'>
                {
                    post.map((post, index) => (
                        <li key={index} className='list-group-item'>
                            <Link to={`/edit/${post.id}`}><h4>Post {index + 1}</h4></Link>
                            <p>User ID: {post.userId}</p>
                            <p>ID: {post.id}</p>
                            <p>Title: {post.title}</p>
                            <p>Body: {post.body}</p>
                            <br />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ItemList