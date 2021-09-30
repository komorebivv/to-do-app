import { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // function validateForm() {
    //     return email.length > 0 && password.length > 0;
    //   }

    function LogIn() { 
    axios
    .post('https://cors-anywhere.herokuapp.com/http://recruitment.ultimate.systems/auth/local', {
      identifier: login,
      password: password,
    })
    .then(response => {
 
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
    })
    .catch(error => {
      console.log('An error occurred:', error.response);
    });}


    return (
        <div className="container">
        <div className="login"> 
        <h2>Login</h2>
        <form>
            <input type="text" value={login} onChange = {(e) => setLogin(e.target.value)} placeholder="Email or Username"></input>
            <input type="password" value={password} onChange = {(e) => setPassword(e.target.value)} placeholder="Password"></input>
        </form>
        <button onClick={LogIn}>Login</button>
        <span>or</span>
        <Link to="/register"><span className="orangeText">create an account</span></Link>
        </div></div>
    )
}

export default LoginPage