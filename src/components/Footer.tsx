

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">SimVersity</div>
            <p className="text-gray-400">
              The world's first AI-powered startup university, revolutionizing entrepreneurship education.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Curriculum</a></li>
              <li><a href="#" className="hover:text-white">Mentorship</a></li>
              <li><a href="#" className="hover:text-white">Industry Projects</a></li>
              <li><a href="#" className="hover:text-white">Career Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SimVersity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer