import {  useState } from "react";
import toast from "react-hot-toast";
import { useAuthcontext } from "../context/authContext";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
   const{setAuthUser} = useAuthcontext()
    const login = async ({email, password}) => {
        if( !email || !password){
            toast.error("Please fill all fields")
            return false
        }
        setLoading(true);
      try {
        let res = await fetch("/api/v1/auth/login", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               email,
               password
            })
        });
        let data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        localStorage.setItem("user", JSON.stringify(data.user))
        setAuthUser(data);
        toast.success(data.message);
        return true;
      } catch (error) {
        toast.error(error.message);
        return false;
      }finally{
        setLoading(false);
      }
    };

  return { loading, login };
};
