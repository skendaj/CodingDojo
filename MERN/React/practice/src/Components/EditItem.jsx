import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import DeleteItem from './DeleteItem'

const EditItem = (props) => {
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

    const editPost = (e) => {
        e.preventDefault()

        const newPost = {
            userId: userId,
            id: postId,
            title: title,
            body: body
        }

        axios.put(`https://jsonplaceholder.typicode.com/posts/${editPost}`, newPost)
            .then(response => {
                console.log(response.data)
                navigate('/')
            })
            .catch(error => console.log(error))
    }


    return (
        <>
            <div className="row">
                <div className="mx-auto col-20 col-md-10 col-lg-7">
                    <h1 className='mt-5'>Edit post</h1>
                    <form onSubmit={editPost} >
                        <div className="form-row">
                            <div className="form-group mt-5">
                                <label>User ID: </label>
                                <input 
                                type="number" 
                                value={userId} 
                                className="form-control" 
                                min={11} 
                                onChange={(e) => setUserId(e.target.value)} />
                            </div>
                            <div className="form-group mt-2">
                                <label>Post ID: </label>
                                <input 
                                type="number" 
                                value={postId} 
                                className="form-control" 
                                min={101} 
                                onChange={(e) => setPostId(e.target.value)} />
                            </div>
                            <div className="form-group mt-2">
                                <label>Title: </label>
                                <input 
                                type="text" 
                                value={title} 
                                className="form-control" 
                                onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="form-group mt-2">
                                <label>Body:
                                    <textarea 
                                    value={body} 
                                    className="form-control" 
                                    rows="5" 
                                    cols="150"
                                    onChange={(e) => setBody(e.target.value)}></textarea>
                                </label>
                            </div>
                            <div> 
                            <button
                            type="submit" 
                            className="btn btn-success mt-3">
                                Edit
                            </button>
                            <DeleteItem />
                            </div>
                        </div>
                    </form >
                </div>
            </div>
        </>
    )
}

export default EditItem