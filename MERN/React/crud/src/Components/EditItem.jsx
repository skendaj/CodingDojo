import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditItem = (props) => {
    
    const [userId, setUserId] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()
    const {setEditPost} = props
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {setUserId(response.data.id) ;setTitle(response.data.title);
    setBody(response.data.body)})
    .catch(error => console.log(error))
    }, []);


    const EditPost = (e) => {
        e.preventDefault()

        const editedPost = {
            userId: userId,
            id: id,
            title: title,
            body: body
        }
        
        axios.put(`https://jsonplaceholder.typicode.com/posts/${editedPost.id}`, editedPost)
        .then(response => {
            console.log(response.data)
            navigate('/')
            setEditPost(editedPost)})
        .catch(error => console.log(error))
    }
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
            navigate('/')
            setEditPost(editedPost)})
        .catch(error => console.log(error))
    }

    return (
        <>
            <div className="row">
                <div className="mx-auto col-20 col-md-10 col-lg-7">
                    <h1>Edit post {id}</h1>
                    <form onSubmit={ EditPost } >
                        <div className="form-row">
                            <div className="form-group">
                                <label>User id: </label>
                                <input type="number" value={userId} className="form-control" onChange={(e) => setUserId(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Title: </label>
                                <input type="text" value={title} className="form-control" onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Body:
                                    <textarea value={body} className="form-control" rows="3" onChange={(e) => setBody(e.target.value)}></textarea>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-secondary">EDIT</button>
                            <button onClick={DeletePost} className="btn btn-danger">Delete</button>
                        </div>
                    </form >
                </div>
            </div>
        </>
    )
}

export default EditItem;