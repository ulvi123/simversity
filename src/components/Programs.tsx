import { Calendar, Globe, BookOpen, Cpu, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Programs = () => {
  const programs = [
    {
      title: '1-Year Bachelor Alternative',
      description:
        'A fast-tracked, immersive learning journey across four global campuses: Berlin, Dubai, San Francisco, and Tallinn. Gain industry knowledge, practical skills, and experience real-world simulations in diverse cultural and business environments.',
      details: [
        'Quarter 1: Business & Strategy (Berlin, Germany)',
        'Quarter 2: Finance & International Expansion (Dubai, UAE)',
        'Quarter 3: Startup Culture & Tech (San Francisco, USA)',
        'Quarter 4: Digital Innovation & E-Governance (Tallinn, Estonia)',
      ],
      icon: <Globe className="text-blue-500 w-6 h-6" />,
    },
    {
      title: 'AI-Supported Nanodegree Program',
      description:
        'Complete AI-supported nanodegrees in Data Science, Software Engineering, and Digital Marketing. These programs provide an adaptive learning path, personalized feedback, and AI-driven mentorship to help you excel in the tech-driven world.',
      details: [
        'Data Science: Master data analysis, machine learning, and big data management.',
        'Software Engineering: Gain hands-on skills in software development, deployment, and API management.',
        'Digital Marketing: Learn SEO, content strategy, and digital advertising with AI tools.',
      ],
      icon: <Cpu className="text-blue-500 w-6 h-6" />,
    },
    {
      title: 'Global Internship Opportunities',
      description:
        'Access internships with top companies in each program location, including opportunities in tech, finance, digital marketing, and e-governance sectors. Build your resume and network in dynamic international markets.',
      details: [
        'Internships in Berlin, Dubai, San Francisco, and Tallinn',
        'Hands-on industry experience with mentorship',
        'Networking opportunities with professionals worldwide',
      ],
      icon: <User className="text-blue-500 w-6 h-6" />,
    },
    {
      title: 'Capstone Projects & Industry Partnerships',
      description:
        'Engage in capstone projects designed with industry leaders. Present your projects to experts and receive valuable feedback. This program is in partnership with top global tech firms and startups.',
      details: [
        'Collaborative projects with industry leaders',
        'Presentation to an expert panel at each campus',
        'Opportunity to network and showcase your skills',
      ],
      icon: <BookOpen className="text-blue-500 w-6 h-6" />,
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-blue-600"
          >
            Discover Our Programs
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Unlock your potential with our unique, one-year bachelor’s alternative and AI-powered nanodegree programs. Gain global experience and advanced skills that set you apart.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 border hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                {program.icon}
                <h3 className="text-2xl font-semibold text-blue-600">
                  {program.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{program.description}</p>

              <div className="space-y-3">
                {program.details.map((detail, detailIndex) => (
                  <motion.p
                    key={detailIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                    className="flex items-start space-x-2 text-gray-500"
                  >
                    <Calendar className="w-5 h-5 text-blue-400 mt-1" />
                    <span>{detail}</span>
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
