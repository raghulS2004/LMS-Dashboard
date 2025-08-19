import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { RoleProvider, useRole } from './contexts/RoleContext';
import RoleSelector from './components/RoleSelector';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import ChatbotModal from './components/ChatbotModal';
import CoursesPage from './components/CoursesPage';
import CourseDetail from './components/CourseDetail';
import { useState } from 'react';

const AppContent = () => {
  const { currentRole, currentUser, clearRole } = useRole();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  if (!currentRole) {
    return <RoleSelector />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-800">
                LMS Dashboard
              </h1>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {currentRole === 'admin' ? 'Administrator' : 'Student'}
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              {currentRole === 'student' && (
                <Link
                  to="/courses"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Courses
                </Link>
              )}
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{currentUser?.avatar}</span>
                <span className="text-sm font-medium text-gray-700">
                  {currentUser?.name}
                </span>
              </div>
              <button
                onClick={() => setIsChatbotOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <span className="mr-2">🤖</span>
                Ask Assistant
              </button>
              <button
                onClick={clearRole}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              currentRole === 'admin' ? (
                <AdminDashboard />
              ) : (
                <StudentDashboard />
              )
            } 
          />
          {currentRole === 'student' && (
            <>
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <ChatbotModal 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
      />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <RoleProvider>
        <AppContent />
      </RoleProvider>
    </Router>
  );
};

export default App;
