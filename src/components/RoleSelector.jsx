import { useRole } from '../contexts/RoleContext';
import { getCurrentUser } from '../data/users';

const RoleSelector = () => {
  const { setRole } = useRole();

  const handleRoleSelect = (role) => {
    const user = getCurrentUser(role);
    setRole(role, user);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-300/50 to-purple-300/50 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-300/50 to-yellow-300/50 blur-3xl"></div>
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-gradient-to-b from-amber-200/20 via-fuchsia-200/20 to-indigo-200/10 blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-2xl">
        <div className="p-[1px] rounded-3xl bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-400 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.35)]">
          <div className="bg-white/80 backdrop-blur-md rounded-[calc(1.5rem-1px)] shadow-2xl border border-white/60">
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-soft mb-4">📘</div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent">Welcome to LMS</h1>
              <p className="text-gray-600">Choose how you want to explore the platform</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <button
                onClick={() => handleRoleSelect('admin')}
                className="group text-left rounded-2xl border border-gray-100 bg-white hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all p-5 shadow-sm hover:shadow-md focus:outline-none ring-1 ring-transparent hover:ring-indigo-300/60 hover:ring-offset-2"
                aria-label="Continue as Administrator"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">👨‍💼</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700">Administrator</h3>
                      <p className="text-sm text-gray-600">Manage courses, users, and analytics</p>
                    </div>
                  </div>
                  <span className="text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">Start →</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-100">Advanced</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-50 to-fuchsia-50 text-purple-700 border border-purple-100">Analytics</span>
                </div>
                <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button
                onClick={() => handleRoleSelect('student')}
                className="group text-left rounded-2xl border border-gray-100 bg-white hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all p-5 shadow-sm hover:shadow-md focus:outline-none ring-1 ring-transparent hover:ring-emerald-300/60 hover:ring-offset-2"
                aria-label="Continue as Student"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">👨‍🎓</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700">Student</h3>
                      <p className="text-sm text-gray-600">Access courses and track progress</p>
                    </div>
                  </div>
                  <span className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">Start →</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-100">Guided</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border border-emerald-100">Progress</span>
                </div>
                <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <p>Your choice will be remembered for your next visit.</p>
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Demo Mode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector; 