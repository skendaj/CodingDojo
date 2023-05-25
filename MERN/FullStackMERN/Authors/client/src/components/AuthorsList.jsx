import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthorsList = (props) => {
  const [authors, setAuthors] = useState([]); // Rename the state variable to "authors"
  const { update, setUpdate } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data.authors);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  const deleteAuthor = (authorId) => {
    axios
      .delete('http://localhost:8000/api/authors/' + authorId)
      .then(() => {
        setUpdate(!update);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Favorite authors</h1>
      <p>
        <Link to={"/authors/new"}>Add an author</Link>
      </p>
      <p>We have quotes by:</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Authors</th>
            <th scope="col">Actions available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((authorItem, index) => ( // Rename the parameter in the map function to "authorItem"
            <tr key={index}>
              <td>
                <p>{authorItem.name}</p>
              </td>
              <td>
                <button className="btn btn-outline-info">
                  <Link to={`/authors/edit/${authorItem._id}`}>Edit</Link>
                </button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={() => deleteAuthor(authorItem._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorsList;
