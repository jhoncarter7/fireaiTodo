import  { useState } from 'react'
import PropTypes from 'prop-types';
import useUpdateTodo from '../Hooks/useUpdateTodo';

function EditForm({ setIsEdit, id, title, description}) {

EditForm.propTypes = {
    setIsEdit: PropTypes.func.isRequired,
};

const {updateTodo} = useUpdateTodo()

    const [input, setInput] = useState({
        title,
        description,
        status: "pending",
    });
  
    const handleSubmit = (e) => {
        e.preventDefault();
        updateTodo({title: input.title, description: input.description, todoId: id})
        setIsEdit(false);
    }
    const handleClosePopup = () => {
        setIsEdit(false);
    }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded w-[70%] md:w-[50%]">
      <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-4">Edit Todo</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={input.title}
            onChange={(e) => setInput({...input, title: e.target.value})}
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
            rows="5"
            value={input.description}
            onChange={(e) => setInput({...input, description: e.target.value})}
            className="w-full border rounded px-3 py-2 h"
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
  )
}

export default EditForm