const User = require("../models/User");

// Create User
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            success: true,
            user
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }
};

// Get All Users
const getUsers = async (req, res) => {
    try {

        const users = await User.find();

        res.status(200).json({
            success: true,
            users
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get Single User
const getUser = async (req, res) => {
    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Update User
const updateUser = async (req, res) => {
    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {

        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};