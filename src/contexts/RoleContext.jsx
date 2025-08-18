import { createContext, useContext, useState, useEffect } from 'react';

const RoleContext = createContext();

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) throw new Error('useRole must be used within a RoleProvider');
  return context;
};

export const RoleProvider = ({ children }) => {
  const [currentRole, setCurrentRole] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const savedRole = localStorage.getItem('lms-role');
    if (savedRole) {
      setCurrentRole(savedRole);
    }
  }, []);
  useEffect(() => {
    if (currentRole) {
      localStorage.setItem('lms-role', currentRole);
    }
  }, [currentRole]);
  const setRole = (role, user) => {
    setCurrentRole(role);
    setCurrentUser(user);
  };
  const clearRole = () => {
    setCurrentRole(null);
    setCurrentUser(null);
    localStorage.removeItem('lms-role');
  };

  const value = {
    currentRole,
    currentUser,
    setRole,
    clearRole,
    isAuthenticated: !!currentRole
  };

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  );
}; 