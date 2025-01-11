import React, { useState } from 'react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string, text: string }[]>([]);
  const [input, setInput] = useState('');

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Send message function
  const sendMessage = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { sender: 'user', text: input }]);

      // Simulate bot reply
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: `You said: "${input}"` },
      ]);

      setInput('');
    }
  };

  // Toggle the chatbot window
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Floating Chatbot Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-8 right-8 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-all"
      >
        🗨️
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-8 z-50 w-96 h-96 bg-white shadow-lg rounded-lg border-2 border-gray-200 p-4 animate-chatbot">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">AI Chatbot</h3>
            <button
              onClick={toggleChatbot}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              ❌
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="h-3/4 overflow-y-auto mb-4 p-2 bg-gray-50 rounded-lg border border-gray-300">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 mb-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-200'}`}
              >
                <strong>{message.sender === 'user' ? 'You' : 'Bot'}:</strong> {message.text}
              </div>
            ))}
          </div>

          {/* Typing Area and Send Button */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={handleInputChange}
              className="flex-1 p-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={sendMessage}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotButton;
