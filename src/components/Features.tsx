import React from 'react';
import { Bot, Code, Brain } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-4">THE FUTURE OF EDUCATION</div>
            <h2 className="text-4xl font-bold mb-6">AI-Powered Learning Experience</h2>
            <p className="text-xl text-gray-600">
              Our proprietary AI system adapts to your learning style, creating a personalized path to startup success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Bot className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
              <p className="text-gray-600">
                AI analyzes your progress and adjusts content difficulty and pace in real-time
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Simulations</h3>
              <p className="text-gray-600">
                Experience real startup scenarios powered by market data and AI predictions
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Mentorship</h3>
              <p className="text-gray-600">
                24/7 access to AI mentors for instant feedback and guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;