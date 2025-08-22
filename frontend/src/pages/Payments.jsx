import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  CreditCardIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowRightIcon,
  QrCodeIcon,
  WalletIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const Payments = () => {
  const [activeTab, setActiveTab] = useState('send');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [selectedToken, setSelectedToken] = useState('FINT');

  const walletBalance = {
    FINT: { balance: 25000, usdValue: 25000, symbol: 'FINT' },
    ETH: { balance: 2.5, usdValue: 6625, symbol: 'ETH' },
    BTC: { balance: 0.15, usdValue: 6427.50, symbol: 'BTC' },
    USDC: { balance: 5000, usdValue: 5000, symbol: 'USDC' }
  };

  const recentTransactions = [
    {
      id: 1,
      type: 'received',
      amount: 500,
      token: 'FINT',
      from: '0x742d...8a9f',
      to: 'Your Wallet',
      timestamp: '2025-08-03T10:30:00Z',
      status: 'completed',
      txHash: '0xabcd1234...',
      description: 'Education course payment'
    },
    {
      id: 2,
      type: 'sent',
      amount: 150,
      token: 'FINT',
      from: 'Your Wallet',
      to: '0x8b2c...4d5e',
      timestamp: '2025-08-03T09:15:00Z',
      status: 'completed',
      txHash: '0xefgh5678...',
      description: 'AI advisor subscription'
    },
    {
      id: 3,
      type: 'sent',
      amount: 0.05,
      token: 'ETH',
      from: 'Your Wallet',
      to: '0x9c3d...6f7g',
      timestamp: '2025-08-02T16:45:00Z',
      status: 'pending',
      txHash: '0xijkl9012...',
      description: 'Network fee payment'
    }
  ];

  const supportedTokens = [
    { symbol: 'FINT', name: 'FinanceAI Token', icon: '💎', network: 'Ethereum' },
    { symbol: 'ETH', name: 'Ethereum', icon: 'Ξ', network: 'Ethereum' },
    { symbol: 'BTC', name: 'Bitcoin', icon: '₿', network: 'Bitcoin' },
    { symbol: 'USDC', name: 'USD Coin', icon: '$', network: 'Ethereum' }
  ];

  const networkFees = {
    FINT: { slow: 5, standard: 10, fast: 20 },
    ETH: { slow: 0.001, standard: 0.002, fast: 0.005 },
    BTC: { slow: 0.0001, standard: 0.0003, fast: 0.0008 },
    USDC: { slow: 8, standard: 15, fast: 25 }
  };

  const handleSendPayment = () => {
    if (!amount || !recipient) {
      alert('Please fill in all required fields');
      return;
    }
    
    alert(`Sending ${amount} ${selectedToken} to ${recipient}`);
  };

  const formatAddress = (address) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold text-gray-900">Blockchain Payments</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Send and receive payments using our native FinanceAI Token (FINT) and other cryptocurrencies
          </p>
        </motion.div>

        {/* Wallet Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(walletBalance).map(([token, data]) => (
              <div key={token} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-100">{data.symbol}</span>
                  <WalletIcon className="h-5 w-5 text-blue-200" />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">{data.balance.toLocaleString()}</p>
                  <p className="text-blue-200">${data.usdValue.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <ShieldCheckIcon className="h-5 w-5 text-green-300" />
                <span className="text-sm text-blue-100">Your Wallet Address</span>
              </div>
              <p className="font-mono text-lg">0x742d35Cc7dF00b8a9F5A2d5e8C4F2a1B3E...</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <QrCodeIcon className="h-5 w-5 inline mr-2" />
                Show QR
              </button>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                Add Funds
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('send')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'send'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Send Payment
                </button>
                <button
                  onClick={() => setActiveTab('receive')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'receive'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Receive Payment
                </button>
              </div>
            </div>

            <div className="p-6">
              {activeTab === 'send' ? (
                <div className="space-y-6">
                  {/* Token Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Token
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {supportedTokens.map((token) => (
                        <button
                          key={token.symbol}
                          onClick={() => setSelectedToken(token.symbol)}
                          className={`p-4 border rounded-lg text-center transition-colors ${
                            selectedToken === token.symbol
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <div className="text-lg mb-1">{token.icon}</div>
                          <div className="font-medium text-sm">{token.symbol}</div>
                          <div className="text-xs text-gray-500">{token.network}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-4 py-3 pr-16 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0.00"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-gray-500 text-sm">{selectedToken}</span>
                      </div>
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      Available: {walletBalance[selectedToken]?.balance.toLocaleString()} {selectedToken}
                    </div>
                  </div>

                  {/* Recipient Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recipient Address
                    </label>
                    <input
                      type="text"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0x742d35Cc7dF00b8a9F5A2d5e8C4F2a1B3E..."
                    />
                  </div>

                  {/* Network Fee Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Network Fee
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(networkFees[selectedToken] || {}).map(([speed, fee]) => (
                        <div key={speed} className="border border-gray-300 rounded-lg p-3 text-center">
                          <div className="font-medium text-sm capitalize">{speed}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            {fee} {selectedToken === 'FINT' || selectedToken === 'USDC' ? 'GWEI' : selectedToken}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {speed === 'slow' ? '~5 min' : speed === 'standard' ? '~2 min' : '~30 sec'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleSendPayment}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Send Payment</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                    <QrCodeIcon className="h-24 w-24 text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Your Wallet Address</h3>
                    <p className="font-mono text-sm text-gray-600 bg-gray-100 p-3 rounded-lg">
                      0x742d35Cc7dF00b8a9F5A2d5e8C4F2a1B3E...
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Copy Address
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Transaction History */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
            </div>
            <div className="p-6 space-y-4">
              {recentTransactions.map((tx) => (
                <div key={tx.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    tx.type === 'received' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    {tx.type === 'received' ? (
                      <ArrowRightIcon className="h-4 w-4 text-green-600 rotate-180" />
                    ) : (
                      <ArrowRightIcon className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {tx.type === 'received' ? 'Received' : 'Sent'} {tx.amount} {tx.token}
                      </p>
                      <div className="flex items-center space-x-1">
                        {tx.status === 'completed' ? (
                          <CheckCircleIcon className="h-4 w-4 text-green-500" />
                        ) : (
                          <ClockIcon className="h-4 w-4 text-yellow-500" />
                        )}
                        <span className={`text-xs ${
                          tx.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                        }`}>
                          {tx.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{tx.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-gray-400">
                        {tx.type === 'received' ? 'From' : 'To'}: {formatAddress(tx.type === 'received' ? tx.from : tx.to)}
                      </p>
                      <p className="text-xs text-gray-400">
                        {new Date(tx.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Security & Trust</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bank-Level Security</h3>
              <p className="text-gray-600 text-sm">Multi-signature wallets and hardware security modules protect your funds</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CurrencyDollarIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Transparent Fees</h3>
              <p className="text-gray-600 text-sm">All transaction fees are clearly displayed with no hidden charges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Settlement</h3>
              <p className="text-gray-600 text-sm">Most transactions complete within minutes on our optimized network</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Payments;
