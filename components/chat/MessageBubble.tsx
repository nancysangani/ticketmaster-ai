"use client";

import { motion } from "framer-motion";
import { User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
  renderedComponent?: React.ReactNode;
}

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, type: "spring" }}
      className={`flex gap-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg ${
          isUser 
            ? 'bg-gradient-to-br from-blue-500 to-cyan-500' 
            : 'bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600'
        }`}
      >
        {isUser ? (
          <User className="h-5 w-5 text-white" />
        ) : (
          <Sparkles className="h-5 w-5 text-white" />
        )}
      </motion.div>

      <div className={`flex-1 max-w-[75%] flex flex-col gap-3 ${isUser ? 'items-end' : 'items-start'}`}>
        {message.content && (
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className={`rounded-2xl px-5 py-3 shadow-lg ${
              isUser 
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-tr-md' 
                : 'bg-white/90 backdrop-blur-sm text-gray-900 rounded-tl-md border border-gray-200'
            }`}
          >
            <p className="text-sm leading-relaxed font-medium whitespace-pre-wrap">
              {message.content}
            </p>
          </motion.div>
        )}

        {message.renderedComponent && (
          <motion.div
            initial={{ opacity: 0, x: isUser ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full"
          >
            {message.renderedComponent}
          </motion.div>
        )}

        <span className={`text-xs font-medium px-2 ${isUser ? 'text-blue-600' : 'text-gray-600'}`} suppressHydrationWarning>
          {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </motion.div>
  );
}