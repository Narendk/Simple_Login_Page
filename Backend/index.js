const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// temporary in-memory store
let users = []

// SIGN UP API
app.post("/signup", function (req, res) {
    const { username, password, confirmPassword } = req.body

    console.log("Signup attempt:", req.body)

    if (password !== confirmPassword) {
        return res.status(400).send({ success: false, message: "Passwords do not match" })
    }

    const existingUser = users.find(u => u.username === username)
    if (existingUser) {
        console.log("Signup failed: username exists", username)
        return res.status(400).send({ success: false, message: "Username already exists" })
    }

    users.push({ username, password })
    console.log("Signup success:", username)
    console.log("All users:", users)

    res.send({ success: true, message: "Signup successful" })
})


// LOGIN API
app.post("/login", function (req, res) {
    const { username, password } = req.body
    const user = users.find(u => u.username === username)

    if (!user) {
        return res.status(404).send({ success: false, message: "User not found" })
    }

    if (user.password !== password) {
        return res.status(401).send({ success: false, message: "Incorrect password" })
    }

    res.send({ success: true, message: "Login successful!" })
})


app.listen(5000, function () {
    console.log("Server Started")
})