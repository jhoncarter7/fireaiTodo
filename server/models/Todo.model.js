import { Schema, model } from "mongoose"
const todoSchema = new Schema({
    title:{
        type: String,
        required: true,
        index: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        default: "pending"
    },
    

}, {timestamps: true})


const AllTodoSchema = new Schema({
    todos: [todoSchema],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

export const AllTodo = model("AllTodo", AllTodoSchema)