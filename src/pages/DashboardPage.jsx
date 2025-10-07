import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Bell, Search, Grid, List } from 'lucide-react';
import { subjects } from '../data/dummyData';
import Button from '../components/ui/Button';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    const email = localStorage.getItem('userEmail');
    
    if (!role || !email) {
      navigate('/login');
      return;
    }
    
    setUserRole(role);
    setUserEmail(email);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  const handleSubjectClick = (subjectId) => {
    navigate(`/subject/${subjectId}`);
  };

  const filteredSubjects = subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!userRole || !userEmail) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">🤟</span>
              </div>
              <span className="text-xl font-bold text-gray-900">SignBridge</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-primary-600" />
                </div>
                <div className="hidden md:block">
                  <div className="text-sm font-medium text-gray-900">
                    {userRole === 'student' ? 'Student' : 'Teacher'}
                  </div>
                  <div className="text-xs text-gray-500">{userEmail}</div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-1"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {userRole === 'student' ? 'Student' : 'Teacher'}!
              </h1>
              <p className="text-gray-600 mt-2">
                {userRole === 'student' 
                  ? 'Access your learning materials and notes'
                  : 'Manage your course materials and uploads'
                }
              </p>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Subjects Grid/List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {filteredSubjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => handleSubjectClick(subject.id)}
              className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer ${
                viewMode === 'list' ? 'flex items-center p-6' : 'p-6'
              }`}
            >
              {viewMode === 'grid' ? (
                // Grid View
                <div className="text-center">
                  <div className={`w-16 h-16 ${subject.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl">{subject.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{subject.name}</h3>
                  <p className="text-gray-600 mb-4">{subject.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{subject.notes.length} notes</span>
                    <span className="text-primary-600 font-medium">View →</span>
                  </div>
                </div>
              ) : (
                // List View
                <>
                  <div className={`w-12 h-12 ${subject.color} rounded-lg flex items-center justify-center mr-4`}>
                    <span className="text-xl">{subject.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
                    <p className="text-gray-600">{subject.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">{subject.notes.length} notes</div>
                    <div className="text-primary-600 font-medium">View →</div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSubjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No subjects found</h3>
            <p className="text-gray-600">Try adjusting your search terms</p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;