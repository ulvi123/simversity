import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Server, Database, Code, BookOpen, Users } from 'lucide-react';

interface TechItem {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const TechCard: React.FC<TechItem> = ({ icon, name, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="flex items-center mb-4">
      <div className="mr-4 text-blue-500">{icon}</div>
      <h3 className="text-xl font-semibold">{name}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const TechnologyPage: React.FC = () => {
  const nanodegreeTech: TechItem[] = [
    {
      icon: <Brain size={24} />,
      name: 'Artificial Intelligence',
      description: 'Cutting-edge AI algorithms and techniques for solving complex problems.',
    },
    {
      icon: <Code size={24} />,
      name: 'Machine Learning',
      description: 'Advanced ML models and frameworks for data analysis and prediction.',
    },
    {
      icon: <Server size={24} />,
      name: 'Backend Engineering',
      description: 'Robust server-side technologies for building scalable applications.',
    },
    {
      icon: <Database size={24} />,
      name: 'Big Data Processing',
      description: 'Tools and techniques for handling and analyzing large-scale datasets.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Technology Focus</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in cutting-edge technologies for AI, Machine Learning, and Backend Engineering, 
            while offering flexible learning paths for our bachelor's degree program.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Nanodegree Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {nanodegreeTech.map((tech, index) => (
              <TechCard key={index} {...tech} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4">Bachelor's Degree Program</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our 1-year bachelor's degree program offers a customizable learning experience, 
            allowing students to choose from a wide range of technologies and specializations.
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <BookOpen size={48} className="text-blue-500 mx-auto mb-2" />
              <p>Customizable Curriculum</p>
            </div>
            <div className="text-center">
              <Users size={48} className="text-blue-500 mx-auto mb-2" />
              <p>Industry-Led Instruction</p>
            </div>
            <div className="text-center">
              <Code size={48} className="text-blue-500 mx-auto mb-2" />
              <p>Hands-On Projects</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">Continuous Innovation</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're constantly updating our curriculum and technologies to match industry demands. 
            Our team of experts ensures that you're learning the most relevant and in-demand skills.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyPage;