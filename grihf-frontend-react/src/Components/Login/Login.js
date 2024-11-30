import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) {
            navigate("/");
        }
    }, []);

    const login = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        const json = await res.json();
        if (json.authtoken) {
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('email', email);
            navigate('/');
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    alert(error.msg);
                }
            } else {
                alert(json.error);
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

                <div className="text-center mb-4">
                    <p>Are you a new member?
                        <span className="text-blue-500">
                            <Link to="/sign-up"> Sign Up Here</Link>
                        </span>
                    </p>
                </div>

                <form onSubmit={login} className="space-y-4">
                    {/* Email Input */}
                    <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            aria-describedby="helpId"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="form-group">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            aria-describedby="helpId"
                        />
                    </div>

                    {/* Login Button */}
                    <div className="flex justify-center">
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
