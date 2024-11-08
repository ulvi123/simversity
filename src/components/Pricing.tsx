import React from 'react';
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-4">FLEXIBLE PRICING OPTIONS</div>
            <h2 className="text-4xl font-bold mb-6">Investment in Your Future</h2>
            <p className="text-xl text-gray-600">
              Choose the payment plan that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Upfront Payment</h3>
                <div className="text-4xl font-bold mb-2">€24,000</div>
                <p className="text-gray-600">One-time payment</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>€6,000 savings vs. monthly plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Full program access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Exclusive workshops</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>1-on-1 mentorship</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Monthly Plan</h3>
                <div className="text-4xl font-bold mb-2">€2,500</div>
                <p className="text-gray-600">per month for 12 months</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Flexible payment schedule</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Full program access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Standard workshops</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Group mentorship</span>
                </li>
              </ul>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;