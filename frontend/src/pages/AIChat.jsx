import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  PaperAirplaneIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  LightBulbIcon,
  UserIcon,
  CpuChipIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm PlavBot Your AI Financial Assistant. I can help you with portfolio analysis, investment recommendations, market insights, and financial planning. What would you like to know?",
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
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // Initialize Gemini AI with the correct model name
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simplified and more aggressive formatting function to eliminate ALL asterisks
  const formatMessageContent = (content) => {
    if (!content) return content;
    
    // Aggressively clean all asterisks that are used for formatting
    let processedContent = content
      // Handle bold first: **text** -> <strong>text</strong>
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Handle bullet points: * text -> • text (at start of line)
      .replace(/^\*\s+/gm, '• ')
      // Handle remaining asterisks that might be bullets without spaces
      .replace(/^\*([^\*\s])/gm, '• $1')
      // Handle asterisks in the middle of line that are likely bullets
      .replace(/\n\*\s+/g, '\n• ')
      // Remove any remaining single asterisks that look like formatting
      .replace(/\*([^*\s]+):/g, '• $1:')
      // Clean up any remaining stray asterisks - be very aggressive
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/(?<!\w)\*(?!\w)/g, '•')
      // Final cleanup for any remaining asterisks
      .replace(/\*/g, '');

    // Split the content by lines
    const lines = processedContent.split('\n');
    
    return lines.map((line, lineIndex) => {
      const trimmedLine = line.trim();
      
      // Handle bullet points
      if (trimmedLine.startsWith('• ')) {
        const bulletContent = trimmedLine.substring(2);
        
        return (
          <div key={`line-${lineIndex}`} className="flex items-start ml-4 mb-1">
            <span className="text-blue-600 font-bold mr-2 mt-1">•</span>
            <span 
              className="flex-1" 
              dangerouslySetInnerHTML={{ __html: bulletContent.replace(/<strong>/g, '<strong class="font-semibold text-gray-900">') }} 
            />
          </div>
        );
      }
      
      // Handle numbered lists
      const numberedMatch = trimmedLine.match(/^(\d+\.)\s+(.*)$/);
      if (numberedMatch) {
        const [, number, content] = numberedMatch;
        
        return (
          <div key={`line-${lineIndex}`} className="flex items-start ml-4 mb-1">
            <span className="text-blue-600 font-semibold mr-2 min-w-[20px]">{number}</span>
            <span 
              className="flex-1" 
              dangerouslySetInnerHTML={{ __html: content.replace(/<strong>/g, '<strong class="font-semibold text-gray-900">') }} 
            />
          </div>
        );
      }
      
      // Regular lines
      return (
        <div key={`line-${lineIndex}`}>
          <span 
            dangerouslySetInnerHTML={{ 
              __html: line.replace(/<strong>/g, '<strong class="font-semibold text-gray-900">') 
            }} 
          />
          {lineIndex < lines.length - 1 && line.trim() !== '' && <br />}
        </div>
      );
    });
  };

  // Function to call Gemini API
  const callGeminiAPI = async (userMessage) => {
    try {
      setError(null);
      
      // Create conversation context
      const conversationHistory = messages
        .filter(msg => msg.type !== 'ai' || !msg.suggestions)
        .slice(-10) // Keep last 10 messages for context
        .map(msg => `${msg.type === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
        .join('\n');

      // Financial assistant prompt with context
      const prompt = `You are a professional AI Financial Assistant specializing in:
- Portfolio analysis and optimization
- Investment recommendations (stocks, crypto, bonds)
- Market analysis and trends
- Financial planning and budgeting
- Risk assessment
- Cryptocurrency trading advice
- Economic insights

Context from previous conversation:
${conversationHistory}

Current user question: ${userMessage}

Please provide:
1. A comprehensive, professional response
2. Use relevant financial data and insights
3. Include specific recommendations when appropriate
4. Format with emojis and bullet points for readability
5. Add relevant warnings about risks when discussing investments
6. Keep responses under 500 words but informative
7. Use **bold** formatting for important terms and disclaimers
8. Use bullet points with * for lists

Respond as a helpful financial advisor would, with expertise and professionalism.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return {
        content: text,
        suggestions: generateContextualSuggestions(text, userMessage)
      };
    } catch (error) {
      console.error('Gemini API error:', error);
      
      let errorMessage = 'Sorry, I encountered an error connecting to the AI service. Please try again.';
      
      if (error.message?.includes('API key') || error.message?.includes('invalid')) {
        errorMessage = 'Invalid API key. Please check your Gemini API key configuration.';
      } else if (error.message?.includes('quota') || error.message?.includes('limit')) {
        errorMessage = 'API quota exceeded. Please try again later or check your billing.';
      } else if (error.message?.includes('safety') || error.message?.includes('blocked')) {
        errorMessage = 'Content filtered for safety. Please rephrase your question.';
      } else if (error.message?.includes('not found') || error.message?.includes('404')) {
        errorMessage = 'AI model not available. The service might be temporarily down.';
      } else if (error.message?.includes('network') || error.message?.includes('fetch')) {
        errorMessage = 'Network error. Please check your internet connection.';
      }
      
      throw new Error(errorMessage);
    }
  };

  // Generate contextual suggestions based on AI response and user input
  const generateContextualSuggestions = (response, userMessage) => {
    const responseLower = response.toLowerCase();
    const userLower = userMessage.toLowerCase();
    
    if (responseLower.includes('portfolio') || userLower.includes('portfolio')) {
      return ["Show detailed breakdown", "Risk analysis", "Rebalancing strategy", "Performance comparison"];
    } else if (responseLower.includes('crypto') || userLower.includes('crypto') || userLower.includes('bitcoin')) {
      return ["Price predictions", "Technical analysis", "Market sentiment", "Risk management"];
    } else if (responseLower.includes('market') || userLower.includes('market') || userLower.includes('trend')) {
      return ["Sector analysis", "Economic indicators", "Market outlook", "Investment opportunities"];
    } else if (responseLower.includes('plan') || userLower.includes('planning') || userLower.includes('retirement')) {
      return ["Investment timeline", "Savings calculator", "Tax strategies", "Goal setting"];
    } else if (responseLower.includes('stock') || userLower.includes('stock')) {
      return ["Stock screening", "Dividend analysis", "Company research", "Valuation metrics"];
    } else {
      return ["Portfolio review", "Investment ideas", "Risk assessment", "Market analysis"];
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsTyping(true);
    setError(null);

    try {
      const aiResponse = await callGeminiAPI(currentInput);
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: aiResponse.content,
        timestamp: new Date().toISOString(),
        suggestions: aiResponse.suggestions
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: `❌ **Error:** ${error.message}\n\nPlease try rephrasing your question or try again in a moment.`,
        timestamp: new Date().toISOString(),
        suggestions: ["Try again", "Ask different question", "Check connection"],
        isError: true
      };

      setMessages(prev => [...prev, errorMessage]);
      setError(error.message);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (suggestion === "Try again") {
      // Retry the last user message
      const lastUserMessage = messages.filter(msg => msg.type === 'user').pop();
      if (lastUserMessage) {
        setInputMessage(lastUserMessage.content);
      }
    } else {
      setInputMessage(suggestion);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickActions = [
    { icon: ChartBarIcon, label: 'Portfolio Analysis', query: 'Analyze my portfolio performance and suggest improvements' },
    { icon: ArrowTrendingUpIcon, label: 'Market Trends', query: 'What are the current market trends and opportunities?' },
    { icon: CurrencyDollarIcon, label: 'Investment Advice', query: 'What are the best investment opportunities right now?' },
    { icon: LightBulbIcon, label: 'Financial Planning', query: 'Help me create a comprehensive financial plan' }
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
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">AI Financial Assistant</h1>
            <p className="text-gray-600">Your intelligent finance advisor</p>
          </div>
          
          {/* Status Indicator */}
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${error ? 'bg-red-500' : 'bg-green-500'}`}></div>
            <span className={`text-xs ${error ? 'text-red-600' : 'text-green-600'}`}>
              {error ? 'Error' : 'Online'}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Error Banner */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-b border-red-200 p-4"
        >
          <div className="max-w-4xl mx-auto flex items-center space-x-2 text-red-700">
            <ExclamationTriangleIcon className="h-5 w-5" />
            <span className="text-sm">{error}</span>
            <button 
              onClick={() => setError(null)}
              className="ml-auto text-red-600 hover:text-red-800"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}

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
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors whitespace-nowrap disabled:opacity-50"
                disabled={isTyping}
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
              <div className={`flex max-w-4xl ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} space-x-3`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' 
                    ? 'bg-blue-600 ml-3' 
                    : message.isError
                    ? 'bg-red-600 mr-3'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 mr-3'
                }`}>
                  {message.type === 'user' ? (
                    <UserIcon className="h-4 w-4 text-white" />
                  ) : message.isError ? (
                    <ExclamationTriangleIcon className="h-4 w-4 text-white" />
                  ) : (
                    <CpuChipIcon className="h-4 w-4 text-white" />
                  )}
                </div>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white max-w-md' 
                    : message.isError
                    ? 'bg-red-50 shadow-sm border border-red-200 max-w-3xl'
                    : 'bg-white shadow-sm border border-gray-200 max-w-3xl'
                }`}>
                  {/* Updated message content rendering with formatting */}
                  <div className="leading-relaxed">
                    {formatMessageContent(message.content)}
                  </div>
                  
                  {message.suggestions && (
                    <div className="mt-4 space-y-2">
                      <p className={`text-sm font-medium ${
                        message.isError ? 'text-red-600' : 'text-gray-500'
                      }`}>
                        {message.isError ? 'Quick actions:' : 'Explore more:'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className={`px-3 py-1 rounded-full text-sm transition-colors ${
                              message.isError 
                                ? 'bg-red-100 hover:bg-red-200 text-red-700'
                                : 'bg-blue-50 hover:bg-blue-100 text-blue-700'
                            }`}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className={`text-xs mt-2 ${
                    message.type === 'user' ? 'text-blue-200' : 
                    message.isError ? 'text-red-500' : 'text-gray-500'
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
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-xs text-gray-500">AI is thinking...</span>
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
                placeholder="Ask me anything about investments, market trends, portfolio analysis, crypto, financial planning..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                rows="1"
                style={{ minHeight: '48px', maxHeight: '120px' }}
                disabled={isTyping}
              />
            </div>
            <button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-colors flex items-center justify-center min-w-[48px]"
              title={isTyping ? 'AI is processing...' : 'Send message'}
            >
              {isTyping ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <PaperAirplaneIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-500 text-center">
            Powered by Google Gemini AI • Financial advice for informational purposes only
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;