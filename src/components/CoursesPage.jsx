import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Users, Star, ArrowRight } from 'lucide-react';
import { studentDashboardData } from '../data/studentData';

const CoursesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState('name');

  const courses = studentDashboardData.currentCourses;

  const filteredCourses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const base = q
      ? courses.filter(c =>
          c.name.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q)
        )
      : courses;

    const sorted = [...base].sort((a, b) => {
      if (sortKey === 'name') return a.name.localeCompare(b.name);
      if (sortKey === 'progress') return b.progress - a.progress;
      if (sortKey === 'deadline') return new Date(a.nextDeadline) - new Date(b.nextDeadline);
      return 0;
    });
    return sorted;
  }, [courses, searchQuery, sortKey]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="w-7 h-7 text-blue-600" />
              Your Courses
            </h1>
            <p className="text-gray-600">Browse, filter, and dive deeper into your active courses</p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            ← Back to Dashboard
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6 mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by course or instructor..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Sort by</label>
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Name</option>
                <option value="progress">Progress</option>
                <option value="deadline">Next Deadline</option>
              </select>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCourses.map((course) => (
            <motion.button
              key={course.id}
              onClick={() => navigate(`/courses/${course.id}`)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.995 }}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              className="group text-left bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {course.name}
                </h3>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                  {course.progress}%
                </span>
              </div>
              <div className="mb-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex items-center gap-2"><Users className="w-4 h-4 text-gray-400" />Modules: {course.completedModules}/{course.totalModules}</div>
                <div className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-500" />Instructor: {course.instructor}</div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-500" />Next Deadline: {course.nextDeadline}</div>
              </div>
              <div className="mt-4 flex items-center justify-end text-blue-600">
                <span className="inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesPage;


