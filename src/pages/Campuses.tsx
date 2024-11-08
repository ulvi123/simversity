import { Globe, Calendar, Users, Rocket, ArrowRight, Target, Database, LineChart, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import Berlin from "../assets/berlin.jpg"
import Tallinn from '../assets/Tallinn.jpg'
import Dubai from '../assets/dubai.jpg'
import SF from '../assets/SF.jpg'


const campuses = [
  {
    city: "Berlin",
    country: "Germany",
    quarter: "Q1: Feb - Apr 2024",
    image: Berlin,
    description: "Kickstart your entrepreneurial journey in Europe's leading startup hub, where innovation and deep tech reign supreme.",
    features: [
      "Immerse yourself in Berlin's vibrant startup ecosystem, connecting with founders, investors, and industry leaders",
      "Master the fundamentals of AI and machine learning, staying ahead of the curve in this rapidly evolving field",
      "Navigate the complex regulatory landscape of the European Union, learning how to effectively enter and scale in the EU market",
      "Develop German market entry strategies, leveraging the country's position as a tech and innovation powerhouse"
    ],
    stats: [
      { icon: Target, label: "300+ Startups", value: "in Berlin's ecosystem" },
      { icon: Database, label: "€10B+", value: "in VC funding" },
      { icon: LineChart, label: "25%", value: "annual growth rate" },
      { icon: LayoutGrid, label: "4 Campuses", value: "across 4 continents" }
    ]
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    quarter: "Q2: May - Jul 2024",
    image: Dubai,
    description: "Dive into the heart of the Middle East's innovation hub, where rapid scaling and global expansion take center stage.",
    features: [
      "Leverage Dubai's strategic location to explore expansion opportunities across the MENA region and beyond",
      "Tap into the thriving venture capital network, learning how to effectively pitch and secure funding for your startup",
      "Develop scale-up strategies that enable you to rapidly grow your business, leveraging the city's pro-entrepreneurship policies",
      "Understand the unique market dynamics and regulatory environment of the Middle East, adapting your approach accordingly"
    ],
    stats: [
      { icon: Target, label: "100+", value: "Venture Firms" },
      { icon: Database, label: "$13.8B", value: "VC investments" },
      { icon: LineChart, label: "27%", value: "GDP growth" },
      { icon: LayoutGrid, label: "4 Campuses", value: "across 4 continents" }
    ]
  },
  {
    city: "San Francisco",
    country: "United States",
    quarter: "Q3: Aug - Oct 2024",
    image: SF,
    description: "Immerse yourself in the heartbeat of the global tech industry, where innovation, entrepreneurship, and venture capital collide.",
    features: [
      "Tap into the unparalleled networking opportunities of Silicon Valley, connecting with industry luminaries and potential investors",
      "Master the art of venture capital pitching, honing your presentation skills and learning how to effectively communicate your startup's value proposition",
      "Dive deep into product-market fit, understanding how to build solutions that resonate with your target audience and drive sustainable growth",
      "Explore growth hacking strategies, leveraging data-driven insights to acquire customers and scale your business"
    ],
    stats: [
      { icon: Target, label: "10,000+", value: "Startups" },
      { icon: Database, label: "$100B+", value: "VC investments" },
      { icon: LineChart, label: "13.5%", value: "GDP growth" },
      { icon: LayoutGrid, label: "4 Campuses", value: "across 4 continents" }
    ]
  },
  {
    city: "Tallinn",
    country: "Estonia",
    quarter: "Q4: Nov - Jan 2025",
    image: Tallinn,
    description: "Complete your journey in Europe's digital society and e-governance pioneer, where the future of technology and policy converge.",
    features: [
      "Explore Tallinn's thriving digital ecosystem, learning how to leverage emerging technologies like blockchain and AI to drive innovation",
      "Discover the power of e-governance solutions, understanding how to integrate digital tools and platforms to streamline operations and enhance efficiency",
      "Dive into the European Union's digital market, positioning your startup for success in this rapidly evolving landscape",
      "Gain valuable insights into the intersection of technology, policy, and societal transformation, preparing you for the challenges and opportunities of the digital age"
    ],
    stats: [
      { icon: Target, label: "500+", value: "Tech Companies" },
      { icon: Database, label: "$1B+", value: "VC investments" },
      { icon: LineChart, label: "8.2%", value: "GDP growth" },
      { icon: LayoutGrid, label: "4 Campuses", value: "across 4 continents" }
    ]
  }
];

const Campuses = () => {
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const handleApplicationClick = () => {
    setShowApplicationModal(true);
  };

  const handleApplicationClose = () => {
    setShowApplicationModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-blue-600 font-semibold mb-4 animate__animated animate__fadeInDown">GLOBAL CAMPUS PROGRAM</div>
          <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeInUp">Embark on a Transformative Educational Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate__animated animate__fadeInUp">
            Dive into four of the world's most dynamic tech hubs. Each quarter offers a new campus, with hands-on experiences designed for innovation and global networking.
          </p>
        </div>

        {campuses.map((campus, index) => (
          <motion.div
            key={index}
            className="mb-20 p-8 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img src={campus.image} alt={campus.city} className="rounded-xl" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{campus.city}</h3>
                <p className="text-blue-600 mb-4">{campus.country}</p>
                <div className="flex items-center gap-2 text-blue-600 mb-6">
                  <Calendar className="w-5 h-5" />
                  <span>{campus.quarter}</span>
                </div>
                <p className="text-gray-600 mb-6">{campus.description}</p>

                <ul className="space-y-3">
                  {campus.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                    >
                      <Rocket className="w-4 h-4 text-blue-600 mt-1" />
                      <div>{feature}</div>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {campus.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-blue-600 text-white p-4 rounded-xl"
                    >
                      <stat.icon className="w-6 h-6" />
                      <div>
                        <div className="font-bold">{stat.value}</div>
                        <div className="text-sm">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="mt-16 bg-blue-600 rounded-xl p-8 text-white animate__animated animate__fadeInUp">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-blue-200" />
              <div>
                <h3 className="font-semibold mb-2">Global Network</h3>
                <p className="text-blue-100">Build connections across four continents with industry leaders</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-blue-200" />
              <div>
                <h3 className="font-semibold mb-2">Diverse Cohort</h3>
                <p className="text-blue-100">Learn alongside entrepreneurs from over 20 countries</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Rocket className="w-8 h-8 text-blue-200" />
              <div>
                <h3 className="font-semibold mb-2">Real Experience</h3>
                <p className="text-blue-100">Launch your startup with practical, hands-on learning</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              className="bg-blue-200 text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-300 transition-colors duration-300"
              onClick={handleApplicationClick}
            >
              Apply Now <ArrowRight className="w-5 h-5 inline-block ml-2" />
            </button>
          </div>
        </div>

        {showApplicationModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
              <h3 className="text-2xl font-bold mb-4">Apply for the Global Campus Program</h3>
              <p className="text-gray-600 mb-6">
                Take the first step towards your transformative educational journey. Fill out the application form below to get started.
              </p>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="background" className="block text-gray-700 font-medium mb-2">
                    Background
                  </label>
                  <textarea
                    id="background"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    placeholder="Tell us about your background and experience"
                    rows="3"
                  ></textarea>
                </div>
                <div className="text-right">
                  <button
                    type="button"
                    className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 mr-2"
                    onClick={handleApplicationClose}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Campuses;