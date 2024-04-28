import toast from "react-hot-toast"

const useDeleteTodo = () =>{
  
    const deleteTodo = async(todoId) =>{
        try {
            const res = await fetch(`/api/v1/todo/deleteTodo/${todoId}`, {
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json"
                }
            
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            toast.success(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }
    return {deleteTodo}
}

export default useDeleteTodo;