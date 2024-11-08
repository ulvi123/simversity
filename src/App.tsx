import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Campuses from './pages/Campuses'

const App = () => {
  return (
    <Router>
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
              </>
            }
          />
          <Route path="/campuses" element={<Campuses />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
