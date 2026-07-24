require("dotenv").config();
console.log("JWT Secret:", process.env.JWT_SECRET);

const express = require("express");
const jwt = require("jsonwebtoken");
const requireAuth = require("./middleware/requireAuth");

const app = express();

app.use(express.json());

// Public Route
app.get("/", (req, res) => {
    res.send("Server Running");
});

// Login Route (Generates Token)
app.get("/login", (req, res) => {

    const user = {
        id: 1,
        name: "Atharv"
    };

    const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });

    res.json({
        token
    });

});

// Protected Route
app.get("/dashboard", requireAuth, (req, res) => {

    res.json({
        message: "Welcome!",
        user: req.user
    });

});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});