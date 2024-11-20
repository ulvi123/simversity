import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, ChevronDown, ChevronUp } from 'lucide-react';


interface PricingTierProps {
    name: string;
    price: string;
    period: string;
    features: string[];
    popular: boolean;
    cta: string;
    highlight: boolean;
  }

interface FAQProps {
    question: string;
    answer: string;
  }


const PricingTier: React.FC<PricingTierProps> = ({ name, price, period, features, popular, cta, highlight }) => (
  <motion.div
    className={`bg-white rounded-xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden ${
      popular ? 'border-blue-500 border-2' : ''
    }`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {popular && (
      <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
        <Star className="w-4 h-4" /> Most Popular
      </div>
    )}
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <div className="text-4xl font-bold mb-2">{price}</div>
      <p className="text-gray-600">{period}</p>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <motion.button
      className={`w-full ${highlight ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {cta} <ArrowRight className="w-4 h-4" />
    </motion.button>
  </motion.div>
);

const FAQItem : React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-600"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: 'Free Trial',
      price: '€0',
      period: '14 days',
      features: [
        'Limited course access',
        'Community forum',
        'Basic support',
      ],
      popular: false,
      cta: 'Start Free Trial',
      highlight: false,
    },
    {
      name: 'Basic',
      price: '€49',
      period: 'per month',
      features: [
        'Full course library',
        'Progress tracking',
        'Certificate of completion',
        'Email support',
      ],
      popular: false,
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '€99',
      period: 'per month',
      features: [
        'Everything in Basic',
        'Live Q&A sessions',
        'Instructor-led projects',
        'Job placement assistance',
        '24/7 phone support',
      ],
      popular: true,
      cta: 'Choose Pro',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Tailored solutions',
      features: [
        'Custom curriculum',
        'Dedicated account manager',
        'On-site training options',
        'API access',
        'Advanced analytics',
      ],
      popular: false,
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'Our 14-day free trial gives you limited access to our course library and community forum. You can upgrade to a paid plan at any time during or after the trial.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you are not satisfied, you can request a full refund within the first 30 days of your subscription.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. For Enterprise plans, we also offer invoicing options.',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-600 font-semibold mb-4"
            >
              PRICING PLANS
            </motion.div>
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold mb-6"
            >
              Choose the Perfect Plan for Your Learning Journey
            </motion.h2>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600"
            >
              Flexible options to suit your needs and budget
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {tiers.map((tier, index) => (
              <PricingTier key={index} {...tier} />
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;