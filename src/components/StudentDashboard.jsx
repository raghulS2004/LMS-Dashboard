import { studentDashboardData } from '../data/studentData';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link, useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Learning Dashboard</h1>
          <p className="text-gray-600">Track your progress and stay on top of your learning journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overall Grade</p>
                <p className="text-2xl font-bold text-gray-900">{studentDashboardData.overallGrade}%</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <span className="text-2xl">📚</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Hours</p>
                <p className="text-2xl font-bold text-gray-900">{studentDashboardData.totalHours}h</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <span className="text-2xl">⏰</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Courses</p>
                <p className="text-2xl font-bold text-gray-900">{studentDashboardData.currentCourses.length}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Certificates</p>
                <p className="text-2xl font-bold text-gray-900">{studentDashboardData.certificatesEarned}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <span className="text-2xl">🏆</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Learning Progress</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={studentDashboardData.weeklyProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  fill="#DDD6FE"
                />
                <Line 
                  type="monotone" 
                  dataKey="modules" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  fill="#FED7AA"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Course Progress Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={studentDashboardData.currentCourses}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="progress" fill="#F59E0B" stroke="#D97706" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Current Courses</h3>
            <Link to="/courses" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">View all</Link>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentDashboardData.currentCourses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => navigate(`/courses/${course.id}`)}
                  className="group text-left bg-gray-50 rounded-xl p-4 border border-gray-100 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{course.name}</h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{course.progress}%</span>
                  </div>
                  <div className="mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Modules: {course.completedModules}/{course.totalModules}</p>
                    <p>Instructor: {course.instructor}</p>
                    <p>Next Deadline: {course.nextDeadline}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-end text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    View details →
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">Upcoming Deadlines</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assignment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentDashboardData.upcomingDeadlines.map((deadline, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {deadline.course}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {deadline.assignment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {deadline.dueDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(deadline.priority)}`}>
                        {deadline.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">Recent Activities</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {studentDashboardData.recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    {activity.action} in <span className="font-medium text-gray-800">{activity.course}</span>
                  </span>
                  <span className="text-xs text-gray-400 ml-auto">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard; 