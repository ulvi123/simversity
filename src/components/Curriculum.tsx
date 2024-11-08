import { Calendar, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Curriculum = () => {
  // Updated state type to accept `string` or `null`.
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);

  const campuses = [
    {
      city: "Berlin",
      country: "Germany",
      quarter: "Q1: Feb - Apr 2024",
      description: "Focus on business strategy, hands-on workshops, and job simulations in the heart of Europe.",
      detailedCurriculum: [
        {
          week: "Week 1: Business Strategy Fundamentals",
          topics: [
            "Introduction to Business Strategy",
            "SWOT Analysis & Market Research",
            "Hands-on: Developing a Company Strategy"
          ]
        },
        {
          week: "Week 2: Job Simulation Workshops",
          topics: [
            "Job Role Simulations in Tech Industry",
            "Guest Speakers: Day in the Life",
            "Hands-on: Mock Interviews"
          ]
        },
        {
          week: "Week 3: Strategic Management",
          topics: [
            "Understanding Competitive Advantage",
            "Strategic Decision-Making Processes",
            "Hands-on: Case Study of Successful Strategies"
          ]
        },
        {
          week: "Week 4: Project Workshops",
          topics: [
            "Practical Team-Based Projects",
            "Problem-Solving Workshops",
            "Hands-on: Real World Business Challenges"
          ]
        },
        {
          week: "Week 5-6: Final Strategy Presentation",
          topics: [
            "Preparation for Strategy Presentation",
            "Feedback from Mentors",
            "Presenting to an Expert Panel"
          ]
        }
      ]
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      quarter: "Q2: May - Jul 2024",
      description: "Learn about business and finance, with a focus on scaling and international expansion in the Middle East.",
      detailedCurriculum: [
        {
          week: "Week 1: Middle Eastern Market Dynamics",
          topics: [
            "Overview of Business in the UAE",
            "Cultural Considerations in Business",
            "Hands-on: Local Market Analysis"
          ]
        },
        {
          week: "Week 2: Financial Planning and Management",
          topics: [
            "Introduction to Financial Planning",
            "Budgeting for Startups and Scale-Ups",
            "Hands-on: Building a Financial Plan"
          ]
        },
        {
          week: "Week 3: Scaling Business Internationally",
          topics: [
            "Market Expansion Strategies",
            "Case Studies of Successful Scale-Ups",
            "Guest Speaker: Expansion Challenges"
          ]
        },
        {
          week: "Week 4: Venture Capital and Funding",
          topics: [
            "Introduction to Venture Capital",
            "Pitching to Investors",
            "Hands-on: Developing Your Investor Pitch"
          ]
        }
      ]
    },
    {
      city: "San Francisco",
      country: "United States",
      quarter: "Q3: Aug - Oct 2024",
      description: "Immerse yourself in the startup culture, attend career fairs, and participate in university workshops in Silicon Valley.",
      detailedCurriculum: [
        {
          week: "Week 1: Silicon Valley Startup Culture",
          topics: [
            "Introduction to Startup Ecosystem",
            "Startup Success Stories from Silicon Valley",
            "Hands-on: Developing Your Startup Idea"
          ]
        },
        {
          week: "Week 2: Product-Market Fit",
          topics: [
            "Defining Product-Market Fit",
            "How to Test and Validate Market Fit",
            "Hands-on: User Feedback Sessions"
          ]
        },
        {
          week: "Week 3: Career Development Fair",
          topics: [
            "Career Opportunities in the Tech Industry",
            "Networking with Tech Professionals",
            "Hands-on: Building a Personal Brand"
          ]
        },
        {
          week: "Week 4: University Collaboration Workshops",
          topics: [
            "Workshops with Partner Universities",
            "Joint Projects with Students",
            "Hands-on: Presenting Solutions to Real Problems"
          ]
        }
      ]
    },
    {
      city: "Tallinn",
      country: "Estonia",
      quarter: "Q4: Nov - Jan 2025",
      description: "Experience digital innovation, focus on startups, tech, and explore e-governance in Europe’s digital capital.",
      detailedCurriculum: [
        {
          week: "Week 1: Digital Transformation",
          topics: [
            "The Rise of Digital Societies",
            "Estonia as a Case Study for Digital Transformation",
            "Hands-on: Planning a Digital Initiative"
          ]
        },
        {
          week: "Week 2: Startup Culture in Estonia",
          topics: [
            "Introduction to the Estonian Startup Ecosystem",
            "Success Stories from Estonian Startups",
            "Hands-on: Developing Your Startup Pitch"
          ]
        },
        {
          week: "Week 3: E-Governance and Blockchain",
          topics: [
            "Introduction to E-Governance Solutions",
            "Blockchain Use Cases in Government",
            "Hands-on: Designing a Blockchain Solution"
          ]
        },
        {
          week: "Week 4: Tech Project Development",
          topics: [
            "Team-Based Tech Projects",
            "Building MVPs and Prototypes",
            "Presenting Projects to an Expert Panel"
          ]
        }
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-50" id="curriculum">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-blue-600 font-semibold mb-4">FULL CURRICULUM BREAKDOWN</div>
          <h2 className="text-4xl font-bold mb-6">Your Global Learning Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore what you'll learn at each of our four campuses. Each quarter is meticulously designed to cover key skills and experiences that will drive your success.
          </p>
        </div>

        {campuses.map((campus, campusIndex) => (
          <div key={campusIndex} className="bg-white rounded-xl p-8 shadow-lg mb-12 border border-gray-200">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{campus.city}, {campus.country}</h3>
              <div className="flex items-center gap-2 text-blue-500 mb-4">
                <Calendar className="w-5 h-5" />
                <span>{campus.quarter}</span>
              </div>
              <p className="text-gray-600 mb-8">{campus.description}</p>

              <h4 className="text-2xl font-semibold text-blue-600 mb-4">Detailed Curriculum</h4>
              <div className="space-y-6">
                {campus.detailedCurriculum.map((weekDetail, weekIndex) => (
                  <div key={weekIndex} className="border border-gray-300 rounded-lg p-4">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() =>
                        setExpandedWeek(
                          expandedWeek === `${campusIndex}-${weekIndex}`
                            ? null
                            : `${campusIndex}-${weekIndex}`
                        )
                      }
                    >
                      <h5 className="text-lg font-semibold text-gray-700">{weekDetail.week}</h5>
                      <button className="text-blue-500">
                        {expandedWeek === `${campusIndex}-${weekIndex}` ? "Hide Details" : "Show Details"}
                      </button>
                    </div>
                    {expandedWeek === `${campusIndex}-${weekIndex}` && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 pl-6 space-y-3 list-disc text-gray-600"
                      >
                        {weekDetail.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
