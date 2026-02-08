"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MessageBubble from "./MessageBubble";

// Import your Tambo components
import PaymentDiagnostic from "@/components/tambo/PaymentDiagnostic";
import TransactionHistory from "@/components/tambo/TransactionHistory";
import RefundForm from "@/components/tambo/RefundForm";
import SubscriptionManager from "@/components/tambo/SubscriptionManager";
import PlanComparison from "@/components/tambo/PlanComparison";
import ProrationCalculator from "@/components/tambo/ProrationCalculator";
import BugReportForm from "@/components/tambo/BugReportForm";
import SystemDiagnostics from "@/components/tambo/SystemDiagnostics";
import PriorityEscalation from "@/components/tambo/PriorityEscalation";
import LiveChatConnector from "@/components/tambo/LiveChatConnector";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
  renderedComponent?: React.ReactNode;
}

const suggestedPrompts = [
  { icon: "💳", text: "My payment failed" },
  { icon: "📈", text: "Upgrade my plan" },
  { icon: "🐛", text: "Report a bug" },
  { icon: "💬", text: "Talk to a human" },
];

export default function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "👋 Hey there! I'm your AI support sidekick. I can help with payments, subscriptions, bugs, and more. What's up?",
      createdAt: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getMockResponse = (userMessage: string): { message: string; components: React.ReactNode[] } => {
    const lower = userMessage.toLowerCase();
    let message = '';
    let components: React.ReactNode[] = [];

    // Payment issues
    if (lower.includes('payment') || lower.includes('failed') || lower.includes('charge')) {
      message = "I spotted a payment issue! Let me pull up your diagnostics and transaction history 🔍";
      components = [
        <PaymentDiagnostic key="pd" customerId="cust_12345" transactionId="tx_002" />,
        <TransactionHistory key="th" customerId="cust_12345" limit={5} />
      ];
    }
    // Refund
    else if (lower.includes('refund')) {
      message = "Refund coming right up! Here's your form with all the details pre-filled ✨";
      components = [
        <RefundForm key="rf" transactionId="tx_002" maxAmount={49.99} />
      ];
    }
    // Upgrade/subscription
    else if (lower.includes('upgrade') || lower.includes('plan') || lower.includes('subscription')) {
      message = "Let's find the perfect plan for you! Here's what you've got and what's available 🚀";
      components = [
        <SubscriptionManager key="sm" currentPlan="Pro" customerId="cust_12345" />,
        <PlanComparison key="pc" currentPlan="Pro" />
      ];
      
      if (lower.includes('enterprise')) {
        components.push(
          <ProrationCalculator 
            key="prc" 
            currentPlan="Pro" 
            newPlan="Enterprise" 
            currentPrice={49} 
            newPrice={199} 
            daysRemaining={15}
            currentTimeMs={Date.now()}
          />
        );
      }
    }
    // Bug report
    else if (lower.includes('bug') || lower.includes('broken') || lower.includes('error')) {
      message = "Oof, bugs are the worst! I've captured your system info automatically. Let's get this fixed 🐛";
      components = [
        <BugReportForm key="brf" />,
        <SystemDiagnostics key="sd" />
      ];
    }
    // Urgent
    else if (lower.includes('urgent') || lower.includes('critical')) {
      message = "This sounds urgent! Fast-tracking you to our priority team right now ⚡";
      components = [
        <PriorityEscalation key="pe" ticketId="ticket_001" currentIssue={userMessage} />
      ];
    }
    // Human agent
    else if (lower.includes('human') || lower.includes('agent') || lower.includes('talk')) {
      message = "I'll connect you with our amazing human team! Here's who's available 👋";
      components = [
        <LiveChatConnector key="lcc" />
      ];
    }
    // Default
    else {
      message = "I'm here to help! Try asking about payments, subscriptions, bugs, or talking to a human 💬";
    }

    return { message, components };
  };

  const handleSend = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      createdAt: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI thinking
    setTimeout(() => {
      const { message, components } = getMockResponse(messageText);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: message,
        createdAt: new Date(),
        renderedComponent: components.length > 0 ? <div className="space-y-4">{components}</div> : undefined
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-24">
      <div className="glass rounded-3xl shadow-2xl overflow-hidden" style={{ height: 'calc(100vh - 280px)' }}>
        <div className="h-full overflow-y-auto p-6 space-y-6">
          <AnimatePresence>
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </AnimatePresence>
          
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl w-fit"
            >
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
              <span className="text-sm text-white font-medium">AI is thinking...</span>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {messages.length === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {suggestedPrompts.map((prompt, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSend(prompt.text)}
              className="glass p-4 rounded-2xl text-left transition-all hover:shadow-lg group"
            >
              <div className="text-2xl mb-2">{prompt.icon}</div>
              <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
                {prompt.text}
              </p>
            </motion.button>
          ))}
        </motion.div>
      )}

      <div className="mt-6 glass rounded-2xl p-4 shadow-xl">
        <div className="flex gap-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 border-0 bg-white/50 focus-visible:ring-2 focus-visible:ring-purple-500 rounded-xl text-base h-12"
          />
          <Button 
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            className="h-12 w-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600 font-medium">Demo Mode - Using Mock AI</span>
          </div>
          <span className="text-gray-500">
            {messages.length} messages
          </span>
        </div>
      </div>
    </div>
  );
}