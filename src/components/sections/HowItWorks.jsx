import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, FileText, MessageSquare } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Student Logs In",
      description: "Easy access to personalized learning dashboard",
      icon: User,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Joins Accessible Class",
      description: "Connect to live classroom with real-time accessibility features",
      icon: Users,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Receives Lecture Notes",
      description: "Automatic note generation and sharing from teachers",
      icon: FileText,
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Real-time Caption → Notes",
      description: "Live transcription converted to comprehensive study materials",
      icon: MessageSquare,
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-gradient">SignBridge</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform makes learning accessible through a simple, four-step process that connects students with their educational content seamlessly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                {step.id}
              </div>

              {/* Card */}
              <div className="card p-8 text-center relative">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-200 to-transparent transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Learning?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of students and educators who are already experiencing the power of accessible education.
            </p>
            <button className="btn-primary">
              Start Your Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 