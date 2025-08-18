export const chatbotData = {
  admin: {
    qa: [
      {
        question: "How many active users do we have?",
        answer: "Currently, you have 892 active users out of 1,250 total users.",
        showChart: false
      },
      {
        question: "What's our overall completion rate?",
        answer: "Your overall course completion rate is 78.5%.",
        showChart: false
      },
      {
        question: "Show weekly user activity chart",
        answer: "Here's your weekly user activity chart:",
        showChart: true,
        chartType: "line",
        chartData: "weeklyUserActivity",
        chartTitle: "Weekly User Activity"
      },
      {
        question: "Show course completion rates chart",
        answer: "Here are the completion rates for your courses:",
        showChart: true,
        chartType: "bar",
        chartData: "courseCompletionRates",
        chartTitle: "Course Completion Rates"
      },
      {
        question: "How much revenue did we generate this month?",
        answer: "This month's revenue is $12,500, bringing your total revenue to $156,000.",
        showChart: false
      },
      // Additional variations for better matching
      {
        question: "weekly user activity",
        answer: "Here's your weekly user activity chart:",
        showChart: true,
        chartType: "line",
        chartData: "weeklyUserActivity",
        chartTitle: "Weekly User Activity"
      },
      {
        question: "course completion rates",
        answer: "Here are the completion rates for your courses:",
        showChart: true,
        chartType: "bar",
        chartData: "courseCompletionRates",
        chartTitle: "Course Completion Rates"
      }
    ]
  },
  student: {
    qa: [
      {
        question: "What's my current progress?",
        answer: "Your overall grade is 88.5% and you've completed 59 hours of learning.",
        showChart: false
      },
      {
        question: "Show weekly progress chart",
        answer: "Here's your weekly learning progress:",
        showChart: true,
        chartType: "line",
        chartData: "weeklyProgress",
        chartTitle: "Weekly Learning Progress"
      },
      {
        question: "What are my upcoming deadlines?",
        answer: "You have 3 upcoming deadlines. Check your dashboard for details.",
        showChart: false
      },
      {
        question: "Show course progress chart",
        answer: "Here's your course progress overview:",
        showChart: true,
        chartType: "bar",
        chartData: "currentCourses",
        chartTitle: "Course Progress"
      },
      {
        question: "What's my quiz history?",
        answer: "You've taken 4 quizzes with an average score of 90%.",
        showChart: false
      },
      {
        question: "weekly progress",
        answer: "Here's your weekly learning progress:",
        showChart: true,
        chartType: "line",
        chartData: "weeklyProgress",
        chartTitle: "Weekly Learning Progress"
      },
      {
        question: "course progress",
        answer: "Here's your course progress overview:",
        showChart: true,
        chartType: "bar",
        chartData: "currentCourses",
        chartTitle: "Course Progress"
      }
    ]
  }
};

export const chartConfigs = {
  weeklyUserActivity: {
    xAxis: "week",
    yAxis: "users",
    dataKey: "users",
    stroke: "#3B82F6",
    fill: "#DBEAFE"
  },
  courseCompletionRates: {
    xAxis: "course",
    yAxis: "rate",
    dataKey: "rate",
    fill: "#10B981",
    stroke: "#059669"
  },
  weeklyProgress: {
    xAxis: "week",
    yAxis: "hours",
    dataKey: "hours",
    stroke: "#8B5CF6",
    fill: "#DDD6FE"
  },
  currentCourses: {
    xAxis: "name",
    yAxis: "progress",
    dataKey: "progress",
    fill: "#F59E0B",
    stroke: "#D97706"
  }
}; 