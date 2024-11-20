import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ChevronDown, ChevronUp, Info } from 'lucide-react';
import * as Tooltip from '@radix-ui/react-tooltip';

const Curriculum = () => {
  const [expandedLocation, setExpandedLocation] = useState<number | null>(null);
  const [expandedQuarter, setExpandedQuarter] = useState<number | null>(null);

  const curriculumData = [
    {
      location: 'Berlin, Germany',
      quarters: [
        {
          name: 'Quarter 1: Business & Strategy',
          description: 'Learn core business strategies, project management, and team collaboration.',
          weeks: [
            {
              title: 'Week 1: Business Strategy Fundamentals',
              objectives: 'Understand fundamental business strategies for startups and corporations.',
              topics: [
                'Introduction to Business Strategy',
                'SWOT Analysis & Market Research',
                'Developing a Company Strategy (Hands-on)',
              ],
              details: 'Explore strategies and market research methods to define business objectives.'
            },
            {
              title: 'Week 2: Job Simulation Workshops',
              objectives: 'Gain hands-on experience with simulated job roles in the tech industry.',
              topics: [
                'Job Role Simulations',
                'Guest Speaker: Industry Insights',
                'Mock Interviews (Hands-on)'
              ],
              details: 'Participate in job role simulations to understand key industry responsibilities.'
            }
          ]
        }
      ]
    },
    {
      location: 'Dubai, UAE',
      quarters: [
        {
          name: 'Quarter 2: Finance & International Expansion',
          description: 'Gain skills in financial planning and scaling businesses globally.',
          weeks: [
            {
              title: 'Week 1: Middle Eastern Market Dynamics',
              objectives: 'Understand market dynamics and cultural factors in the Middle East.',
              topics: [
                'Market Overview in the UAE',
                'Cultural Considerations',
                'Local Market Analysis (Hands-on)'
              ],
              details: 'This week focuses on understanding the unique business environment in the UAE.'
            },
            {
              title: 'Week 2: Financial Planning & Management',
              objectives: 'Develop essential financial planning skills for startups.',
              topics: [
                'Introduction to Financial Planning',
                'Budgeting for Startups',
                'Building a Financial Plan (Hands-on)'
              ],
              details: 'Learn budgeting and financial planning strategies for growth and scalability.'
            }
          ]
        }
      ]
    },
    {
      location: 'San Francisco, USA',
      quarters: [
        {
          name: 'Quarter 3: Startup Culture & Tech',
          description: 'Immerse yourself in the startup ecosystem and learn about emerging technologies.',
          weeks: [
            {
              title: 'Week 1: Silicon Valley Mindset',
              objectives: 'Understand the culture and values of successful startups.',
              topics: [
                'Agile Methodologies',
                'Rapid Prototyping',
                'Lean Startup Principles'
              ],
              details: 'Explore the unique approaches and practices of Silicon Valley startups.'
            },
            {
              title: 'Week 2: Emerging Tech Trends',
              objectives: 'Stay up-to-date with the latest technological advancements.',
              topics: [
                'Artificial Intelligence',
                'Blockchain Applications',
                'Cloud Computing Innovations'
              ],
              details: 'Gain insights into how new technologies are shaping the future of business.'
            }
          ]
        }
      ]
    },
    {
      location: 'Tallinn, Estonia',
      quarters: [
        {
          name: 'Quarter 4: Digital Innovation & E-Governance',
          description: 'Learn about digital transformation and e-government initiatives.',
          weeks: [
            {
              title: "Week 1: Estonia's Digital Success Story",
              objectives: "Understand the factors behind Estonia's digital leadership.",
              topics: [
                'E-Government Services',
                'Digital Identity Management',
                'Cyber Security Strategies'
              ],
              details: 'Explore the innovative approaches that have made Estonia a global leader in e-governance.'
            },
            {
              title: 'Week 2: Designing for Digital',
              objectives: 'Develop skills in user-centric digital product design.',
              topics: [
                'Design Thinking Principles',
                'User Research and Testing',
                'Prototyping for Digital Products'
              ],
              details: 'Learn how to create engaging and user-friendly digital experiences.'
            }
          ]
        }
      ]
    }
  ];
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-700 mb-12 text-center"
        >
          Global Learning Journey
        </motion.h1>

        <div className="space-y-8">
          {curriculumData.map((location, locationIndex) => (
            <motion.div
              key={locationIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: locationIndex * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedLocation(expandedLocation === locationIndex ? null : locationIndex)}
                className="w-full flex items-center justify-between p-6 focus:outline-none"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-500 w-6 h-6" />
                  <h3 className="text-2xl font-bold text-blue-700">{location.location}</h3>
                </div>
                {expandedLocation === locationIndex ? <ChevronUp className="w-6 h-6 text-blue-500" /> : <ChevronDown className="w-6 h-6 text-blue-500" />}
              </button>

              <AnimatePresence>
                {expandedLocation === locationIndex && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {location.quarters.map((quarter, quarterIndex) => (
                      <div key={quarterIndex} className="border-t border-gray-200">
                        <button
                          onClick={() => setExpandedQuarter(expandedQuarter === quarterIndex ? null : quarterIndex)}
                          className="w-full flex items-center justify-between p-6 focus:outline-none"
                        >
                          <h4 className="text-lg font-semibold text-gray-800">{quarter.name}</h4>
                          {expandedQuarter === quarterIndex ? <ChevronUp className="w-5 h-5 text-blue-500" /> : <ChevronDown className="w-5 h-5 text-blue-500" />}
                        </button>

                        <AnimatePresence>
                          {expandedQuarter === quarterIndex && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-6"
                            >
                              <p className="text-gray-600 mb-4">{quarter.description}</p>
                              <div className="space-y-6">
                                {quarter.weeks.map((week, weekIndex) => (
                                  <div key={weekIndex} className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <Calendar className="w-5 h-5 text-blue-500" />
                                      <h5 className="font-semibold text-gray-800">{week.title}</h5>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{week.details}</p>
                                    <div className="flex items-center mb-2">
                                      <Tooltip.Root>
                                        <Tooltip.Trigger>
                                          <Info className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer mr-2" />
                                        </Tooltip.Trigger>
                                        <Tooltip.Portal>
                                          <Tooltip.Content className="bg-gray-800 text-white p-2 rounded-lg shadow-lg text-sm max-w-xs">
                                            {week.objectives}
                                            <Tooltip.Arrow className="fill-gray-800" />
                                          </Tooltip.Content>
                                        </Tooltip.Portal>
                                      </Tooltip.Root>
                                      <span className="text-sm text-gray-600">Learning Objectives</span>
                                    </div>
                                    <ul className="pl-5 list-disc text-gray-600 space-y-1">
                                      {week.topics.map((topic, topicIndex) => (
                                        <li key={topicIndex} className="text-sm">{topic}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;