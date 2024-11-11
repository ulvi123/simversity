import { motion } from 'framer-motion';
import { MapPin, Calendar, Info } from 'lucide-react';
import * as Tooltip from '@radix-ui/react-tooltip';

const Curriculum = () => {
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
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-700 mb-8"
        >
          Curriculum Breakdown
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {curriculumData.map((location, locationIndex) => (
            <motion.div
              key={locationIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: locationIndex * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 border hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="text-blue-500 w-6 h-6" />
                <h3 className="text-2xl font-bold text-blue-700">{location.location}</h3>
              </div>

              {location.quarters.map((quarter, quarterIndex) => (
                <motion.div
                  key={quarterIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: quarterIndex * 0.1 }}
                  className="border-t border-gray-200 pt-4 mt-4"
                >
                  <h4 className="text-lg font-semibold text-gray-800">{quarter.name}</h4>
                  <p className="text-gray-600 mb-4">{quarter.description}</p>

                  <div className="space-y-3">
                    {quarter.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex items-start space-x-2 text-gray-700">
                        <Calendar className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                          <h5 className="font-semibold">{week.title}</h5>
                          <p className="text-sm">{week.details}</p>
                          <div className="flex items-center mt-2">
                            <Tooltip.Root>
                              <Tooltip.Trigger>
                                <Info className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer mr-2" />
                              </Tooltip.Trigger>
                              <Tooltip.Portal>
                                <Tooltip.Content className="bg-gray-800 text-white p-2 rounded-lg shadow-lg text-sm">
                                  {week.objectives}
                                  <Tooltip.Arrow className="fill-gray-800" />
                                </Tooltip.Content>
                              </Tooltip.Portal>
                            </Tooltip.Root>
                            <span className="text-sm text-gray-600">Objectives</span>
                          </div>
                          <ul className="pl-6 list-disc text-gray-600 space-y-1 mt-2">
                            {week.topics.map((topic, topicIndex) => (
                              <li key={topicIndex}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;