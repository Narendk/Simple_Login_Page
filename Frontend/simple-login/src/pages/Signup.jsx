import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    function register() {
        if (pass !== confirmPass) {
            alert("Passwords do not match!")
            return
        }

        axios
            .post("http://localhost:5000/signup", {
                username: user,
                password: pass,
                confirmPassword: confirmPass,
            })
            .then((res) => {
                if (res.data.success) {
                    alert(res.data.message)
                    navigate("/")
                }
            })
            .catch((err) => {
                if (err.response && err.response.data) {
                    alert(err.response.data.message)
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
                    <h1 className="text-3xl font-bold text-center mb-6 font-instagram">Instagram</h1>

                    <p className="text-gray-500 text-center text-sm mb-4">
                        Sign up to see amazing content from friends.
                    </p>

                    <input
                        onChange={(e) => setUser(e.target.value)}
                        placeholder="Username"
                        className="border rounded w-full p-2 mb-3 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                    />
                    <input
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="Password"
                        type="password"
                        className="border rounded w-full p-2 mb-3 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                    />
                    <input
                        onChange={(e) => setConfirmPass(e.target.value)}
                        placeholder="Confirm Password"
                        type="password"
                        className="border rounded w-full p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                    />

                    <button
                        onClick={register}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200 text-sm"
                    >
                        Sign Up
                    </button>
                </div>

                {/* Footer card */}
                <div className="bg-white/50 rounded-2xl p-4 mt-3 text-center">
                    <p className="text-sm">
                        Have an account?{" "}
                        <Link to="/" className="text-blue-600 font-semibold hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
