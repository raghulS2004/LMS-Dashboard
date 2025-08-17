// Mock user data for the LMS application
export const users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@lms.com",
    role: "admin",
    avatar: "👨‍💼"
  },
  {
    id: 2,
    name: "Student User",
    email: "student@lms.com",
    role: "student",
    avatar: "👨‍🎓"
  }
];

export const getCurrentUser = (role) => {
  return users.find(user => user.role === role);
}; 