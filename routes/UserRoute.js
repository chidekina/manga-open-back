const express = require('express');
const UserController = require('../controllers/UserController');

const UserRouter = express.Router();

const userController = new UserController();

UserRouter.get('/users', userController.getAll);

UserRouter.get('/users/:id', userController.getById);

UserRouter.post('/users', userController.create);

UserRouter.put('/users/:id', userController.update);

UserRouter.delete('/users/:id', userController.delete);

module.exports = UserRouter;