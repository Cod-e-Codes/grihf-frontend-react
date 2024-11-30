import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config'; // Import API URL from your config file

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('doctor');
    const [errors, setErrors] = useState({});
    const [showError, setShowError] = useState('');
    const navigate = useNavigate();

    // Form validation function
    const validateForm = () => {
        const newErrors = {};

        // Name Validation
        if (!name) {
            newErrors.name = 'Name is required';
        }

        // Phone Validation (Must be exactly 10 digits)
        const phonePattern = /^[0-9]{10}$/;
        if (!phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!phonePattern.test(phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
        }

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
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await fetch(`${API_URL}/api/auth/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, phone, password, role }),
                });

                const data = await response.json();

                if (data.authtoken) {
                    // Store user data in sessionStorage
                    sessionStorage.setItem('auth-token', data.authtoken);
                    sessionStorage.setItem('name', name);
                    sessionStorage.setItem('email', email);
                    sessionStorage.setItem('phone', phone);

                    // Redirect user to home page
                    navigate('/');
                    window.location.reload();
                } else {
                    // Handle any errors from the backend
                    setShowError(data.error || 'An error occurred. Please try again.');
                }
            } catch (error) {
                console.error('Error during registration:', error);
                setShowError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="max-w-2xl mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-semibold text-blue-500">Sign Up</h1>
                <p className="text-gray-600 text-sm mt-2">
                    Already a member?{' '}
                    <a href="/login" className="text-blue-500 font-semibold hover:underline">
                        Login
                    </a>
                </p>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    {/* Role */}
                    <div className="mb-6">
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                            Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {/* Name */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your phone number"
                            required
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>

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

                    {/* Error Message */}
                    {showError && <div className="text-red-500 text-sm mb-4">{showError}</div>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Sign_Up;
