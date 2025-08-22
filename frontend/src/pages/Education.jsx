import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  AcademicCapIcon,
  PlayIcon,
  ClockIcon,
  StarIcon,
  UserGroupIcon,
  BookOpenIcon,
  TrophyIcon,
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const Education = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Courses', count: 48 },
    { id: 'basics', name: 'Finance Basics', count: 12 },
    { id: 'crypto', name: 'Cryptocurrency', count: 15 },
    { id: 'trading', name: 'Trading', count: 8 },
    { id: 'investment', name: 'Investment', count: 10 },
    { id: 'planning', name: 'Financial Planning', count: 3 }
  ];

  const courses = [
    {
      id: 1,
      title: 'Cryptocurrency Fundamentals',
      description: 'Learn the basics of Bitcoin, Ethereum, and blockchain technology',
      instructor: 'Dr. Sarah Chen',
      duration: '6 hours',
      price: '$99',
      rating: 4.8,
      students: 2847,
      category: 'crypto',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Advanced Trading Strategies',
      description: 'Master technical analysis and develop profitable trading strategies',
      instructor: 'Mark Johnson',
      duration: '8 hours',
      price: '$149',
      rating: 4.9,
      students: 1523,
      category: 'trading',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Personal Finance Planning',
      description: 'Create a comprehensive financial plan for your future',
      instructor: 'Lisa Rodriguez',
      duration: '4 hours',
      price: '$79',
      rating: 4.7,
      students: 3241,
      category: 'planning',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Investment Portfolio Management',
      description: 'Build and manage a diversified investment portfolio',
      instructor: 'David Kim',
      duration: '5 hours',
      price: '$119',
      rating: 4.6,
      students: 1876,
      category: 'investment',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'DeFi and Yield Farming',
      description: 'Understand decentralized finance and earning opportunities',
      instructor: 'Alex Thompson',
      duration: '7 hours',
      price: '$129',
      rating: 4.5,
      students: 987,
      category: 'crypto',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Financial Markets Basics',
      description: 'Introduction to stocks, bonds, and market fundamentals',
      instructor: 'Emma Wilson',
      duration: '3 hours',
      price: '$59',
      rating: 4.4,
      students: 4156,
      category: 'basics',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Premium Financial Education
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Master the skills you need to build wealth and achieve financial freedom with our expert-led courses and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Browse All Courses
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Start Free Trial
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Filter Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <AdjustmentsHorizontalIcon className="h-4 w-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                    <BookOpenIcon className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <UserGroupIcon className="h-4 w-4" />
                    <span className="text-sm">{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">by {course.instructor}</span>
                  <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Enroll Now
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <PlayIcon className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Structured Learning Paths
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow our expertly designed learning paths to master financial concepts step by step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <AcademicCapIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Beginner Path</h3>
              <p className="text-gray-600 mb-6">
                Start your financial journey with fundamental concepts and basic investment principles.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Financial Basics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Budgeting & Saving</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Investment Introduction</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Learning
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <ArrowTrendingUpIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intermediate Path</h3>
              <p className="text-gray-600 mb-6">
                Advance your knowledge with portfolio management and trading strategies.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Portfolio Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Risk Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Trading Basics</span>
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Continue Path
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <TrophyIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Path</h3>
              <p className="text-gray-600 mb-6">
                Master advanced strategies, crypto trading, and alternative investments.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Advanced Trading</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Cryptocurrency</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">DeFi & NFTs</span>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Master Skills
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;