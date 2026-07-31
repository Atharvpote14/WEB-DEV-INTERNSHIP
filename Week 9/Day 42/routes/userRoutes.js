const express = require("express");

const router = express.Router();

const {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");


// Create User
router.post("/", createUser);

// Get All Users
router.get("/", getUsers);

// Get Single User
router.get("/:id", getUser);

// Update User
router.put("/:id", updateUser);

// Delete User
router.delete("/:id", deleteUser);

module.exports = router;