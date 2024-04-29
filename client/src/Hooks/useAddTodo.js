import toast from "react-hot-toast"


const useAddTodo = () => {
    
    const AddTodo = async(title, description) => {
   try {
    const res = await fetch('api/v1/todo/createTodo', {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            description,
        })
    })

    const data = await res.json()
    if(data.error){
        throw new Error(data.error)
    }
    toast.success(data.message)
   } catch (error) {
    toast.error(error.message)
    return false
   }
    }
return {AddTodo}
}

export default useAddTodo;