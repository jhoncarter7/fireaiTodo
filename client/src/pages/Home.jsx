import { useState } from "react";
import TodoForm from "../components/TodoForm";
import AllTodo from "../components/AllTodo";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="sm:p-4 flex flex-col justify-center ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-48 mx-auto mb-4"
        onClick={handleOpenPopup}
      >
        Add Todo
      </button>
      <AllTodo/>
      {isOpen && <TodoForm handleClosePopup={handleClosePopup} />}
    </div>
  );
};

export default Home;
