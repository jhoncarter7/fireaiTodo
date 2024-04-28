import { useContext, createContext, useState } from "react";

const AuthContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
const useAuthcontext = () => {
  return useContext(AuthContext);
};

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const [triggerFetch, setTriggerFetch] = useState(false);
  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, triggerFetch, setTriggerFetch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthcontext };