"use client";

import { TamboProvider } from "@tambo-ai/react";
import { tamboComponents } from "@/lib/tambo-components";

export function TamboClientProvider({ children }: { children: React.ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_TAMBO_API_KEY;

  if (!apiKey) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">⚠️ API Key Missing</h2>
          <p className="text-gray-700">
            NEXT_PUBLIC_TAMBO_API_KEY is not set in your .env.local file.
          </p>
        </div>
      </div>
    );
  }

  return (
    <TamboProvider
      apiKey={apiKey}
      components={tamboComponents}
    >
      {children}
    </TamboProvider>
  );
}