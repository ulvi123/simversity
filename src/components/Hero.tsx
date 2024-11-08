import React from 'react';
import { ArrowRight, ChevronRight, Bot, Code, Building, BarChart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white pt-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/20 text-sm inline-block px-4 py-1 rounded-full mb-6">
            Next Cohort: February 2024 | Berlin
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            4 Years of Education,
            <br />
            Compressed to
            <span className="text-blue-400"> 12 Months</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            The world's first AI-powered startup university. Learn through simulations, meet investors, 
            and build your company alongside industry leaders.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400">30</div>
              <div className="text-gray-300">Students per cohort</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="text-gray-300">Industry mentors</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400">€15k</div>
              <div className="text-gray-300">Average saved vs uni</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400">93%</div>
              <div className="text-gray-300">Placement rate</div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <button className="w-full md:w-auto bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors text-lg flex items-center justify-center">
              Apply for February 2024 <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="w-full md:w-auto bg-gray-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800/70 transition-colors text-lg flex items-center justify-center">
              Download Brochure <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800/50 backdrop-blur-sm border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <Bot className="w-8 h-8 text-blue-400" />
              <div>
                <div className="font-semibold">AI-Powered LMS</div>
                <div className="text-sm text-gray-300">Personalized learning path</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Code className="w-8 h-8 text-blue-400" />
              <div>
                <div className="font-semibold">Business Simulations</div>
                <div className="text-sm text-gray-300">Real-world scenarios</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building className="w-8 h-8 text-blue-400" />
              <div>
                <div className="font-semibold">Industry Access</div>
                <div className="text-sm text-gray-300">Direct mentor connections</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BarChart className="w-8 h-8 text-blue-400" />
              <div>
                <div className="font-semibold">Growth Tracking</div>
                <div className="text-sm text-gray-300">AI progress analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;