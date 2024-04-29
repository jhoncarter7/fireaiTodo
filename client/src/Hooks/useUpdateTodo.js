import toast from "react-hot-toast";

const useUpdateTodo = () => {
  const updateTodo = async ({title, description, todoId, status}) => {
    console.log(todoId, title, description)
  
    try {
      const res = await fetch(`/api/v1/todo/updateTodo/${todoId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          status: status? status :"pending",
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };
  return { updateTodo };
};

export default useUpdateTodo;