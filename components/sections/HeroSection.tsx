"use client";

import './HeroSection.css'; // Import your CSS file for styles
import { useState } from "react";

export default function HeroSection() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>(["🤖 Hi! How can I help you today?"]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  const fakeReplies = [
    "Sure! Can you tell me more?",
    "Interesting question 🤔",
    "Let me check that for you...",
    "Absolutely! Here's what I found...",
    "Got it ✅",
    "Hmm, that's something I can help with!"
  ];

  const sendMessage = () => {
    if (input.trim() === "") return;

    // Add your message
    setMessages((prev) => [...prev, `🧑 You: ${input}`]);
    setInput("");

    // Simulate bot typing
    setIsBotTyping(true);
    setTimeout(() => {
      const randomReply = fakeReplies[Math.floor(Math.random() * fakeReplies.length)];
      setMessages((prev) => [...prev, `🤖 ${randomReply}`]);
      setIsBotTyping(false);
    }, 1500);
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-white py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Heading half black, half blue */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-black">Your Business,</span>{" "}
          <span className="text-blue-600">Powered by AI</span>
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Automate, optimize, and grow with our AI-powered tools.
        </p>

        <button
          onClick={() => setChatOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          💬 Chat with us
        </button>
      </div>

      {/* Chat Widget */}
      {chatOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white rounded-lg shadow-lg z-[9999] border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b bg-gray-100 rounded-t-lg">
            <h3 className="font-semibold">Chat with us</h3>
            <button
              onClick={() => setChatOpen(false)}
              className="text-red-500 text-lg font-bold"
            >
              ✖
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-3 text-gray-700 space-y-2 max-h-60">
            {messages.map((msg, i) => (
              <p key={i} className="bg-gray-100 p-2 rounded">
                {msg}
              </p>
            ))}
            {isBotTyping && (
              <p className="italic text-gray-500">🤖 Typing...</p>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating chat icon when closed */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-[9999]"
        >
          💬
        </button>
      )}
    </section>
  );
}
