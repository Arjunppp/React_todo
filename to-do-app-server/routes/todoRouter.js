import express from 'express';
import * as todoController from '../controllers/toDoController.js'

export const toDoRouter = express.Router();


toDoRouter.route('/').get(todoController.handleGetAllTodo).post(todoController.handleCreateTodo)