import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/dummyData';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Changing Lives Through <span className="text-gradient">Accessibility</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students and educators who have experienced the transformative power of SignBridge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="card p-8 h-full relative">
                {/* Quote marks */}
                <div className="absolute top-4 left-4 text-4xl text-primary-200 opacity-50">
                  "
                </div>
                
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 text-2xl text-primary-200 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                  🤟
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Impact in Numbers</h3>
            <p className="text-xl opacity-90">
              Real results from real classrooms across the country
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Students Helped" },
              { number: "50+", label: "Schools Partnered" },
              { number: "99%", label: "Accuracy Rate" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the growing community of educators and students who are transforming education through accessibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;