import React from "react"
import { useNavigate } from "react-router-dom"

const Success = () => {
    const navigate = useNavigate()
    const username = localStorage.getItem("username") || "User"

    function handleLogout() {
        localStorage.removeItem("username")
        navigate("/")
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
            <div className=" p-[2px] rounded-2xl shadow-xl w-96">
                {/* Inner white card */}
                <div className="bg-white/50 rounded-2xl p-8 text-center">
                    <h1 className="text-3xl font-bold mb-6 font-instagram">Instagram</h1>

                    <h2 className="text-xl font-semibold text-green-600 mb-2">
                        ✅ Login Successful
                    </h2>
                    <p className="text-gray-700 mb-6">Welcome, {username} 🎉</p>

                    <button
                        onClick={handleLogout}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200 text-sm"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Success
