import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, Clock, BadgeCheck, ChevronLeft } from 'lucide-react';
import { studentDashboardData } from '../data/studentData';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = studentDashboardData.currentCourses.find(c => String(c.id) === String(id));

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-gray-700">Course not found.</p>
            <div className="mt-4 flex gap-3">
              <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
                <ChevronLeft className="w-4 h-4" /> Go Back
              </button>
              <Link to="/courses" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">All Courses</Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="w-7 h-7 text-blue-600" /> {course.name}
            </h1>
            <p className="text-gray-600 flex items-center gap-2"><User className="w-4 h-4" /> Instructor: {course.instructor}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/courses" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-4 h-4" /> All Courses
            </Link>
            <Link to="/" className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 transition-colors">Dashboard</Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-green-600" /> Progress</h2>
              <div className="mb-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">{course.completedModules} of {course.totalModules} modules completed</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.05 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-blue-600" /> Syllabus</h2>
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
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Details</h2>
              <div className="text-sm text-gray-700 space-y-3">
                <div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-blue-600" /> {course.name}</div>
                <div className="flex items-center gap-2"><User className="w-4 h-4 text-gray-500" /> {course.instructor}</div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-500" /> Next Deadline: {course.nextDeadline}</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-purple-500" /> Progress: {course.progress}%</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.15 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Actions</h2>
              <div className="flex flex-col gap-3">
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">Continue Course</button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors">View Resources</button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors">Contact Instructor</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;


