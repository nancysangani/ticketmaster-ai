"use client";

import { TamboProvider } from '@tambo-ai/react';
import ChatContainer from "@/components/chat/ChatContainer";
import { Sparkles, Zap, Shield } from "lucide-react";
import { tamboComponents } from '@/lib/tambo-config';

export default function Home() {
  return (
    <TamboProvider
      apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
      components={tamboComponents}
    >
      <main className="min-h-screen animated-gradient">
        {/* Floating shapes background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        {/* Header */}
        <header className="relative z-10">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="glass rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Sparkles className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                      TicketMaster AI
                    </h1>
                    <p className="text-sm text-gray-600 font-medium">
                      Support that adapts to you ✨
                    </p>
                  </div>
                </div>
                
                <div className="hidden sm:flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-white">Tambo AI Online</span>
                  </div>
                </div>
              </div>

              {/* Feature badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 rounded-full text-xs font-medium text-purple-700 border border-purple-200">
                  <Zap className="h-3 w-3" />
                  Real-Time Streaming
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 rounded-full text-xs font-medium text-pink-700 border border-pink-200">
                  <Shield className="h-3 w-3" />
                  12 Smart Components
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 rounded-full text-xs font-medium text-blue-700 border border-blue-200">
                  <Sparkles className="h-3 w-3" />
                  Powered by Tambo
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Chat Interface */}
        <div className="relative z-10">
          <ChatContainer />
        </div>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 z-20 backdrop-blur-md bg-white/10 border-t border-white/20 py-3">
          <p className="text-center text-sm text-white font-medium">
            Built for{" "}
            <span className="font-bold bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
              UI Strikes Back Hackathon
            </span>
            {" "}🚀 • Using @tambo-ai/react
          </p>
        </footer>
      </main>
    </TamboProvider>
  );
}
