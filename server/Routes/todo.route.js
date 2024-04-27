import { Router } from "express";
import { createTodo, deleteTodo, getTodods, updateTodo } from "../controllers/Todo.controller.js";

const route = Router();

route.post('/createTodo', createTodo)
route.get('/getTodos', getTodods)
route.patch('/updateTodo/:todoId', updateTodo)
route.delete('/deleteTodo/:todoId', deleteTodo)

export default route;