import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../../data/dummyData';

const Features = () => {
  return (
    <section id="features" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful <span className="text-gradient">Features</span> for Every Learner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools ensures that every student has access to the resources they need to succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="card p-8 h-full relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <span className="text-3xl">{feature.icon}</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                    {feature.comingSoon && (
                      <span className="ml-2 inline-block px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-primary-600 font-medium">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  AI-Powered <span className="text-gradient">Accessibility</span>
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our advanced AI technology provides real-time sign language interpretation, making every classroom accessible to deaf and hard-of-hearing students.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Real-time sign language translation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Automatic note generation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Multi-language support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Seamless integration with existing LMS
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">AI Assistant</h4>
                  <p className="text-gray-600">Always learning, always improving</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                  <div className="text-2xl">📈</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
                  <div className="text-2xl">🎯</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 