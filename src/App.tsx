import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TooltipProvider } from '@radix-ui/react-tooltip';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Campuses from './pages/Campuses';
import Programs from './components/Programs';

const App = () => {
  return (
    <Router>
      <TooltipProvider> {/* Wrap TooltipProvider here */}
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <Curriculum />
                  <Pricing />
                  <Testimonials />
                  <Programs />
                </>
              }
            />
            <Route path="/campuses" element={<Campuses />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/curriculum" element={<Curriculum />} />
          </Routes>
          <Footer />
        </div>
      </TooltipProvider>
    </Router>
  );
};

export default App;
