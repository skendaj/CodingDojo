import React, { useEffect, useState } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const AuthorsList= (props) => {
    const [author, setAuthor] = useState([]);
    const {update, setUpdate} = props;
    const navigate = useNavigate();

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/authors")
    	.then((res)=>{
            setAuthor(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [update])

    const deleteAuthor = (AuthorId) => {
        axios.delete('http://localhost:8000/api/authors/' + AuthorId)
            .then(res => {
                setUpdate(!update)
            })
            .catch(err => console.log(err))
    }
    return (
      <div>
        <h1>Favorite authors</h1>
        <p>
            <Link to={"/authors/new"}>Add an author</Link>
        </p>
        <p>We have quotes by:</p>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Authors</th>
              <th scope="col">Actions available</th>
            </tr>
          </thead>
          <tbody> 
          {author.map((author, index) => {
            return (
              <tr key={index}>
                <td><p>{author.name}</p></td>
                <td><button class="btn btn-outline-info"><Link to={`/authors/edit/${author._id}`}>Edit</Link></button></td>
                <td><button class="btn btn-primary" onClick={()=>deleteAuthor(author._id)}>Delete</button></td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
}
export default AuthorsList;