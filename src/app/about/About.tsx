"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Heart, Target, Zap } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Every decision we make starts with our customers in mind.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We curate only the finest products that meet our high standards.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Constantly seeking new ways to improve the shopping experience.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Building a sustainable future through responsible commerce.',
  },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years in e-commerce and product curation.',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Product',
    bio: 'Expert in product development and user experience design.',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Technology innovator focused on scalable e-commerce solutions.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'David Kim',
    role: 'Head of Operations',
    bio: 'Operations specialist ensuring seamless customer experiences.',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                EliteStore
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re passionate about bringing you the finest products that enhance 
              your lifestyle. Our mission is to curate exceptional items that combine 
              quality, innovation, and style.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Founded in 2020, EliteStore began as a simple idea: to make premium 
                products accessible to everyone. We started in a small garage with 
                a vision to revolutionize online shopping by focusing on quality 
                over quantity.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Today, we&apos;ve grown into a trusted platform serving customers 
                worldwide, but our core values remain unchanged. We believe that 
                everyone deserves access to products that are not just functional, 
                but truly exceptional.
              </p>
              <div className="mt-8 flex items-center space-x-8">
                <div>
                  <div className="text-2xl font-bold text-indigo-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">200K+</div>
                  <div className="text-sm text-gray-600">Products Sold</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">40+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 lg:mt-0"
            >
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team working together"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the way we serve our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind EliteStore who work tirelessly to bring you the best shopping experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 