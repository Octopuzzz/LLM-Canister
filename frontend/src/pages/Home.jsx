import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowTrendingUpIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  AcademicCapIcon,
  CpuChipIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-12">
        <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Kiri: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                AI-Powered
                <span className="text-blue-600"> Financial</span>
                <br />
                Ecosystem
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Transform your financial future with our comprehensive AI-driven platform. Get personalized financial planning, crypto trading, blockchain payments, and premium education - all in one place.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Get Started Free
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$2.5B+</div>
                <div className="text-sm text-gray-600">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </motion.div>

          {/* Kanan: Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Background gradient circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
              
              {/* Dashboard mockup */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Portfolio Overview</h3>
                  <div className="text-green-500 text-sm font-medium">+12.5%</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Balance</span>
                    <span className="font-semibold">$45,280.00</span>
                  </div>
                  
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-3/4"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-xs text-blue-600 font-medium">Crypto</div>
                      <div className="text-lg font-bold text-blue-900">$28,450</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-xs text-green-600 font-medium">Stocks</div>
                      <div className="text-lg font-bold text-green-900">$16,830</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Everything You Need for Financial Success
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines AI intelligence, blockchain technology, and educational resources to empower your financial journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Financial Planner */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <CpuChipIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Financial Planner</h3>
              <p className="text-gray-600 mb-6">
                Get personalized financial advice from our AI-powered assistant that learns from your behavior and provides increasingly accurate recommendations.
              </p>
              <Link 
                to="/planner" 
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
              >
                Try AI Planner →
              </Link>
            </motion.div>

            {/* Crypto Trading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <ArrowTrendingUpIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Crypto Exchange</h3>
              <p className="text-gray-600 mb-6">
                Trade Bitcoin, Ethereum, and other cryptocurrencies with AI-powered insights, automated strategies, and real-time market analysis.
              </p>
              <Link 
                to="/trading" 
                className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
              >
                Start Trading →
              </Link>
            </motion.div>

            {/* Portfolio Management */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <ChartBarIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Portfolio Analytics</h3>
              <p className="text-gray-600 mb-6">
                Visualize your investments with advanced charts, risk analysis, and performance tracking across all your assets.
              </p>
              <Link 
                to="/portfolio" 
                className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center"
              >
                View Portfolio →
              </Link>
            </motion.div>

            {/* Blockchain Payments */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Blockchain Payments</h3>
              <p className="text-gray-600 mb-6">
                Secure, transparent transactions using our native token. All payments are recorded on the blockchain for maximum security.
              </p>
              <Link 
                to="/payments" 
                className="text-indigo-600 font-semibold hover:text-indigo-700 inline-flex items-center"
              >
                Learn More →
              </Link>
            </motion.div>

            {/* Education Marketplace */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <AcademicCapIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Education</h3>
              <p className="text-gray-600 mb-6">
                Access curated courses, webinars, and resources from financial experts to improve your investment knowledge and skills.
              </p>
              <Link 
                to="/education" 
                className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center"
              >
                Browse Courses →
              </Link>
            </motion.div>

            {/* Smart Chat Interface */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
                <CurrencyDollarIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Chat Assistant</h3>
              <p className="text-gray-600 mb-6">
                Ask financial questions, request portfolio analysis, and get personalized recommendations through our intelligent chat interface.
              </p>
              <Link 
                to="/chat" 
                className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center"
              >
                Start Chatting →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of users who are already building wealth with our AI-powered financial ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;