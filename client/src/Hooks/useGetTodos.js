import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthcontext } from "../context/authContext";

export const useGetTodos = () => {
  const [loading, setLoading] = useState(false);
  const [AllTodos, setAllTodos] = useState([]);
  const {triggerFetch} = useAuthcontext()
  useEffect(() => {
    const getTodos = async () => {
        setLoading(true);
      try {
        let res = await fetch("/api/v1/todo/getTodos");
        let data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setAllTodos(data.todos);
      } catch (error) {
        toast.error(error.message);
        return false;
      }finally{
        setLoading(false);
      }
    };
    getTodos();
    
  }, [triggerFetch]);

  return { loading, AllTodos };
};
