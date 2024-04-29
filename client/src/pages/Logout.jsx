
function Logout() {

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.reload();
    
    }

  return (
    <button onClick={handleLogout}
    className="bg-gray-800 w-14 rounded-md text-white">Logout</button>
  )
}

export default Logout