import { useState, useEffect, useRef } from 'react';
import { useRole } from '../contexts/RoleContext';
import { chatbotData, chartConfigs } from '../data/chatbotData';
import { adminDashboardData } from '../data/adminData';
import { studentDashboardData } from '../data/studentData';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChatbotModal = ({ isOpen, onClose }) => {
  const { currentRole } = useRole();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [suggestions] = useState(() => {
    if (currentRole === 'admin') {
      return chatbotData.admin.qa.map(qa => qa.question);
    } else if (currentRole === 'student') {
      return chatbotData.student.qa.map(qa => qa.question);
    }
    return [];
  });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          type: 'bot',
          content: `Hello! I'm your ${currentRole === 'admin' ? 'administrative' : 'learning'} assistant. How can I help you today?`,
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, currentRole, messages.length]);

  const getChartData = (chartDataKey) => {
    if (currentRole === 'admin') {
      return adminDashboardData[chartDataKey];
    } else if (currentRole === 'student') {
      return studentDashboardData[chartDataKey];
    }
    return [];
  };

  const renderChart = (chartType, chartDataKey, chartTitle) => {
    const data = getChartData(chartDataKey);
    const config = chartConfigs[chartDataKey];

    if (!data || !config) return null;

    if (chartType === 'line') {
      return (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">{chartTitle}</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={config.xAxis} />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey={config.dataKey} 
                stroke={config.stroke} 
                fill={config.fill}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    }

    if (chartType === 'bar') {
      return (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">{chartTitle}</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={config.xAxis} />
              <YAxis />
              <Tooltip />
              <Bar 
                dataKey={config.dataKey} 
                fill={config.fill} 
                stroke={config.stroke}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }

    return null;
  };

  const handleSendMessage = (customInput = null) => {
    const input = customInput || inputValue;
    if (!input.trim()) return;

    const userMessage = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    const qaData = currentRole === 'admin' ? chatbotData.admin.qa : chatbotData.student.qa;

    const matchingQA = qaData.find(qa => qa.question.toLowerCase() === input.toLowerCase());

    setTimeout(() => {
      if (matchingQA) {
        const botMessage = {
          type: 'bot',
          content: matchingQA.answer,
          timestamp: new Date(),
          showChart: matchingQA.showChart,
          chartType: matchingQA.chartType,
          chartData: matchingQA.chartData,
          chartTitle: matchingQA.chartTitle
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        const botMessage = {
          type: 'bot',
          content: "I'm sorry, I don't understand that question. Please try one of the suggested questions below.",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }
    }, 500);
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🤖</span>
            <h2 className="text-xl font-semibold text-gray-800">
              {currentRole === 'admin' ? 'Admin' : 'Learning'} Assistant
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                {message.showChart && message.chartType && message.chartData && (
                  renderChart(message.chartType, message.chartData, message.chartTitle)
                )}
                <span className="text-xs opacity-70 block mt-2">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t bg-gray-50">
          <p className="text-sm text-gray-600 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => handleSendMessage()}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;
