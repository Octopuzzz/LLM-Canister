import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  
  // Mock data
  const portfolioData = {
    totalBalance: 45280.50,
    totalChange: 2340.20,
    changePercent: 5.47,
    cryptoBalance: 28450.30,
    stocksBalance: 16830.20,
    cashBalance: 12450.80
  };

  const recentTransactions = [
    { id: 1, type: 'buy', asset: 'Bitcoin', amount: 0.5, value: 15000, date: '2025-08-03', status: 'completed' },
    { id: 2, type: 'sell', asset: 'Ethereum', amount: 3.2, value: 8500, date: '2025-08-02', status: 'completed' },
    { id: 3, type: 'buy', asset: 'AAPL', amount: 25, value: 4200, date: '2025-08-01', status: 'pending' },
  ];

  const cryptoHoldings = [
    { symbol: 'BTC', name: 'Bitcoin', amount: 0.85, value: 18500, change: 3.2, icon: '₿' },
    { symbol: 'ETH', name: 'Ethereum', amount: 7.5, value: 9950, change: -1.8, icon: 'Ξ' },
    { symbol: 'ADA', name: 'Cardano', amount: 15000, value: 3500, change: 8.1, icon: '₳' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's your financial overview.</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Add Funds
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Withdraw
            </button>
          </div>
        </motion.div>

        {/* Portfolio Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 text-sm font-medium">Total Balance</h3>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showBalance ? <EyeIcon className="h-4 w-4" /> : <EyeSlashIcon className="h-4 w-4" />}
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-gray-900">
                {showBalance ? `$${portfolioData.totalBalance.toLocaleString()}` : '••••••'}
              </p>
              <div className="flex items-center space-x-1">
                <ArrowUpIcon className="h-4 w-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">
                  +${portfolioData.totalChange.toLocaleString()} ({portfolioData.changePercent}%)
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 text-sm font-medium">Crypto Holdings</h3>
              <div className="p-2 bg-blue-100 rounded-lg">
                <CurrencyDollarIcon className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-gray-900">
                ${portfolioData.cryptoBalance.toLocaleString()}
              </p>
              <p className="text-gray-500 text-sm">62.8% of portfolio</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 text-sm font-medium">Stock Holdings</h3>
              <div className="p-2 bg-green-100 rounded-lg">
                <ArrowTrendingUpIcon className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-gray-900">
                ${portfolioData.stocksBalance.toLocaleString()}
              </p>
              <p className="text-gray-500 text-sm">37.2% of portfolio</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 text-sm font-medium">Available Cash</h3>
              <div className="p-2 bg-gray-100 rounded-lg">
                <BanknotesIcon className="h-5 w-5 text-gray-600" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-gray-900">
                ${portfolioData.cashBalance.toLocaleString()}
              </p>
              <p className="text-gray-500 text-sm">Ready to invest</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Crypto Holdings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Crypto Holdings</h3>
            </div>
            <div className="p-6 space-y-4">
              {cryptoHoldings.map((crypto, index) => (
                <div key={crypto.symbol} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{crypto.icon}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{crypto.name}</p>
                      <p className="text-sm text-gray-500">{crypto.amount} {crypto.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">${crypto.value.toLocaleString()}</p>
                    <div className="flex items-center space-x-1">
                      {crypto.change > 0 ? (
                        <ArrowUpIcon className="h-3 w-3 text-green-500" />
                      ) : (
                        <ArrowDownIcon className="h-3 w-3 text-red-500" />
                      )}
                      <span className={`text-sm ${crypto.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {Math.abs(crypto.change)}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Transactions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
            </div>
            <div className="p-6 space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'buy' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {transaction.type === 'buy' ? (
                        <ArrowUpIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <ArrowDownIcon className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {transaction.type === 'buy' ? 'Bought' : 'Sold'} {transaction.asset}
                      </p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">${transaction.value.toLocaleString()}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      transaction.status === 'completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <ArrowTrendingUpIcon className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Buy Crypto</span>
            </button>
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <ArrowTrendingDownIcon className="h-8 w-8 text-red-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Sell Assets</span>
            </button>
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <ChartBarIcon className="h-8 w-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">View Analytics</span>
            </button>
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <CurrencyDollarIcon className="h-8 w-8 text-purple-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">AI Advisor</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
