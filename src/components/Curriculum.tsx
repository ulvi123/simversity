import React from 'react';
import { Globe, Calendar, Users, Rocket } from 'lucide-react';

interface CampusCardProps {
  city: string;
  country: string;
  quarter: string;
  features: string[];
  description: string;
}

const CampusCard: React.FC<CampusCardProps> = ({ city, country, quarter, features, description }) => (
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
    // ... rest of the campuses
  ];

  return (
    <div className="py-20 bg-gray-50" id="curriculum">
      {/* ... rest of the Curriculum component */}
    </div>
  );
};

export default Curriculum;