import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  PaperAirplaneIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  LightBulbIcon,
  UserIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your AI Financial Assistant. I can help you with portfolio analysis, investment recommendations, market insights, and financial planning. What would you like to know?",
      timestamp: new Date().toISOString(),
      suggestions: [
        "Analyze my portfolio performance",
        "What are the best crypto investments right now?",
        "Create a financial plan for retirement",
        "Show me market trends"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mockAIResponse = (userMessage) => {
    const responses = {
      portfolio: {
        content: "Based on your current portfolio analysis:\n\n📊 **Portfolio Performance:**\n- Total Value: $45,280\n- 30-day Return: +5.47% (+$2,340)\n- Best Performer: Cardano (+8.1%)\n- Diversification Score: 7.2/10\n\n💡 **Recommendations:**\n1. Consider rebalancing - your crypto allocation is at 62.8%\n2. Add more traditional assets for stability\n3. Take profits on ADA given the recent surge\n\nWould you like me to create a detailed rebalancing strategy?",
        suggestions: ["Create rebalancing strategy", "Show risk analysis", "Compare with market average"]
      },
      crypto: {
        content: "Here are the top crypto opportunities based on current market analysis:\n\n🚀 **Top Picks:**\n\n**1. Ethereum (ETH)** - $2,650\n- Oversold condition detected\n- Strong support at $2,600\n- Confidence: 85%\n\n**2. Solana (SOL)** - $98.45\n- Breaking resistance levels\n- High trading volume\n- Confidence: 78%\n\n**3. Polkadot (DOT)** - $6.28\n- Undervalued compared to peers\n- Technical indicators bullish\n- Confidence: 72%\n\n⚠️ **Risk Warning:** Crypto markets are highly volatile. Only invest what you can afford to lose.",
        suggestions: ["Get detailed ETH analysis", "Set price alerts", "Show risk metrics"]
      },
      financial_plan: {
        content: "Let me help you create a comprehensive financial plan:\n\n🎯 **Retirement Planning Framework:**\n\n**Step 1: Goal Setting**\n- Target retirement age: ?\n- Desired monthly income: ?\n- Current age: ?\n\n**Step 2: Current Analysis**\n- Monthly income: $8,500 (estimated)\n- Monthly expenses: $4,200 (estimated)\n- Savings rate: 25% (Good!)\n\n**Step 3: Investment Strategy**\n- Emergency fund: 6 months expenses\n- 401(k) maximum employer match\n- Diversified portfolio: 70% stocks, 30% bonds\n- Crypto allocation: Max 10% of total\n\nTo provide a personalized plan, I need more details about your specific situation.",
        suggestions: ["Provide my financial details", "Calculate retirement target", "Show investment allocation"]
      },
      market: {
        content: "📈 **Current Market Trends:**\n\n**Global Markets:**\n- S&P 500: +2.1% (week)\n- NASDAQ: +3.4% (week)\n- Gold: $1,945 (+0.8%)\n\n**Crypto Markets:**\n- Total Market Cap: $1.2T\n- Bitcoin Dominance: 52.3%\n- Fear & Greed Index: 68 (Greed)\n\n**Key Trends:**\n1. 🤖 AI stocks continue rally\n2. 🏦 Banking sector shows strength\n3. ⚡ Energy transition accelerating\n4. 💰 DeFi protocols gaining traction\n\n**Week Ahead:**\n- Fed interest rate decision (Wednesday)\n- Tech earnings reports\n- Crypto ETF news expected",
        suggestions: ["Get sector analysis", "Show top movers", "Set market alerts"]
      }
    };

    const message = userMessage.toLowerCase();
    if (message.includes('portfolio') || message.includes('performance')) {
      return responses.portfolio;
    } else if (message.includes('crypto') || message.includes('bitcoin') || message.includes('ethereum')) {
      return responses.crypto;
    } else if (message.includes('financial plan') || message.includes('retirement') || message.includes('planning')) {
      return responses.financial_plan;
    } else if (message.includes('market') || message.includes('trend')) {
      return responses.market;
    } else {
      return {
        content: `I understand you're asking about: "${userMessage}"\n\nI can help you with various financial topics including:\n\n💼 Portfolio management\n📊 Market analysis\n🤖 AI-powered insights\n💰 Investment recommendations\n📈 Risk assessment\n🎯 Financial planning\n\nCould you be more specific about what you'd like to know?`,
        suggestions: ["Analyze my portfolio", "Show market trends", "Investment advice", "Risk analysis"]
      };
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = mockAIResponse(inputMessage);
      const aiMessage = {
        id: messages.length + 2,
        type: 'ai',
        content: aiResponse.content,
        timestamp: new Date().toISOString(),
        suggestions: aiResponse.suggestions
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickActions = [
    { icon: ChartBarIcon, label: 'Portfolio Analysis', query: 'Analyze my portfolio performance' },
    { icon: ArrowTrendingUpIcon, label: 'Market Trends', query: 'Show me current market trends' },
    { icon: CurrencyDollarIcon, label: 'Investment Advice', query: 'What are the best investments right now?' },
    { icon: LightBulbIcon, label: 'Financial Planning', query: 'Help me create a financial plan' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border-b border-gray-200 p-6"
      >
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <CpuChipIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AI Financial Assistant</h1>
            <p className="text-gray-600">Your personal finance advisor powered by artificial intelligence</p>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleSuggestionClick(action.query)}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                <action.icon className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-3xl ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} space-x-3`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' 
                    ? 'bg-blue-600 ml-3' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 mr-3'
                }`}>
                  {message.type === 'user' ? (
                    <UserIcon className="h-4 w-4 text-white" />
                  ) : (
                    <CpuChipIcon className="h-4 w-4 text-white" />
                  )}
                </div>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white shadow-sm border border-gray-200'
                }`}>
                  <div className="whitespace-pre-wrap">{message.content}</div>
                  
                  {message.suggestions && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-500 font-medium">Suggested actions:</p>
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className={`text-xs mt-2 ${
                    message.type === 'user' ? 'text-blue-200' : 'text-gray-500'
                  }`}>
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <CpuChipIcon className="h-4 w-4 text-white" />
                </div>
                <div className="bg-white shadow-sm border border-gray-200 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-4">
            <div className="flex-1">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your finances, investments, or market trends..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows="1"
                style={{ minHeight: '48px' }}
              />
            </div>
            <button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-3 rounded-xl transition-colors"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
