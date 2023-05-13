import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateItem = (props) => {

    const [userId, setUserId] = useState("")
    const [postId, setPostId] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const navigate = useNavigate()

    const AddPost = (e) => {
        e.preventDefault()

        const newPost = {
            userId: userId,
            id: postId,
            title: title,
            body: body
        }

        axios.post(`https://jsonplaceholder.typicode.com/posts/`, newPost)
            .then(response => {
                console.log(response.data)
                navigate('/')})
            .catch(error => console.log(error))        
    }

    return (
        <>
            <div class="row">
                <div className="mx-auto col-20 col-md-10 col-lg-7">
                    <h1>Create a new post</h1>
                    <form onSubmit={AddPost} >
                        <div className="form-row">
                            <div className="form-group">
                                <label>User id: </label>
                                <input type="number" value={userId} className="form-control" min={11} onChange={(e) => setUserId(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Post id: </label>
                                <input type="number" value={postId} className="form-control" min={101} onChange={(e) => setPostId(e.target.value)} />
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
                            <button type="submit" className="btn btn-secondary">ADD</button>
                        </div>
                    </form >
                </div>
            </div>
        </>
    )
}

export default CreateItem;