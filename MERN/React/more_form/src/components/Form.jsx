import React, { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateFirstName = () => {
    if(firstName.length < 2) {
      setFirstNameError('First Name must be at least 2 characters long.');
    } else {
      setFirstNameError('');
    }
  };

  const validateLastName = () => {
    if(lastName.length < 2) {
      setLastNameError('Last Name must be at least 2 characters long.');
    } else {
      setLastNameError('');
    }
  };

  const validateEmail = () => {
    if(email.length < 5) {
      setEmailError('Email must be at least 5 characters long.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if(password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = () => {
    if(password !== confirmPassword) {
      setConfirmPasswordError('Passwords must match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstNameError || lastNameError || emailError || passwordError || confirmPasswordError) {
      return;
    }
    // Submit the form if validation succeeds
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}> 
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder='First Name'
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            validateFirstName();
          }}
        />
        {firstNameError && <div class="text-danger">{firstNameError}</div>}
        </div>

        <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            validateLastName();
          }}
        />
        {lastNameError && <div class="text-danger">{lastNameError}</div>}
        </div>

        <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder='Email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail();
          }}
        />
        {emailError && <div class="text-danger">{emailError}</div>}
        </div>

        <div className="form-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder='Password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword();
            validateConfirmPassword();
          }}
        />
        {passwordError && <div class="text-danger">{passwordError}</div>}
        </div>

        <div className="form-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            validateConfirmPassword();
          }}
        />
        {confirmPasswordError && <div class="text-danger">{confirmPasswordError}</div>}
        </div>

        <div className="mt-3">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
    </div>
  )
}
export default Form;