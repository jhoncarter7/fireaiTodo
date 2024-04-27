import { AllTodo } from "../models/Todo.model.js";
import { User } from "../models/users.model.js";
import ApiError from "../utils/ApiError.js";

const auth = async (req, _) => {
  try {
    const id = req.cookies?.user._id;
    if (!id) {
      throw new ApiError(401, "Unauthorized");
    }

    const user = await User.findById(id);
    if (!user) {
      throw new ApiError(401, "Unauthorized");
    }
  
  } catch (error) {
    throw new ApiError(401, error?.message || "Unauthorized");
  }
};

 const createTodo = async (req, res) => {
  try {
    auth(req);

    const { title, description, status } = req.body;

    if ([title, description].some((field) => field?.trim() === "")) {
      throw new Error("All fields are required");
    }

    const availableTodo = await AllTodo.findOne({
      owner: req.cookies.user._id,
    });

    let creatingTodo;
    if (!availableTodo) {
      creatingTodo = await AllTodo.create({
        todos: [{ title, description, status }],
        owner: req.cookies.user._id,
      });
    }

    availableTodo.todos.push({ title, description, status });

    await availableTodo?.save({ new: true });
    return res.status(201).json({ message: "Todo created", creatingTodo });
  } catch (error) {
    throw new Error(error);
  }
};

 const getTodods = async (req, res) => {
  try {
    auth(req);

    const todos = await AllTodo.find({ owner: req.cookies.user._id });

    if (!todos) {
      throw new ApiError(404, "No todos found");
    }

    return res.status(200).json({ todos });
  } catch (error) {
    throw new ApiError(400, error?.message || "Something went wrong");
  }
};

 const updateTodo = async (req, res) => {
  auth(req);
  try {
    const { todoId } = req.params;
   
      
    const { title, description, status } = req.body;

    if (!todoId) {
      throw new ApiError(400, "first select a todo");
    }

    const ListOfTodos = await AllTodo.updateOne(
        { "owner": req.cookies.user._id, "todos._id": todoId },
        { $set: {"todos.$.title": title, "todos.$.description": description, "todos.$.status": status } }
    );

    if (!ListOfTodos) {
      throw new ApiError(404, "No todo found");
    }


    return res.status(200).json({ message: "Todo updated", ListOfTodos });
  } catch (error) {
    throw new ApiError(400, error?.message || "Something went wrong");
  }
};

const deleteTodo = async(req, res)=> {
    auth(req);
 try {
    const {todoId} = req.params;

    if(!todoId){
        throw new ApiError(400, "first select a todo")
    }
    const deleteTodo = await AllTodo.updateOne(
        {"owner": req.cookies.user._id},
        {$pull: {"todos": {_id: todoId}}}
    )
    if(!deleteTodo){
        throw new ApiError(404, "promblem deleting todo")
    }
    return res.status(200).json({message: "Todo deleted", deleteTodo})
 } catch (error) {
    throw new ApiError(400, error?.message || "Something went wrong")
 }
}

export { createTodo, getTodods, updateTodo, deleteTodo };