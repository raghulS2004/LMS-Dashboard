export const studentDashboardData = {
  currentCourses: [
    {
      id: 1,
      name: "React Fundamentals",
      progress: 75,
      totalModules: 12,
      completedModules: 9,
      nextDeadline: "2024-01-25",
      instructor: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      name: "JavaScript ES6+",
      progress: 45,
      totalModules: 8,
      completedModules: 4,
      nextDeadline: "2024-01-30",
      instructor: "Prof. Mike Chen"
    },
    {
      id: 3,
      name: "CSS Grid & Flexbox",
      progress: 90,
      totalModules: 6,
      completedModules: 5,
      nextDeadline: "2024-01-28",
      instructor: "Ms. Emily Davis"
    }
  ],
  
  upcomingDeadlines: [
    { course: "React Fundamentals", assignment: "Final Project", dueDate: "2024-01-25", priority: "high" },
    { course: "JavaScript ES6+", assignment: "Module 5 Quiz", dueDate: "2024-01-30", priority: "medium" },
    { course: "CSS Grid & Flexbox", assignment: "Portfolio Submission", dueDate: "2024-01-28", priority: "high" }
  ],
  
  quizHistory: [
    { course: "React Fundamentals", quiz: "Components & Props", score: 92, date: "2024-01-15" },
    { course: "React Fundamentals", quiz: "State & Lifecycle", score: 88, date: "2024-01-10" },
    { course: "JavaScript ES6+", quiz: "ES6 Features", score: 85, date: "2024-01-12" },
    { course: "CSS Grid & Flexbox", quiz: "Grid Layout", score: 95, date: "2024-01-08" }
  ],
  
  weeklyProgress: [
    { week: "Week 1", hours: 12, modules: 2 },
    { week: "Week 2", hours: 15, modules: 3 },
    { week: "Week 3", hours: 18, modules: 4 },
    { week: "Week 4", hours: 14, modules: 3 }
  ],
  
  overallGrade: 88.5,
  totalHours: 59,
  certificatesEarned: 2,
  
  recentActivities: [
    { action: "Completed module", course: "React Fundamentals", time: "2 hours ago" },
    { action: "Submitted assignment", course: "JavaScript ES6+", time: "1 day ago" },
    { action: "Took quiz", course: "CSS Grid & Flexbox", time: "2 days ago" },
    { action: "Started new course", course: "Node.js Backend", time: "3 days ago" }
  ]
}; 