// import React, { useState } from 'react'
// import axios from 'axios';
// const ProductManager = () => {
//     //keep track of what is being typed via useState hook
//     const [title, setTitle] = useState(""); 
//     const [price, setPrice] = useState("");
//     const [description, setDescription] = useState("");
//     //handler when the form is submitted
//     const onSubmitHandler = (e) => {
//         //prevent default behavior of the submit
//         e.preventDefault();
//         //make a post request to create a new person
//         axios.post('http://localhost:8000/api/product', {
//             title,    // this is shortcut syntax for firstName: firstName,
//             price,
//             description      // this is shortcut syntax for lastName: lastName
//         })
//             .then(res=>{
//                 console.log(res); // always console log to get used to tracking your data!
//                 console.log(res.data);
//             })
//             .catch(err=>console.log(err))
//     }
    
//     return (
//       <div className="d-flex flex-column justify-content-center">
//         <form className=" "  onSubmit={onSubmitHandler}>
//               <div className="form-group col-sm-4 align-items-center">
//                 <label>Title: </label>
//                 <input type="text" className="form-control"  placeholder="Enter title" onChange = {(e)=>setTitle(e.target.value)} />
//                 </div>
//                 <div className="form-group col-sm-4">
//                 <label>Price:</label>
//                 <input type="number" className="form-control"  placeholder="Enter price" onChange = {(e)=>setPrice(e.target.value)} />      
//                 </div>          
//                 <div className="form-group col-sm-4">
//                 <label>Description:</label>
//                 <input type="text" className="form-control"  placeholder="Enter description" onChange = {(e)=>setDescription(e.target.value)} /> 
//                 </div>
//                 <div className="form-group col-sm-1 justify-content-md-center">
//                 <button type="submit" className="btn btn-primary">Submit</button>
//                 </div>
//         </form>
//         </div>
//     )
// }
// export default ProductManager;
