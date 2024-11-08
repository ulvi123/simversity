import React from 'react';
import { Globe, Calendar, Users, Rocket } from 'lucide-react';

const CampusCard = ({ city, country, quarter, features, description }) => (
  <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
    <h3 className="text-2xl font-bold mb-2">{city}</h3>
    <p className="text-gray-600 mb-4">{country}</p>
    <div className="flex items-center gap-2 text-blue-600 mb-6">
      <Calendar className="w-5 h-5" />
      <span>{quarter}</span>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2 text-gray-700">
          <Rocket className="w-4 h-4 text-blue-600" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Curriculum = () => {
  const campuses = [
    {
      city: "Berlin",
      country: "Germany",
      quarter: "Q1: Feb - Apr 2024",
      description: "Start your journey in Europe's leading startup hub, focusing on AI and deep tech innovation.",
      features: [
        "Startup ecosystem immersion",
        "AI & ML fundamentals",
        "German market entry strategies",
        "EU regulatory framework"
      ]
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      quarter: "Q2: May - Jul 2024",
      description: "Experience rapid scaling and international business in the Middle East's innovation center.",
      features: [
        "Venture capital networking",
        "Scale-up strategies",
        "Middle East market dynamics",
        "Global expansion planning"
      ]
    },
    {
      city: "San Francisco",
      country: "United States",
      quarter: "Q3: Aug - Oct 2024",
      description: "Immerse yourself in the world's leading tech ecosystem and venture capital network.",
      features: [
        "Silicon Valley networking",
        "Venture capital pitching",
        "Product-market fit",
        "Growth hacking"
      ]
    },
    {
      city: "Tallinn",
      country: "Estonia",
      quarter: "Q4: Nov - Jan 2025",
      description: "Complete your journey in Europe's digital society and e-governance pioneer.",
      features: [
        "Digital transformation",
        "E-governance solutions",
        "Blockchain integration",
        "EU digital market"
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-50" id="curriculum">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-4">GLOBAL CAMPUS PROGRAM</div>
            <h2 className="text-4xl font-bold mb-6">Learn in Four Global Tech Hubs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a unique journey through four of the world's most innovative cities. 
              Each quarter brings new perspectives, networks, and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {campuses.map((campus, index) => (
              <CampusCard key={index} {...campus} />
            ))}
          </div>

          <div className="mt-16 bg-blue-600 rounded-xl p-8 text-white">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;