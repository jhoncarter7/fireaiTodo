import useDeleteTodo from "../Hooks/useDeleteTodo";
import useUpdateTodo from "../Hooks/useUpdateTodo";
import { useAuthcontext } from "../context/authContext";
import PropTypes from "prop-types";
import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";

AllTodo.propTypes = {
  setIsEdit: PropTypes.func,
  setIsView: PropTypes.func,
  AllTodos: PropTypes.array,
};
function AllTodo({ setIsEdit, setIsView, AllTodos }) {
  const { setTriggerFetch, setEditTodo } = useAuthcontext();

  const { deleteTodo } = useDeleteTodo();
  const { updateTodo } = useUpdateTodo();
   const [items, setItems] = useState([]);
  useEffect(()=>{
    setItems(AllTodos[0]?.todos)
  
  }, [AllTodos])
   console.log(items)
  // to edit todo a pop up will open
  const handleEditPopUp = (title, description, id) => {
    setEditTodo({
      title,
      description,
      id,
    });
    setIsEdit(true);
  };

  const changeStatus = (e, todoId, title, description, status) => {
    if (e.target.checked) {
      updateTodo({
        title,
        description,
        todoId,
        status: "completed",
      });
    } else {
      updateTodo({
        title,
        description,
        todoId,
        status: "pending",
      });
    }
  };

  // for view todo a pop up will open
  const handleViewPopUp = (id, title, description, status) => {
    setIsView(true);
    setEditTodo({ id, title, description, status });
  };

  return (
    <div className="bg-[#0f172a] w-[100%]  md:w-[95%] lg:w-2/3  mx-auto px-4 md:px-8">
     
        <h2 className="text-lg font-semibold mb-2  text-white text-center">All Todos</h2>
        {items ?
         <Reorder.Group axis="y" values={items} onReorder={setItems}>
        
          {items.map((t) => (
            <Reorder.Item key={t._id} value={t}>
              <ul className="grid grid-cols-12 mb-4">
                <input
                  type="checkbox"
                  checked={t?.status == "completed" ? true : false}
                  onChange={(e) =>
                    changeStatus(e, t._id, t.title, t.description, t.status)
                  }
                  className="inline-flex w-4"
                />
                <li className="flex justify-between items-center border-b py-2 bg-[#1e40af] rounded-md p-2 col-span-11">
                  <div className="w-[50%] md:w-[70%] text-white">
                    <h3 className="font-semibold mb-1 text-slate-200 uppercase">
                      {t.title}
                    </h3>
                    <p className="text-sm  text-wrap line-clamp-1	">
                      {t.description}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        handleEditPopUp(t.title, t.description, t._id)
                      }
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        handleViewPopUp(t._id, t.title, t.description, t.status)
                      }
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                    >
                      view
                    </button>
                    <button
                      onClick={() => {
                        deleteTodo(t._id);
                        setTriggerFetch((prev) => !prev);
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </ul>
            </Reorder.Item>
          ))
}
        </Reorder.Group>: (
          <h1>Loading...</h1>
        )}
     
    </div>
  );
}

export default AllTodo;
