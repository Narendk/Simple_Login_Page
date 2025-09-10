import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    function check() {
        axios
            .post("http://localhost:5000/login", {
                username: user,
                password: pass,
            })
            .then((res) => {
                if (res.data.success) {
                    localStorage.setItem("username", user)
                    // alert(res.data.message)
                    navigate("/success")
                }
            })
            .catch((err) => {
                if (err.response && err.response.data) {
                    const message = err.response.data.message
                    alert(message)
                    if (message === "User not found") {
                        navigate("/signup")
                    }
                } else {
                    alert("Something went wrong!")
                }
            })
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
            <div className=" p-[2px] rounded-2xl shadow-xl w-96">
                {/* Inner white card */}
                <div className="bg-white/50 rounded-2xl p-8">
                    {/* Logo */}
                    <h1 className="font-instagram text-3xl font-bold text-center mb-6">Instagram</h1>

                    {/* Inputs */}
                    <input
                        onChange={(e) => setUser(e.target.value)}
                        placeholder="Username"
                        className="border rounded w-full p-2 mb-3 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                    />
                    <input
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="Password"
                        type="password"
                        className="border rounded w-full p-2 mb-2 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                    />

                    {/* Forgot Password */}
                    <p className="text-xs text-right mb-4 text-blue-600 hover:underline cursor-pointer">
                        Forgotten password?
                    </p>

                    {/* Login button */}
                    <button
                        onClick={check}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200 text-sm"
                    >
                        Log In
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-500 text-xs">OR</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Social Login */}
                    <div className="text-center mb-4">
                        <button className="flex items-center justify-center text-blue-800 text-sm font-semibold hover:underline w-full">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                                alt="Facebook"
                                className="w-5 h-5 mr-2"
                            />
                            Log in with Facebook
                        </button>
                    </div>
                </div>

                {/* Footer card */}
                <div className="bg-white/50 rounded-2xl p-4 mt-3 text-center">
                    <p className="text-sm">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
