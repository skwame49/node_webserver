const express = require("express");
const mongoose = require('mongoose');
const userController = require('./controllers/userControllers');

mongoose.connect( 'mongodb+srv://skwame:7Bjx55sinzdPWb3@cluster0.yn34x.mongodb.net/rentease?retryWrites=true&w=majority')
.then(()=>{
    console.log('DB is connect');
})
.catch((error)=>{
    console.log('DB not connected', error.message);
})
const server = express();
server.post('/uers', userController.addUser);
server.get('/users', userController.getAllUser);
server.delete('/users/:id', userController.deleteUserById );
server.put('/users/:id', userController.updateUserById);
server.get('/users/:id', userController.getUserById);


server.listen(3001);
