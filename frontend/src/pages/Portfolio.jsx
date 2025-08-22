import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  CalendarIcon,
  AdjustmentsHorizontalIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const Portfolio = () => {
  const [timeframe, setTimeframe] = useState('1M');
  const [selectedAsset, setSelectedAsset] = useState(null);

  const timeframes = ['1D', '1W', '1M', '3M', '6M', '1Y', 'ALL'];

  const portfolioOverview = {
    totalValue: 45280.50,
    dayChange: 1250.30,
    dayChangePercent: 2.84,
    totalGainLoss: 5840.20,
    totalGainLossPercent: 14.8
  };

  const assets = [
    {
      id: 1,
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: 0.85,
      avgBuyPrice: 38500,
      currentPrice: 42850,
      totalValue: 18500,
      gainLoss: 3697.50,
      gainLossPercent: 24.98,
      allocation: 40.8,
      sparkline: [38000, 39200, 41000, 40500, 42850]
    },
    {
      id: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      amount: 7.5,
      avgBuyPrice: 2800,
      currentPrice: 2650,
      totalValue: 9950,
      gainLoss: -1125,
      gainLossPercent: -10.17,
      allocation: 21.9,
      sparkline: [2800, 2750, 2680, 2620, 2650]
    },
    {
      id: 3,
      symbol: 'AAPL',
      name: 'Apple Inc.',
      amount: 45,
      avgBuyPrice: 185,
      currentPrice: 192.30,
      totalValue: 8653.50,
      gainLoss: 328.50,
      gainLossPercent: 3.95,
      allocation: 19.1,
      sparkline: [185, 188, 190, 189, 192.30]
    },
    {
      id: 4,
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      amount: 12,
      avgBuyPrice: 220,
      currentPrice: 245.80,
      totalValue: 2949.60,
      gainLoss: 309.60,
      gainLossPercent: 11.72,
      allocation: 6.5,
      sparkline: [220, 225, 240, 238, 245.80]
    },
    {
      id: 5,
      symbol: 'GOLD',
      name: 'Gold ETF',
      amount: 25,
      avgBuyPrice: 195,
      currentPrice: 198.50,
      totalValue: 4962.50,
      gainLoss: 87.50,
      gainLossPercent: 1.79,
      allocation: 10.9,
      sparkline: [195, 196, 197, 198, 198.50]
    }
  ];

  const performanceMetrics = {
    sharpeRatio: 1.34,
    volatility: 18.6,
    maxDrawdown: -12.4,
    alpha: 2.8,
    beta: 1.12
  };

  const allocationData = [
    { category: 'Cryptocurrency', percentage: 62.7, color: 'bg-blue-500' },
    { category: 'Stocks', percentage: 25.6, color: 'bg-green-500' },
    { category: 'ETFs', percentage: 10.9, color: 'bg-yellow-500' },
    { category: 'Cash', percentage: 0.8, color: 'bg-gray-500' }
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
            <h1 className="text-3xl font-bold text-gray-900">Portfolio Analysis</h1>
            <p className="text-gray-600 mt-1">Detailed view of your investment performance</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {timeframes.map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    timeframe === tf
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
            <button className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              <AdjustmentsHorizontalIcon className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>
        </motion.div>

        {/* Portfolio Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Portfolio Value</h3>
              <p className="text-3xl font-bold text-gray-900">${portfolioOverview.totalValue.toLocaleString()}</p>
              <div className="flex items-center space-x-2 mt-2">
                {portfolioOverview.dayChange > 0 ? (
                  <ArrowUpIcon className="h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4 text-red-500" />
                )}
                <span className={`text-sm font-medium ${
                  portfolioOverview.dayChange > 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  ${Math.abs(portfolioOverview.dayChange).toLocaleString()} ({Math.abs(portfolioOverview.dayChangePercent)}%)
                </span>
                <span className="text-xs text-gray-500">today</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Gain/Loss</h3>
              <p className={`text-2xl font-bold ${
                portfolioOverview.totalGainLoss > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                ${Math.abs(portfolioOverview.totalGainLoss).toLocaleString()}
              </p>
              <p className={`text-sm font-medium ${
                portfolioOverview.totalGainLoss > 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {portfolioOverview.totalGainLoss > 0 ? '+' : '-'}{Math.abs(portfolioOverview.totalGainLossPercent)}% all time
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Performance Metrics</h3>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sharpe Ratio:</span>
                  <span className="font-medium">{performanceMetrics.sharpeRatio}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Volatility:</span>
                  <span className="font-medium">{performanceMetrics.volatility}%</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Risk Metrics</h3>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Max Drawdown:</span>
                  <span className="font-medium text-red-600">{performanceMetrics.maxDrawdown}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Beta:</span>
                  <span className="font-medium">{performanceMetrics.beta}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Holdings Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Holdings</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Asset</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-600">Amount</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-600">Avg Price</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-600">Current Price</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-600">Total Value</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-600">Gain/Loss</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-600">Allocation</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset, index) => (
                    <motion.tr
                      key={asset.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                        selectedAsset === asset.id ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => setSelectedAsset(asset.id === selectedAsset ? null : asset.id)}
                    >
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-xs">{asset.symbol}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{asset.symbol}</p>
                            <p className="text-sm text-gray-500">{asset.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-right font-medium text-gray-900">{asset.amount}</td>
                      <td className="p-4 text-right text-gray-600">${asset.avgBuyPrice.toLocaleString()}</td>
                      <td className="p-4 text-right font-medium text-gray-900">${asset.currentPrice.toLocaleString()}</td>
                      <td className="p-4 text-right font-semibold text-gray-900">${asset.totalValue.toLocaleString()}</td>
                      <td className="p-4 text-right">
                        <div className="flex flex-col items-end">
                          <span className={`font-medium ${
                            asset.gainLoss > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {asset.gainLoss > 0 ? '+' : ''}${asset.gainLoss.toLocaleString()}
                          </span>
                          <span className={`text-sm ${
                            asset.gainLoss > 0 ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {asset.gainLoss > 0 ? '+' : ''}{asset.gainLossPercent}%
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${asset.allocation}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600">{asset.allocation}%</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Asset Allocation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Asset Allocation</h3>
            
            {/* Pie Chart Visualization */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                  {allocationData.map((item, index) => {
                    const radius = 40;
                    const circumference = 2 * Math.PI * radius;
                    const strokeDasharray = (item.percentage / 100) * circumference;
                    const strokeDashoffset = -allocationData.slice(0, index).reduce((sum, prev) => sum + (prev.percentage / 100) * circumference, 0);
                    
                    return (
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke={item.color.replace('bg-', '').replace('-500', '') === 'blue' ? '#3B82F6' : 
                               item.color.replace('bg-', '').replace('-500', '') === 'green' ? '#10B981' :
                               item.color.replace('bg-', '').replace('-500', '') === 'yellow' ? '#F59E0B' : '#6B7280'}
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${strokeDasharray} ${circumference - strokeDasharray}`}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-300"
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-xs text-gray-500">Allocated</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {allocationData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-sm text-gray-700">{item.category}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{item.percentage}%</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Rebalance Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
