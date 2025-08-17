import { createContext, useContext, useState, useEffect } from 'react';

// Create the role context
const RoleContext = createContext();

// Custom hook to use the role context
export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};

// Role provider component
export const RoleProvider = ({ children }) => {
  const [currentRole, setCurrentRole] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // Load role from localStorage on component mount
  useEffect(() => {
    const savedRole = localStorage.getItem('lms-role');
    if (savedRole) {
      setCurrentRole(savedRole);
    }
  }, []);

  // Update localStorage when role changes
  useEffect(() => {
    if (currentRole) {
      localStorage.setItem('lms-role', currentRole);
    }
  }, [currentRole]);

  // Function to set role and user
  const setRole = (role, user) => {
    setCurrentRole(role);
    setCurrentUser(user);
  };

  // Function to clear role (logout)
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