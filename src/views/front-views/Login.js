import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";

import { app, db } from '../../services/firebaseService';
import Heading from '../../components/Heading';

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

    const onFinish = async (values) => {
        console.log('Success:', values);
        // const { email, password } = values;
        const auth = getAuth(app);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const { user } = userCredential;
            if(user) {
                localStorage.setItem("access_token", user.accessToken);
                return true;
            }
            
            return false;
        } catch (error) {
            console.log(error)
            return false
        }
    };
    
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

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
        <div className='container'>
            <div className='row'>
                <div className='form'>

                    <div className="heading__center">
                        <Heading 
                            text="Login"
                        />
                    </div>

                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{ offset: 8, span: 16 }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;