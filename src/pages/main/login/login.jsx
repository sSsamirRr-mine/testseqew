import './login.css';
// import React, { useState, useEffect } from 'react';

export default function Login() {
    const site = () => {
        window.location.href = '/';
    };

    const login = async () => {
        const username = document.getElementById("username");
        const password = document.getElementById("password");

        if (username && password) {
            try {
                const dataToSend = {
                    username: username.value,
                    password: password.value
                };

                const response = await fetch('https://fastapi-course-app.onrender.com/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend)
                });

                if (response.ok) {
                    const responseData = await response.json();
                    console.log('Login successful:', responseData);
                    
                    localStorage.setItem('token', responseData.access_token);
                } else {
                    console.error('Login failed:', response.statusText);
                }
            } catch (error) {
                console.error('Error occurred during login:', error);
            }
        }
    };

    return (
        <div className='fone-login'>
            <section className='login'>
                <button onClick={site}>&larr;</button>
                <div className='left-login'>
                    <h2>Kirish</h2>
                    <p className='p-login-one'>Xush kelibsiz!</p>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' />
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' />
                    <button onClick={login}>Kirish</button>
                    <p className='p-login-two'>
                        Akkount yo'qmi? <a href='/register'>Ro'yxatdan o'tish</a>
                    </p>
                </div>
                <div className="right-img"></div>
            </section>
        </div>
    );
}
