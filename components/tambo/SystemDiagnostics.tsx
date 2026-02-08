"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Monitor, Wifi, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function SystemDiagnostics() {
  const diagnostics = {
    browser: "Chrome 120.0.6099.109",
    os: "macOS 14.2",
    screen: "1920x1080",
    connection: "broadband",
    errors: [
      { message: "Failed to fetch /api/dashboard", timestamp: "2024-02-15 10:23:45" },
      { message: "Network timeout after 30s", timestamp: "2024-02-15 10:23:15" }
    ],
    performance: {
      pageLoad: "2.3s",
      apiLatency: "450ms",
      memoryUsage: "234 MB"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            System Diagnostics
          </CardTitle>
          <CardDescription>
            Automatically captured technical information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* System Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Monitor className="h-4 w-4" />
                <span>Browser</span>
              </div>
              <p className="text-sm font-medium">{diagnostics.browser}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Monitor className="h-4 w-4" />
                <span>Operating System</span>
              </div>
              <p className="text-sm font-medium">{diagnostics.os}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Monitor className="h-4 w-4" />
                <span>Screen Resolution</span>
              </div>
              <p className="text-sm font-medium">{diagnostics.screen}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Wifi className="h-4 w-4" />
                <span>Connection</span>
              </div>
              <Badge variant="outline">{diagnostics.connection}</Badge>
            </div>
          </div>

          {/* Console Errors */}
          {diagnostics.errors.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <h4 className="font-semibold text-sm">Recent Errors</h4>
              </div>
              <div className="space-y-2">
                {diagnostics.errors.map((error, index) => (
                  <div
                    key={index}
                    className="p-2 bg-red-50 border border-red-200 rounded text-xs font-mono"
                  >
                    <p className="text-red-900">{error.message}</p>
                    <p className="text-red-600 mt-1">{error.timestamp}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Performance Metrics</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 bg-gray-50 rounded text-center">
                <p className="text-xs text-gray-600">Page Load</p>
                <p className="text-sm font-semibold">{diagnostics.performance.pageLoad}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded text-center">
                <p className="text-xs text-gray-600">API Latency</p>
                <p className="text-sm font-semibold">{diagnostics.performance.apiLatency}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded text-center">
                <p className="text-xs text-gray-600">Memory</p>
                <p className="text-sm font-semibold">{diagnostics.performance.memoryUsage}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}