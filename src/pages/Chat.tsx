import React, { useState, useEffect, useRef } from 'react';
import { Info, Circle, Send, Power } from 'lucide-react';

function Chat() {
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [serverStatus, setServerStatus] = useState('Offline');
  const [inputText, setInputText] = useState('');
  const serverIntake = ["Unknown", "Localhost", "Tunnel", "Azure", "None"];
  const Intake = 0;
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [messages, setMessages] = useState<
    { sender: string; text: string; timestamp: string }[]
  >([]);
  const API_URI = "https://chat.thisisujjwal.engineer/api/chat";
  const Start_Server_URI = "https://chat.thisisujjwal.engineer/start";
  const Stop_Server_URI  = "https://chat.thisisujjwal.engineer/stop";

  const bottomRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const isServerBusy = serverStatus === 'Turning On' || serverStatus === 'Turning Off';

  useEffect(() => {
    const handleUnload = async () => {
      if (serverStatus === 'Online') {
        try {
          setServerStatus('Offline');
          await navigator.sendBeacon(Stop_Server_URI);
        } catch (err) {
          console.error("Failed to stop server on unload", err);
        }
      }
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [serverStatus]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleServer = async () => {
    try {
      if (serverStatus === 'Online') {
        setServerStatus('Turning Off');
        await fetch(Stop_Server_URI, { method: 'POST' });
        setServerStatus('Offline'); // don't ping when backend is down
      } else if (serverStatus === 'Offline') {
        setServerStatus('Turning On');
        await fetch(Start_Server_URI, { method: 'POST' });
        setTimeout(() => checkServerStatus(), 1500); // ✅ only ping after start
      }
    } catch (error) {
      console.error("Server control failed:", error);
      setServerStatus("Offline");
    }
  };

  const checkServerStatus = async () => {
    try {
      const res = await fetch(API_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "ping",
          history: []
        }),
      });

      if (res.ok) {
        setServerStatus("Online");
      } else {
        setServerStatus("Offline");
      }
    } catch (error) {
      setServerStatus("Offline");
    }
  };

  const getPowerButtonColor = () => {
    switch (serverStatus) {
      case 'Online':
      case 'Turning Off':
        return 'text-red-500 hover:text-red-600';
      case 'Offline':
      case 'Turning On':
      default:
        return 'text-green-500 hover:text-green-600';
    }
  };

  const getStatusDotColor = () => {
    switch (serverStatus) {
      case 'Online':
        return 'text-green-500';
      case 'Offline':
        return 'text-red-500';
      default:
        return 'text-yellow-500'; // Turning On / Off
    }
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const currentInput = inputText;
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setInputText("");

    // Add user message to UI
    const newMessages = [...messages, { sender: 'You', text: currentInput, timestamp }];
    setMessages(newMessages);

    setIsTyping(true);

    try {
      const res = await fetch(API_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
          history: chatHistory
        }),
      });

      const data = await res.json();
      const botReply = data.response;
      const updatedHistory = data.history;

      // Update history and messages
      setChatHistory(updatedHistory);
      setMessages([...newMessages, {
        sender: 'ChatINC',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (error) {
      setMessages([...newMessages, {
         sender: 'ChatINC', 
         text: 'Error contacting server.',
         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const suggestions = [
    "Hello",
    "What are the fundamental rights guaranteed by the Constitution?",
    "How does Article 370 impact the status of Jammu and Kashmir?",
  ];

  const handleAcceptDisclaimer = () => {
    if (isChecked) {
      setHasAcceptedDisclaimer(true);
    }
  };

  const handleSuggestionClick = (text: string) => {
    setInputText(text);
  };

  if (!hasAcceptedDisclaimer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900/25 p-4">
        <div className="max-w-2xl w-full bg-gray-800 rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Disclaimer</h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            This chatbot is an independent AI system under active development. While it may attempt to provide professional advice, responses are generated automatically and may be incorrect or incomplete. Users should verify critical information independently and exercise discretion. The chatbot does not serve as a definitive authority and should be used as an informational tool rather than a sole source of guidance.
          </p>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="disclaimer"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
            />
            <label htmlFor="disclaimer" className="ml-2 text-gray-300">
              I have read and understood the disclaimer
            </label>
          </div>
          <button
            onClick={handleAcceptDisclaimer}
            disabled={!isChecked}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
              isChecked
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-auto bg-gray-900/25">
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-2">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center mb-2">
            <div className="relative inline-block">
              <h1 className="text-3xl font-bold">ChatINC</h1>
              <div className="absolute -top-1 -right-4 group">
                <Info size={14} className="text-gray-400 cursor-help" />
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 p-4 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <p className="text-sm text-gray-300">
                    ChatINC is an AI-powered chatbot designed to provide information about India's culture, history, and current affairs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-400">Chat with the Indian Constitution!</p>
        </div>

        <div className="bg-gray-800 rounded-lg h-[calc(100vh-16rem)] flex flex-col">
          <div className="pb-2 pt-1 opacity-50">

          </div>
          {/* Chat messages will go here */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Messages container */}
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`text-sm ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}>
                  <div className={`rounded-lg p-2 inline-block max-w-[80%] break-words ${
                    msg.sender === 'You' 
                      ? 'bg-gray-700 text-gray-400 self-end' 
                      : 'bg-gray-700 text-gray-400 self-start'
                    }`}>
                    <div className="p-1 border-b border-gray-500 mb-1 pb-1">
                      <p className="pb-1">
                        <strong className={msg.sender === 'You' ? 'text-purple-400' : 'text-purple-400'}>
                        {msg.sender}
                        </strong>
                      </p>
                    </div>
                    <p className="p-2 text-justify"> {msg.text} </p>
                  </div>
                  <span className="ml-2 text-xs text-gray-400 block">
                    {msg.timestamp}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="text-sm text-left text-gray-400">
                  <em>ChatINC is typing...</em>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          </div>

          {/* Suggestions */}
          {!inputText.trim() && (
            <div className="px-6 pb-4 pt-2 opacity-50">
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm transition-colors duration-300"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}


          {/* Input area */}
          <div className="border-t border-gray-700 p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask your Question..."
                  className="flex-1 min-w-0 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none min-h-[40px] max-h-[120px]"
                  style={{ height: 'auto' }}
                  rows={1}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = 'auto';
                    target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
                  }}
                />
                <button
                  className={`px-6 py-2 rounded-lg transition-colors duration-300 flex items-center h-[40px] ${
                    isTyping
                      ? 'bg-purple-300 text-gray-800 cursor-not-allowed'
                      : serverStatus === 'Online'
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={sendMessage}
                  disabled={serverStatus !== 'Online' || isTyping}
                  title={
                    isTyping
                      ? 'ChatINC is thinking...'
                      : serverStatus !== 'Online'
                        ? 'ChatINC is not online'
                        : ''
                  }
                >
                  <Send size={18} className="mr-2" />
                  Send
                </button>
              </div>
              
              {/* Server status moved inside chat area */}
              <div className="flex items-center text-sm text-gray-400">
                <button onClick={toggleServer} disabled={isServerBusy}>
                  <Power
                    size={16}
                    className={`mr-2 cursor-pointer transition-colors ${getPowerButtonColor()}`}
                  />
                </button>
                <span className="mr-2">Status:</span>
                <Circle
                  size={8}
                  className={`mr-2 ${getStatusDotColor()}`}
                  fill="currentColor"
                />
                <span>
                  {serverStatus}{' '}
                  <span className="text-gray-500">({serverIntake[Intake+1]})</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;