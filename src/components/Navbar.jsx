import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <FaCoffee className="h-8 w-8 text-brown-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Cozy Corner Café</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-brown-600 transition-colors">Home</Link>
            <Link to="/menu" className="text-gray-600 hover:text-brown-600 transition-colors">Menu</Link>
            <Link to="/contact" className="text-gray-600 hover:text-brown-600 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;