import React from "react";

function ViewDetails({ title, description, status, setIsView}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded w-[70%] md:w-[50%] ">
        <h2 className="text-lg font-semibold mb-4">View Todo</h2>
        <div className="mb-4">
          <label htmlFor="" className="block mb-1">
            Title:
          </label>
          <h2 className="w-full border rounded px-3 py-2">{title}</h2>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">
            Description:
          </label>
          <textarea rows="6"  className="w-full border rounded px-3 py-2">{description}</textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block mb-1">
            status:
          </label>
          <h2 className="w-full border rounded px-3 py-2">{status}</h2>
        </div>
        <div className="text-right">
          <button onClick={()=> setIsView(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
