import React, {useState} from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

function Form() {
  const formPassword = Yup.object().shape({
    password: Yup.string()
      .required('Password is mandatory')
      .min(3, 'Password must be at 3 characters long'),
    confirmPassword: Yup.string()
      .required('Password is mandatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formPassword) }
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors } = formState
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4))
    return false
  }

  const [firstName, setFirstName]= useState("");
  const [lastName, setLastName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]=useState("");
  const [confirmPassword, setConfirmPassword]=useState("");

  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  }

  const createUser= (e)=> {
    e.preventDefault();
}

const newUser = { 
    firstName: firstName,
    lastname: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword
};
console.log("Welcome", newUser);

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(createUser)}>
        <h2>Hook Form</h2>
      <div className="form-group mb-3">
            <label className="mb-1">Fist Name: </label>
            <input 
            type="text" 
            className="form-control"
            onChange={ (e) => setFirstName(e.target.value)} 
            />
        </div>
        <div className="form-group mb-3">
            <label className="mb-1">Last Name: </label>
            <input 
            type="text" 
            className="form-control"
            onChange={ (e)=> setLastName(e.target.value)} />
        </div>
        <div className="form-group mb-3">
            <label className="mb-1">Email: </label>
            <input 
            type="text" 
            className="form-control"
            onChange={ (e)=> setEmail(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label className="mb-1">Password</label>
          <input
            name="password"
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            onChange={ (e)=> setPassword(e.target.value)}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group">
          <label className="mb-1">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            onChange={ (e)=> setConfirmPassword(e.target.value)}
          />
          <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Create User
          </button>
        </div>
      </form>

      <div className="container mt-5 form-group row">
        <h1 class="display-6 text-start">First Name: {firstName} </h1>
        <h1 class="display-6 text-start">Last Name: {lastName} </h1>
        <h1 class="display-6 text-start">Email: {email}</h1>
        <h1 class="display-6 text-start">Password: {password}</h1>
        <h1 class="display-6 text-start">Confirm Password: {confirmPassword} </h1>
      </div>
    </div>
  )
};

export default Form;