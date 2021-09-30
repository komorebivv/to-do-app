import Button from "./Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useState } from "react";

import axios from 'axios';




const RegisterPage = () => {
    const [userName, setUsername] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [repeatPassword, setRepeatPassword] =useState('');

    function createAccount() {
        if (password !== repeatPassword) {
            alert('Password are different')
        } else {
            axios
            .post('https://cors-anywhere.herokuapp.com/recruitment.ultimate.systems/auth/local/register', {
              username: userName,
              email: email,
              password: password,
            })
            .then(response => {
              // Handle success.
              console.log('Well done!');
              console.log('User profile', response.data.user);
              console.log('User token', response.data.jwt);
            })
            .catch(error => {
              // Handle error.
              console.log('An error occurred:', error.response);
            })};}

    return (
        <div className="container">
            <div className="login">
            <Link to="/" className="arrowIcon"><FontAwesomeIcon icon={faLongArrowAltLeft} /></Link>
                <h2>Create an new account</h2>
                <form>
                    <input type="text" value={userName} onChange = {(e) => setUsername(e.target.value)} className="form-control" placeholder="Username"></input>
                    <input type="text" value={email} onChange = {(e) => setEmail(e.target.value)} className="form-control" placeholder="Email"></input>
                    <input type="password" value={password} onChange = {(e) => setPassword(e.target.value)} className="form-control" placeholder="Password"></input>
                    <input type="password" value={repeatPassword} onChange = {(e) => setRepeatPassword(e.target.value)} className="form-control" placeholder="Repeat password"></input>
                </form>
                <button onClick={createAccount}>Create</button>
            </div>
        </div>
    )
}



export default RegisterPage