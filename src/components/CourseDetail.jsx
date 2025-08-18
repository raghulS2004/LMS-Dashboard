import { Link, useParams, useNavigate } from 'react-router-dom';
import { studentDashboardData } from '../data/studentData';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = studentDashboardData.currentCourses.find(c => String(c.id) === String(id));

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-gray-700">Course not found.</p>
            <div className="mt-4 flex gap-3">
              <button onClick={() => navigate(-1)} className="px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">Go Back</button>
              <Link to="/courses" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">All Courses</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">{course.name}</h1>
            <p className="text-gray-600">Instructor: {course.instructor}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/courses"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              ← All Courses
            </Link>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Progress</h2>
              <div className="mb-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">{course.completedModules} of {course.totalModules} modules completed</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Syllabus</h2>
              <ul className="space-y-3">
                {Array.from({ length: course.totalModules }).map((_, idx) => {
                  const isDone = idx < course.completedModules;
                  return (
                    <li key={idx} className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full border ${isDone ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300'}`}></span>
                      <span className={`text-sm ${isDone ? 'text-gray-500 line-through' : 'text-gray-800'}`}>Module {idx + 1}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Details</h2>
              <div className="text-sm text-gray-600 space-y-2">
                <p><span className="text-gray-500">Course:</span> {course.name}</p>
                <p><span className="text-gray-500">Instructor:</span> {course.instructor}</p>
                <p><span className="text-gray-500">Next Deadline:</span> {course.nextDeadline}</p>
                <p><span className="text-gray-500">Progress:</span> {course.progress}%</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Actions</h2>
              <div className="flex flex-col gap-3">
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">Continue Course</button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors">View Resources</button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors">Contact Instructor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;


