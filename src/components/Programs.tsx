import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, User, BookOpen } from 'lucide-react';

// Card Component
const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl border border-gray-200 shadow-md overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-6">{children}</div>;
};

const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-6 pt-0">{children}</div>;
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-2xl font-bold mb-2">{children}</h3>;
};

const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-gray-600">{children}</p>;
};

// Badge Component
const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 ${className}`}
    >
      {children}
    </span>
  );
};

// Button Component
const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

// Accordion Component
const Accordion = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-2">{children}</div>;
};

const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-gray-200 rounded-md">
      <button
        className="flex justify-between items-center w-full px-4 py-2 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4">{children}</div>
      </motion.div>
    </div>
  );
};

// Program Interface
interface Program {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  badge: string;
}

// ProgramCard Component
const ProgramCard: React.FC<Program> = ({ title, description, details, icon, badge }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {icon}
            <CardTitle>{title}</CardTitle>
          </div>
          <Badge>{badge}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion>
          <AccordionItem title="Program Details">
            <ul className="list-disc pl-5 space-y-2">
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </AccordionItem>
        </Accordion>
        <Button className="w-full mt-4">Learn More</Button>
      </CardContent>
    </Card>
  );
};

// Programs Component
const Programs: React.FC = () => {
  const programs: Program[] = [
    {
      title: '1-Year Bachelor Alternative',
      description: 'A fast-tracked, immersive learning journey across four global campuses.',
      details: [
        'Quarter 1: Business & Strategy (Berlin, Germany)',
        'Quarter 2: Finance & International Expansion (Dubai, UAE)',
        'Quarter 3: Startup Culture & Tech (San Francisco, USA)',
        'Quarter 4: Digital Innovation & E-Governance (Tallinn, Estonia)',
      ],
      icon: <Globe className="text-blue-500 w-6 h-6" />,
      badge: 'Global',
    },
    {
      title: 'AI-Supported Nanodegree',
      description: 'Complete AI-supported nanodegrees in various tech fields.',
      details: [
        'Data Science: Master data analysis and machine learning',
        'Software Engineering: Gain hands-on development skills',
        'Digital Marketing: Learn SEO and digital advertising',
      ],
      icon: <Cpu className="text-green-500 w-6 h-6" />,
      badge: 'Tech',
    },
    {
      title: 'Global Internship Opportunities',
      description: 'Access internships with top companies in each program location.',
      details: [
        'Internships in Berlin, Dubai, San Francisco, and Tallinn',
        'Hands-on industry experience with mentorship',
        'Networking opportunities with professionals worldwide',
      ],
      icon: <User className="text-purple-500 w-6 h-6" />,
      badge: 'Career',
    },
    {
      title: 'Capstone Projects & Partnerships',
      description: 'Engage in capstone projects designed with industry leaders.',
      details: [
        'Collaborative projects with industry leaders',
        'Presentation to an expert panel at each campus',
        'Opportunity to network and showcase your skills',
      ],
      icon: <BookOpen className="text-orange-500 w-6 h-6" />,
      badge: 'Industry',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock your potential with our unique, one-year bachelor's alternative and AI-powered nanodegree programs.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;