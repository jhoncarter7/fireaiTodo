
import useDeleteTodo from "../Hooks/useDeleteTodo";
import { useGetTodos } from "../Hooks/useGetTodos";
import { useAuthcontext } from "../context/authContext";

function AllTodo() {
  const {setTriggerFetch} = useAuthcontext()
  const { AllTodos } = useGetTodos();
  const { deleteTodo } = useDeleteTodo();

  let todos = AllTodos[0]?.todos;

  return (
    <div className="bg-[#0f172a] w-[100%] sm:w-[90%] md:w-2/3  mx-auto px-4 md:px-8">
      <h2 className="text-lg font-semibold mb-2  text-white">All Todos</h2>
      {todos ? (
        todos.map((t) => (
          <ul key={t._id} className=" mb-4">
            <li className="flex justify-between items-center border-b py-2 bg-[#1e40af] rounded-md p-2">
              <div className="w-[70%] text-white">
                <h3 className="font-semibold mb-1 text-slate-200 uppercase">
                  {t.title}
                </h3>
                <p className="text-sm  text-wrap line-clamp-1	">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  ut nostrum unde quo provident, dolorum ad maxime odit
                  dignissimos aspernatur sequi. Fugiat, dolorem animi labore
                  praesentium nihil similique! Vel, culpa!
                </p>
              </div>
              <div>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2">
                  Edit
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2">
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
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default AllTodo;
