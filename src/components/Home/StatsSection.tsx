"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Package, Award, Globe } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Happy Customers',
    value: '50,000+',
    icon: Users,
    description: 'Satisfied customers worldwide',
  },
  {
    id: 2,
    name: 'Products Sold',
    value: '200,000+',
    icon: Package,
    description: 'Premium products delivered',
  },
  {
    id: 3,
    name: 'Awards Won',
    value: '25+',
    icon: Award,
    description: 'Industry recognition',
  },
  {
    id: 4,
    name: 'Countries',
    value: '40+',
    icon: Globe,
    description: 'Global shipping coverage',
  },
];

export function StatsSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Thousands
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our growing community of satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <stat.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-gray-900 mb-1">
                {stat.name}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}