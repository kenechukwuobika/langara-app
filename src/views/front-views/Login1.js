import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap';
// import axios from 'axios';

// import APIURL from '../constants/apiUrl';
// import Alert from '../Components/Alert';

// import './pageStyles/login.css';


const LoginPage = () => {
    const history = useNavigate();
    const testEmail = "ObikaForPresident2023@realvu.com";
    const testPW = "ObikaForPresident2023";
    const [email, setEmail] = useState(testEmail);
    const [password, setPassword] = useState(testPW);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    // const onLogin = async () => {

    //     if(email !== testEmail || password !== testPW) {

    //     }

    //     if(email && password) {
    //         const response = await axios.post(`/api/v1/auth/login`, {
    //             email, password
    //         });

    //         if(response && response.data.status==="success") {
    //             const user = response.data.data.user
    //             const token = response.data.token
    
    //             localStorage.setItem("isLoggedIn", true)
    //             localStorage.setItem("setReloadMain", true)
    //             localStorage.setItem("authUser", JSON.stringify(user));
    //             localStorage.setItem("token", token);
    //             window.location.href = "/";
    //         }
    //     }
    // }

    return (
        <form>
            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" />
                <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" />
                <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>

            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                </div>
                </div>

                <div className="col">
                <a href="#!">Forgot password?</a>
                </div>
            </div>

            <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

            <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
                <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
                </button>
            </div>
        </form>
    );
};

export default LoginPage;