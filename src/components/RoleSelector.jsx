import { useRole } from '../contexts/RoleContext';
import { getCurrentUser } from '../data/users';

const RoleSelector = () => {
  const { setRole } = useRole();

  const handleRoleSelect = (role) => {
    const user = getCurrentUser(role);
    setRole(role, user);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome to LMS
          </h1>
          <p className="text-gray-600">
            Select your role to continue
          </p>
        </div>

        <div className="space-y-4">
          {/* Admin Role Option */}
          <button
            onClick={() => handleRoleSelect('admin')}
            className="w-full p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-3xl">👨‍💼</span>
              <div className="text-left">
                <h3 className="text-xl font-semibold">Administrator</h3>
                <p className="text-blue-100 text-sm">
                  Manage courses, users, and analytics
                </p>
              </div>
            </div>
          </button>

          {/* Student Role Option */}
          <button
            onClick={() => handleRoleSelect('student')}
            className="w-full p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-3xl">👨‍🎓</span>
              <div className="text-left">
                <h3 className="text-xl font-semibold">Student</h3>
                <p className="text-green-100 text-sm">
                  Access courses and track progress
                </p>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            This is a demo application with mock data
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector; 