import api from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../token";
import google from "../assets/google.png";

const AuthForm = ({ route, method }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const res = await api.post(route, { username, password });

            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
                window.location.reload();
            } else {
                setSuccess("Registration successful. Please login.");
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }
        } catch (error) {
            console.error(error);
            if (error.response) {
                if (error.response.status === 401) {
                    setError("Invalid credentials");
                } else if (error.response.status === 400) {
                    setError("Username already exists");
                } else {
                    setError("Something went wrong. Please try again.");
                }
            } else if (error.request) {
                setError("Network error. Please check your internet connection.");
            } else {
                setError("Something went wrong. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8000/accounts/google/login/";
    };

    return (
        <div className="max-w-md mx-auto mt-16 p-8 bg-white shadow-lg rounded-lg">
            {loading && (
                <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-md">
                    {error ? (
                        <span className="text-red-500">{error}</span>
                    ) : (
                        <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                    )}
                </div>
            )}
            {!loading && (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
                        {method === 'register' ? 'Register' : 'Login'}
                    </h2>
                    {error && <div className="text-red-500 text-center">{error}</div>}
                    {success && <div className="text-green-500 text-center">{success}</div>}
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="username" className="text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="password" className="text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        {method === 'register' ? 'Register' : 'Login'}
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full py-2 border border-blue-500 rounded-md text-blue-500 hover:bg-blue-100 mt-4"
                        onClick={handleGoogleLogin}
                    >
                        <img src={google} alt="Google icon" className="w-5 h-5 mr-2" />
                        {method === 'register' ? 'Register with Google' : 'Login with Google'}
                    </button>
                    {method === 'login' && (
                        <p className="mt-4 text-center text-gray-600">
                            Don't have an account?{" "}
                            <span
                                className="text-blue-600 font-bold cursor-pointer"
                                onClick={() => navigate("/register")}
                            >
                                Register
                            </span>
                        </p>
                    )}
                    {method === 'register' && (
                        <p className="mt-4 text-center text-gray-600">
                            Already have an account?{" "}
                            <span
                                className="text-blue-600 font-bold cursor-pointer"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </span>
                        </p>
                    )}
                </form>
            )}
        </div>
    );
};

export default AuthForm;
