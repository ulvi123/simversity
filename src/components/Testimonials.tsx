import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-4">STUDENT SUCCESS STORIES</div>
            <h2 className="text-4xl font-bold mb-6">What Our Alumni Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-600 mb-6">
                "SimVersity's AI-powered learning approach helped me build my startup from scratch. The personalized feedback and real-world simulations were game-changing."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-gray-600">Founder, TechFlow</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-600 mb-6">
                "The industry connections and mentor network at SimVersity are unmatched. I secured seed funding during the program thanks to investor introductions."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-semibold">Marcus Rodriguez</div>
                  <div className="text-gray-600">CEO, DataSense</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;