import { useState } from "react";
import useAddTodo from "../Hooks/useAddTodo";
import { useAuthcontext } from "../context/authContext";

// eslint-disable-next-line react/prop-types
function TodoForm({ handleClosePopup }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {AddTodo} = useAddTodo()
  const {setTriggerFetch} = useAuthcontext()  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    AddTodo(title, description)
    setTriggerFetch(prev => !prev)
    setTitle("");
    setDescription("");
    handleClosePopup();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded">
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold mb-4">Add Todo</h2>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-1">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-1">
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="text-right">
            <button
              type="button"
              onClick={() => handleClosePopup()}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
