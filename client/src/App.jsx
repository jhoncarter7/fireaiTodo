import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { Toaster } from 'react-hot-toast';
import { useAuthcontext } from "./context/authContext";
function App() {
  const {authUser} = useAuthcontext()
  return (
    <> 
    <Routes>
      <Route path="/" element={authUser? <Home/> : <Navigate to={"/login"}/>}/>
      <Route path="/login" element={authUser ? <Navigate to={"/"}/> :<Login/>}/>
      <Route path="/signup" element={authUser ? <Navigate to={"/"}/> : <Signup/>}/>
      
    </Routes>
    <Toaster
    position="top-center"
    reverseOrder={false}
  />
  </>
  )
}

export default App