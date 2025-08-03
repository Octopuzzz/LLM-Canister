import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  BellIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Dashboard', path: '/dashboard', icon: ChartBarIcon },
    { name: 'Trading', path: '/trading', icon: ArrowTrendingUpIcon },
    { name: 'AI Chat', path: '/chat', icon: ChatBubbleLeftRightIcon },
    { name: 'Education', path: '/education', icon: AcademicCapIcon },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <CurrencyDollarIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              FinanceAI
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <UserCircleIcon className="h-5 w-5" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-gray-200 mt-4 pt-4"
          >
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-3 py-3 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
            
            {/* Mobile User Actions */}
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <button className="flex items-center space-x-3 py-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 w-full">
                <BellIcon className="h-5 w-5" />
                <span className="font-medium">Notifications</span>
              </button>
              <button className="flex items-center space-x-3 py-3 bg-blue-600 text-white rounded-lg px-4 w-full">
                <UserCircleIcon className="h-5 w-5" />
                <span className="font-medium">Login</span>
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;