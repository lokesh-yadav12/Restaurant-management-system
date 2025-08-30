import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // load auth state from localStorage (if user refreshes, session persists)
  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("rm_user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user?.token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
      localStorage.setItem("rm_user", JSON.stringify(user));
    } else {
      delete api.defaults.headers.common["Authorization"];
      localStorage.removeItem("rm_user");
    }
  }, [user]);

  //const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, setUser,login,isLoggedIn, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
