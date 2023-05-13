import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DeleteItem = (props) => {
    const [userId, setUserId] = useState("")
    const [postId, setPostId] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const navigate = useNavigate("")
    const {id}=useParams()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setUserId(response.data.userId);
                setTitle(response.data.title);
                setBody(response.data.body);
            })
            .catch(error => console.log(error))
    }, []);

    const DeletePost = (e) => {
        e.preventDefault()

        const editedPost = {
            userId: userId,
            id: id,
            title: title,
            body: body
        }
        
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${editedPost.id}`)
        .then(response => {
            console.log(response.data)
            navigate('/')})
        .catch(error => console.log(error))
    }


    return (
       <div>
            <button onClick={DeletePost} className="btn btn-danger">Delete</button>
       </div>
    )
}

export default DeleteItem