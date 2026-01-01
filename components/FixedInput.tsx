"use client";

import { useState, useRef, useEffect } from "react";
import { InputGroup, InputGroupInput, InputGroupButton, InputGroupAddon } from "@/components/ui/input-group";
import { HugeiconsIcon } from "@hugeicons/react";
import { Airplane01Icon, AiChat01Icon, UserIcon, Cancel01Icon } from "@hugeicons/core-free-icons";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export default function FixedInput() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const openChat = () => {
    setIsChatOpen(true);
    // Add initial greeting message
    const greetingMessage: Message = {
      id: Date.now().toString(),
      content: "Hi! I'm ubeyidah's AI assistant. I can tell you about their background, projects, technologies, and more. What would you like to know?",
      role: 'assistant',
      timestamp: new Date()
    };
    setMessages([greetingMessage]);
  };

  const closeChat = () => {
    setIsChatOpen(false);
    setMessages([]);
    setMessage("");
    setIsTyping(false);
  };

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Portfolio knowledge base
    if (lowerMessage.includes('who are you') || lowerMessage.includes('about')) {
      return "I'm ubeyidah, a self-taught developer from Ethiopia. I started coding in grade 10 and love spending most of my time coding and learning new technologies. I'm passionate about building innovative solutions and constantly expanding my skills.";
    }

    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      return "I began my coding journey in grade 10 and have been self-teaching ever since. I've worked on various projects using modern technologies like Next.js, React, TypeScript, and more. My portfolio showcases my growth and passion for development.";
    }

    if (lowerMessage.includes('projects') || lowerMessage.includes('work')) {
      return "I've built several projects including modern web applications with Next.js and TypeScript, full-stack apps with React and Node.js, e-commerce platforms with Vue.js, and data visualization dashboards. Each project represents different technologies and challenges I've tackled.";
    }

    if (lowerMessage.includes('technologies') || lowerMessage.includes('tech stack')) {
      return "I work with a variety of technologies including Next.js, React, Vue.js, TypeScript, Node.js, Python, Rust, MongoDB, PostgreSQL, Tailwind CSS, and many more. I'm always learning and exploring new tools.";
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      return "You can reach me through various channels: email at ubeyidah@gmail.com, GitHub at @ubeyidah, LinkedIn, or X (Twitter) @ubeyidah. I'm always open to discussions about technology, collaboration opportunities, or just having a chat!";
    }

    if (lowerMessage.includes('location') || lowerMessage.includes('ethiopia')) {
      return "I'm based in Ethiopia and proud of my roots. My journey as a self-taught developer from Ethiopia has taught me resilience, creativity, and the importance of continuous learning.";
    }

    if (lowerMessage.includes('blog') || lowerMessage.includes('articles')) {
      return "I write about my development journey, share technical insights, and document my learning process. My latest articles cover topics like modern web development, self-teaching strategies, and technology trends.";
    }

    // Default response
    return "That's an interesting question! I'm ubeyidah, a passionate self-taught developer from Ethiopia. I'd be happy to tell you more about my journey, projects, or technologies I work with. What would you like to know?";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Open chat if not already open
    if (!isChatOpen) {
      openChat();
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(message),
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  return (
    <>
      {/* Chat Modal Overlay */}
      {isChatOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Blurred Background */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={closeChat}
          />

          {/* Chat Modal */}
          <div className="relative w-full max-w-2xl h-[80vh] bg-background/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <HugeiconsIcon icon={AiChat01Icon} size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Portfolio Assistant</h3>
                  <p className="text-sm text-muted-foreground">Ask me about ubeyidah&apos;s work</p>
                </div>
              </div>
              <button
                onClick={closeChat}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Close chat"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-[calc(80vh-140px)]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <HugeiconsIcon icon={AiChat01Icon} size={16} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-4 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <p className="leading-relaxed">{msg.content}</p>
                    <span className="text-xs opacity-70 mt-2 block">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <HugeiconsIcon icon={UserIcon} size={16} className="text-white" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex items-start gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <HugeiconsIcon icon={AiChat01Icon} size={16} className="text-white" />
                  </div>
                  <div className="bg-muted text-muted-foreground p-4 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/10">
              <form onSubmit={handleSubmit}>
                <InputGroup>
                  <InputGroupAddon>
                    <HugeiconsIcon icon={AiChat01Icon} size={16} />
                  </InputGroupAddon>
                  <InputGroupInput
                    type="text"
                    placeholder="Ask me anything about ubeyidah..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[44px]"
                  />
                  <InputGroupButton type="submit" disabled={!message.trim()}>
                    <HugeiconsIcon icon={Airplane01Icon} size={16} />
                  </InputGroupButton>
                </InputGroup>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Input */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        {/* Gradient background effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none" />

        {/* Input container with gradient border effect */}
        <div className="relative max-w-md mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
          <div className="relative bg-background/80 backdrop-blur-sm border border-white/10 rounded-full p-1 shadow-2xl">
            <form onSubmit={handleSubmit}>
              <InputGroup className="bg-transparent">
                <InputGroupAddon>
                  <HugeiconsIcon icon={AiChat01Icon} size={16} />
                </InputGroupAddon>
                <InputGroupInput
                  type="text"
                  placeholder="Chat with my AI assistant..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-transparent border-0 focus:ring-0 placeholder:text-muted-foreground/70"
                />
                <InputGroupButton type="submit" size="icon-xs" disabled={!message.trim()}>
                  <HugeiconsIcon icon={Airplane01Icon} size={14} />
                </InputGroupButton>
              </InputGroup>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}