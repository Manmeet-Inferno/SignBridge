import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, GraduationCap, Eye, EyeOff } from 'lucide-react';
import Button from '../components/ui/Button';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock authentication delay
    setTimeout(() => {
      // Store user role in localStorage
      localStorage.setItem('userRole', formData.role);
      localStorage.setItem('userEmail', formData.email);
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const roles = [
    {
      id: 'student',
      title: 'Student',
      description: 'Access your learning materials and notes',
      icon: GraduationCap,
      color: 'bg-blue-500'
    },
    {
      id: 'teacher',
      title: 'Teacher',
      description: 'Upload and manage course materials',
      icon: User,
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full space-y-8"
      >
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto h-16 w-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4"
          >
            <span className="text-3xl">🤟</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Welcome to SignBridge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600"
          >
            Sign in to access your account
          </motion.p>
        </div>

        {/* Role Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4"
        >
          <label className="block text-sm font-medium text-gray-700 mb-3">
            I am a:
          </label>
          <div className="grid grid-cols-2 gap-4">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setFormData({ ...formData, role: role.id })}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  formData.role === role.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`w-10 h-10 ${role.color} rounded-full flex items-center justify-center`}>
                    <role.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{role.title}</div>
                    <div className="text-xs text-gray-500">{role.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Login Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <button 
              type="button"
              className="text-sm text-primary-600 hover:text-primary-500"
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Signing in...
              </div>
            ) : (
              'Sign In'
            )}
          </Button>
        </motion.form>

        {/* Demo Credentials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gray-50 rounded-lg p-4"
        >
          <h4 className="text-sm font-medium text-gray-900 mb-2">Demo Credentials:</h4>
          <div className="text-xs text-gray-600 space-y-1">
            <div>Email: demo@signbridge.com</div>
            <div>Password: demo123</div>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <button
            onClick={() => navigate('/')}
            className="text-sm text-primary-600 hover:text-primary-500 transition-colors duration-200"
          >
            ← Back to Home
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage; 