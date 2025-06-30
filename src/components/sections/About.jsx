import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../../data/dummyData';

const About = () => {
  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">SignBridge</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to break down barriers in education and create inclusive learning environments for all students.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At SignBridge, we believe that every student deserves equal access to quality education. Our platform combines cutting-edge AI technology with deep understanding of accessibility needs to create a truly inclusive learning experience.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We're committed to empowering deaf and hard-of-hearing students by providing real-time sign language translation, automatic note generation, and seamless classroom integration.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Accessibility First</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">AI-Powered</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">User-Centered</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600">A world where education knows no barriers</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                  <div className="text-2xl">🌟</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
                  <div className="text-2xl">💡</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to making education accessible for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group h-full flex"
              >
                <div className="card p-6 text-center h-full flex flex-col justify-between">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:shadow-lg transition-all duration-300"
                  >
                    {member.avatar}
                  </motion.div>

                  {/* Name and Role */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social links placeholder */}
                  <div className="mt-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">in</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">@</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">📧</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Our Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🤝",
                  title: "Inclusivity",
                  description: "We believe every student deserves equal access to education"
                },
                {
                  icon: "💪",
                  title: "Empowerment",
                  description: "We empower students to reach their full potential"
                },
                {
                  icon: "🚀",
                  title: "Innovation",
                  description: "We continuously innovate to improve accessibility"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 