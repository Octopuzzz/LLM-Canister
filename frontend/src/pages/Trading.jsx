import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChartBarIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Trading = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [orderType, setOrderType] = useState('buy');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  // Mock crypto data
  const cryptoData = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 42850.30,
      change: 3.2,
      volume: '2.5B',
      marketCap: '840B',
      icon: '₿',
      sparkline: [42000, 42200, 41800, 42500, 42850]
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: 2650.80,
      change: -1.8,
      volume: '1.8B',
      marketCap: '320B',
      icon: 'Ξ',
      sparkline: [2700, 2680, 2650, 2640, 2650]
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      price: 0.85,
      change: 8.1,
      volume: '450M',
      marketCap: '28B',
      icon: '₳',
      sparkline: [0.78, 0.82, 0.80, 0.83, 0.85]
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      price: 98.45,
      change: 5.4,
      volume: '890M',
      marketCap: '45B',
      icon: '◎',
      sparkline: [92, 95, 94, 97, 98.45]
    },
    {
      symbol: 'DOT',
      name: 'Polkadot',
      price: 6.28,
      change: -2.1,
      volume: '320M',
      marketCap: '8.5B',
      icon: '●',
      sparkline: [6.4, 6.3, 6.2, 6.25, 6.28]
    }
  ];

  const selectedCryptoData = cryptoData.find(crypto => crypto.symbol === selectedCrypto);

  const aiRecommendations = [
    {
      action: 'BUY',
      symbol: 'ETH',
      reason: 'Technical analysis shows oversold condition with strong support at $2600',
      confidence: 85,
      timeframe: '1-2 days'
    },
    {
      action: 'HOLD',
      symbol: 'BTC',
      reason: 'Price consolidating near resistance. Wait for breakout confirmation.',
      confidence: 72,
      timeframe: '3-5 days'
    },
    {
      action: 'SELL',
      symbol: 'ADA',
      reason: 'Overbought conditions detected. Consider taking profits.',
      confidence: 78,
      timeframe: 'Next 24h'
    }
  ];

  const handleTrade = () => {
    // Mock trade execution
    alert(`${orderType.toUpperCase()} order placed for ${amount} ${selectedCrypto} at $${price || 'market price'}`);
  };

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
            <h1 className="text-3xl font-bold text-gray-900">Crypto Trading</h1>
            <p className="text-gray-600 mt-1">Trade cryptocurrencies with AI-powered insights</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="text-right">
              <p className="text-sm text-gray-500">Available Balance</p>
              <p className="text-lg font-semibold text-gray-900">$12,450.80</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Crypto List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Market Overview</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Asset</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-600">Price</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-600">24h Change</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-600">Volume</th>
                    <th className="text-right p-4 text-sm font-medium text-gray-600">Market Cap</th>
                    <th className="text-center p-4 text-sm font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((crypto, index) => (
                    <motion.tr
                      key={crypto.symbol}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                        selectedCrypto === crypto.symbol ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => setSelectedCrypto(crypto.symbol)}
                    >
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">{crypto.icon}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{crypto.name}</p>
                            <p className="text-sm text-gray-500">{crypto.symbol}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <p className="font-medium text-gray-900">${crypto.price.toLocaleString()}</p>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end space-x-1">
                          {crypto.change > 0 ? (
                            <ArrowUpIcon className="h-4 w-4 text-green-500" />
                          ) : (
                            <ArrowDownIcon className="h-4 w-4 text-red-500" />
                          )}
                          <span className={`font-medium ${
                            crypto.change > 0 ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {Math.abs(crypto.change)}%
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-right text-gray-600">{crypto.volume}</td>
                      <td className="p-4 text-right text-gray-600">{crypto.marketCap}</td>
                      <td className="p-4 text-center">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                          Trade
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Trading Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Order Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Trade {selectedCryptoData?.name}
              </h3>
              
              <div className="space-y-4">
                {/* Order Type Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button 
                    onClick={() => setOrderType('buy')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      orderType === 'buy' 
                        ? 'bg-green-600 text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Buy
                  </button>
                  <button 
                    onClick={() => setOrderType('sell')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      orderType === 'sell' 
                        ? 'bg-red-600 text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Sell
                  </button>
                </div>

                {/* Price Display */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current Price</span>
                    <span className="font-semibold text-gray-900">
                      ${selectedCryptoData?.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    {selectedCryptoData?.change > 0 ? (
                      <ArrowUpIcon className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownIcon className="h-4 w-4 text-red-500" />
                    )}
                    <span className={`text-sm ${
                      selectedCryptoData?.change > 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {Math.abs(selectedCryptoData?.change)}% (24h)
                    </span>
                  </div>
                </div>

                {/* Amount Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount ({selectedCrypto})
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0.00"
                  />
                </div>

                {/* Price Input (Limit Order) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (USD) - Optional
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Market price"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Leave empty for market order
                  </p>
                </div>

                {/* Trade Button */}
                <button
                  onClick={handleTrade}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
                    orderType === 'buy' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {orderType === 'buy' ? 'Buy' : 'Sell'} {selectedCrypto}
                </button>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <ChartBarIcon className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">AI Recommendations</h3>
              </div>
              
              <div className="space-y-3">
                {aiRecommendations.map((rec, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          rec.action === 'BUY' ? 'bg-green-100 text-green-700' :
                          rec.action === 'SELL' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {rec.action}
                        </span>
                        <span className="font-medium text-gray-900">{rec.symbol}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <StarIcon className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-gray-600">{rec.confidence}%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{rec.reason}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      {rec.timeframe}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Trading;
