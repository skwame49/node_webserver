const { request } = require('express');
const userModel = require('../models/userModel');

const addUser = () => {
    userModel.create(request.body);
}

const getAllUser = () => {}

const deleteUserById = () => {}

const getUserById = () => {}

const updateUserById = () => {}

module.exports = {
    addUser,
    deleteUserById,
    getAllUser, 
    getUserById, 
    updateUserById
}