import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Helper function to determine if the current route is the main page
    const isMainPage = location.pathname === '/';

    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
            {/* Logo with link */}
            <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-blue-500">StayHealthy</span>
                <svg
                    fill="#3685fb"
                    width="30px"
                    height="30px"
                    viewBox="-1.5 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="m6.53 8.098.14-.012c.053-.006.101-.025.141-.053l-.001.001c.134.462.298.948.503 1.457.263.666.522 1.213.812 1.741l-.04-.08c-.024.364-.053.738-.091 1.1-.018.223-.062.431-.129.627l.005-.018c-.012.005-.029 2.08-.029 2.08.001 1.353.938 2.486 2.198 2.787l.02.004c.057-.145.195-.246.357-.246h.574c.161.002.299.102.356.243l.001.003c1.283-.302 2.224-1.435 2.229-2.789v-.001s-.035-2.066-.053-2.08c-.055-.175-.099-.381-.122-.593l-.001-.015c-.035-.364-.058-.729-.091-1.1.247-.446.506-.992.734-1.555l.038-.106c.205-.509.364-.994.503-1.457.039.028.087.047.139.053h.001l.141.012c.17.018.32-.122.334-.339l.152-1.931c0-.001 0-.002 0-.002 0-.163-.122-.297-.279-.317h-.002-.017c.039-.281.061-.605.061-.934 0-.718-.106-1.412-.303-2.065l.013.051c-.577-1.266-1.721-2.185-3.099-2.442l-.026-.004c-.296-.061-.641-.102-.993-.112h-.009-.012c-.359.007-.704.047-1.038.118l.036-.006c-1.402.264-2.544 1.183-3.114 2.419l-.011.027c-.186.6-.293 1.29-.293 2.004 0 .333.023.661.068.981l-.004-.037c-.159.018-.282.151-.282.313v.007l.152 1.931c.014.222.166.356.33.338z"
                    />
                    <path
                        d="m21.416 20.878c-.07-3.04-.374-3.728-.538-4.194-.065-.187-.118-1.451-2.206-2.271-1.28-.504-2.932-.514-4.33-1.105v1.644c-.003 1.768-1.269 3.239-2.944 3.56l-.023.004c-.031.182-.187.318-.374.32h-.018v1.24c0 1.212.982 2.194 2.194 2.194s2.194-.982 2.194-2.194v-.866c-.608-.091-1.069-.609-1.069-1.235 0-.689.559-1.248 1.248-1.248s1.248.559 1.248 1.248c0 .546-.351 1.01-.839 1.18l-.009.003v.918.047c0 1.532-1.242 2.774-2.774 2.774s-2.774-1.242-2.774-2.774c0-.017 0-.033 0-.05v.002-1.251c-.178-.012-.322-.146-.35-.318v-.002c-1.69-.329-2.95-1.795-2.954-3.556v-1.657c-1.404.603-3.066.615-4.353 1.12-2.094.819-2.142 2.08-2.206 2.27-.16.468-.468 1.153-.538 4.195-.012.4 0 1.013 1.206 1.549 2.626 1.03 6.009 1.35 9.344 1.58h.32c3.342-.228 6.72-.547 9.344-1.58 1.201-.533 1.212-1.142 1.201-1.546zm-14.681-1.24h-1.246v1.251h-.89v-1.247h-1.246v-.89h1.246v-1.246h.89v1.246h1.246z"
                    />
                    <path
                        d="m16.225 17.965v-.001c0-.372-.301-.673-.673-.673s-.673.301-.673.673.301.673.673.673c.371 0 .672-.301.673-.672z"
                    />
                </svg>
            </Link>

            {/* Hamburger Icon - Always right aligned */}
            <button
                className="md:hidden text-blue-500 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <i className="fas fa-bars text-2xl"></i>
            </button>

            {/* Desktop Menu */}
            <nav className="hidden md:block justify-end">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-blue-400 text-black">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/appointments" className="hover:text-blue-400 text-black">
                            Appointments
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" className="hover:text-blue-400 text-black">
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="hover:text-blue-400 text-black">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`absolute top-24 left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-500 md:hidden ${isMenuOpen ? 'max-h-64 py-4' : 'max-h-0'}`}
            >
                <ul className="flex flex-col items-center space-y-4">
                    <li>
                        <Link
                            to="/"
                            className="hover:text-blue-400 text-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/appointments"
                            className="hover:text-blue-400 text-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Appointments
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/signup"
                            className="hover:text-blue-400 text-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="hover:text-blue-400 text-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
