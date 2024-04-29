import { useState } from "react";
import TodoForm from "../components/TodoForm";
import AllTodo from "../components/AllTodo";
import EditForm from "../components/EditForm";
import { useAuthcontext } from "../context/authContext";
import ViewDetails from "../components/ViewDetails";
import Logout from "./Logout";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  const {editTodo} = useAuthcontext()

  const handleOpenPopup = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

//  useEffect(() => {
  
//  }, [isEdit])

  return (
    <>
    <div  className="pt-4">
    <Logout/>
    </div>
    <div className="sm:p-4 flex flex-col justify-center ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-48 mx-auto mb-4"
        onClick={handleOpenPopup}
      >
        Add Todo
      </button>
      <AllTodo setIsEdit= {setIsEdit} setIsView= {setIsView}/>
      {isOpen && <TodoForm handleClosePopup={handleClosePopup} />}
      {isEdit && <EditForm  setIsEdit= {setIsEdit} id={editTodo?.id} title={editTodo?.title} description={editTodo?.description}/>}
      {isView && <ViewDetails  setIsView= {setIsView} id={editTodo?.id} title={editTodo?.title} description={editTodo?.description} status={editTodo?.status}/>}
    </div>
    
    </>
  );
};

export default Home;
