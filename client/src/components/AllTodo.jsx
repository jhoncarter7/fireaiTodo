
function AllTodo() {
  return (
    <div className="bg-red-200 w-[100%] sm:w-[90%] md:w-2/3  mx-auto px-4 md:px-8"
    >
        <h2 className="text-lg font-semibold mb-2 ">All Todos</h2>
        <ul>
            <li className="flex justify-between items-center border-b py-2 bg-red-300">
            <div className="w-[70%]" >
                <h3 className="font-semibold mb-1">Title</h3>
                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ut nostrum unde quo provident, dolorum ad maxime odit dignissimos aspernatur sequi. Fugiat, dolorem animi labore praesentium nihil similique! Vel, culpa!</p>
            </div>
            <div>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2">Edit</button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2">view</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
            </div>
            </li>
        </ul>
    </div>
  )
}

export default AllTodo