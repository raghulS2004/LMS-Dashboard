# Role-Based Learning Management System (LMS) Frontend

A modern, responsive Learning Management System frontend built with React, Vite, and Tailwind CSS. This application demonstrates role-based access control with separate dashboards for Administrators and Students, featuring interactive charts, chatbot assistance, and comprehensive learning analytics.

## 🚀 Features

### **Role-Based Access Control**
- **Administrator Dashboard**: Monitor organizational metrics, user engagement, and course performance
- **Student Dashboard**: Track learning progress, upcoming deadlines, and course completion
- **Session Management**: Persistent role selection with localStorage

### **Interactive Dashboards**
- **Admin Features**:
  - User analytics and engagement metrics
  - Course completion rates and revenue tracking
  - Weekly user activity charts
  - Course enrollment data tables
  
- **Student Features**:
  - Course progress tracking with visual indicators
  - Upcoming deadlines and priority management
  - Weekly learning progress charts
  - Quiz history and performance metrics

### **AI-Powered Chatbot Assistant**
- Role-specific Q&A responses
- Inline chart rendering within conversations
- Suggested questions for quick access
- Real-time chat interface

### **Data Visualization**
- Interactive charts using Recharts library
- Responsive design for all screen sizes
- Color-coded metrics and progress indicators
- Tabular data with sorting and filtering

### **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interface elements
- Adaptive layouts for all breakpoints

## 🛠️ Technology Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Charts**: Recharts
- **Routing**: React Router DOM
- **State Management**: React Context API
- **CSS Processing**: PostCSS with Autoprefixer

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── RoleSelector.jsx     # Role selection interface
│   ├── AdminDashboard.jsx   # Administrator dashboard
│   ├── StudentDashboard.jsx # Student dashboard
│   └── ChatbotModal.jsx     # AI chatbot interface
├── contexts/           # React context providers
│   └── RoleContext.jsx      # Role and user management
├── data/              # Mock data and configurations
│   ├── users.js             # User definitions
│   ├── adminData.js         # Admin dashboard data
│   ├── studentData.js       # Student dashboard data
│   └── chatbotData.js       # Chatbot Q&A and charts
├── pages/             # Page components (if needed)
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-manager-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🎯 Usage Guide

### **Role Selection**
1. Upon opening the application, you'll see the role selection screen
2. Choose between "Administrator" or "Student" role
3. Your selection is saved and persists across browser sessions

### **Administrator Dashboard**
- View organizational metrics and user statistics
- Monitor course completion rates and revenue
- Analyze weekly user activity trends
- Access detailed course enrollment data

### **Student Dashboard**
- Track your course progress and completion rates
- View upcoming deadlines with priority indicators
- Monitor your learning hours and achievements
- Review recent activities and quiz performance

### **Chatbot Assistant**
- Click the "Ask Assistant" button in the header
- Ask questions about your progress, deadlines, or metrics
- View inline charts for data visualization
- Use suggested questions for quick access

### **Navigation**
- Use the header navigation to access different features
- Click "Logout" to return to role selection
- All data is mock data for demonstration purposes

## 📱 Responsive Design

The application is designed to work seamlessly across all device sizes:

- **Mobile**: Optimized for touch interactions and small screens
- **Tablet**: Balanced layout for medium-sized screens
- **Desktop**: Full-featured interface with expanded charts and tables

## 🔧 Customization

### **Adding New Roles**
1. Update `src/data/users.js` with new role definitions
2. Create corresponding dashboard data in `src/data/`
3. Add role-specific chatbot Q&A in `src/data/chatbotData.js`
4. Create new dashboard components in `src/components/`

### **Modifying Charts**
1. Update chart configurations in `src/data/chatbotData.js`
2. Modify chart components in dashboard files
3. Add new chart types using Recharts components

### **Styling Changes**
- Use Tailwind CSS classes for styling
- Modify `src/index.css` for global custom styles
- Update component-specific styles as needed

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### **Netlify**
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure build settings if needed

### **Other Platforms**
- The built files in `dist/` can be deployed to any static hosting service
- Ensure proper routing configuration for SPA deployment

## 📊 Mock Data Structure

The application uses comprehensive mock data to demonstrate functionality:

- **User Management**: Role-based user profiles
- **Admin Metrics**: Organizational KPIs and analytics
- **Student Progress**: Learning metrics and course data
- **Chatbot Intelligence**: Role-specific Q&A with chart triggers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For questions or issues:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include browser console errors and steps to reproduce

## 🔮 Future Enhancements

- **Real-time Updates**: WebSocket integration for live data
- **Advanced Analytics**: More sophisticated chart types and metrics
- **User Management**: CRUD operations for users and courses
- **Authentication**: Real user authentication and authorization
- **Mobile App**: React Native version for mobile devices
- **Offline Support**: Service worker for offline functionality

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
