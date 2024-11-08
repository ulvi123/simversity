import { Cpu, Users, Globe, CheckCircle, GraduationCap, Database } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-4 animate__animated animate__fadeInDown">RETHINKING HIGHER EDUCATION</div>
            <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeInUp">An Innovative University Model</h2>
            <p className="text-xl text-gray-600 animate__animated animate__fadeInUp">
              Focused on tech and business education with a global reach and personalized approach to maximize your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInLeft">
              <Cpu className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tech-Focused Curriculum</h3>
              <p className="text-gray-600">
                Comprehensive training in the latest technologies, programming languages, and business software used in the modern tech industry. Stay ahead of the curve with our cutting-edge curriculum.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accelerated Timeline</h3>
              <p className="text-gray-600">
                Complete your bachelor's degree in just 1 year by attending classes across 4 different locations around the world. Maximize your learning and experience in a compact timeframe.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInRight">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
              <p className="text-gray-600">
                Gain valuable international experience and cross-cultural understanding through our worldwide campus locations. Develop a global mindset to thrive in the modern interconnected world.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInLeft">
              <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Outcomes-Focused</h3>
              <p className="text-gray-600">
                Designed to maximize your career prospects, with a strong emphasis on practical skills, networking, and job placement assistance. We're committed to your success beyond graduation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp">
              <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-600">
                Our AI-powered adaptive learning platform creates a tailored curriculum to match your unique strengths, weaknesses, and learning style. Learn at your own pace and unlock your full potential.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInRight">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data-Driven Approach</h3>
              <p className="text-gray-600">
                Leverage real-time data analytics to continuously optimize the curriculum, teaching methods, and student support services. We're constantly innovating to provide you with the best educational experience.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center animate__animated animate__fadeInUp">
            <p className="text-gray-600">
              Trusted by leading tech companies and backed by industry experts, our innovative university model is designed to set you up for lifelong success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;