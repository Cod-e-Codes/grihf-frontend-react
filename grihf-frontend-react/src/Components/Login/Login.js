import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    // Validate the form
    const validateForm = () => {
        const newErrors = {};

        // Email Validation (Basic email format check)
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!emailPattern.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Password Validation (At least 6 characters for simplicity)
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form Submitted:', { email, password });
        }
    };

    return (
        <div className="max-w-2xl mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-semibold text-blue-500">Login</h1>
                <p className="text-gray-600 text-sm mt-2">
                    Not a member?{' '}
                    <a href="/sign-up" className="text-blue-500 font-semibold hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    {/* Button Group */}
                    <div className="flex justify-between gap-4">
                        <button
                            type="submit"
                            className="w-1/2 py-3 text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Login
                        </button>
                        <button
                            type="reset"
                            className="w-1/2 py-3 text-white font-semibold bg-red-500 rounded-md hover:bg-red-600 transition duration-300"
                        >
                            Reset
                        </button>
                    </div>

                    {/* Forgot Password Link */}
                    <div className="text-center mt-6">
                        <a
                            href="#"
                            className="text-blue-500 font-semibold hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
