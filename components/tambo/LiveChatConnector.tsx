"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Clock, Users } from "lucide-react";
import { mockAgents } from "@/lib/mock-data";
import { motion } from "framer-motion";

export default function LiveChatConnector() {
  const availableAgents = mockAgents.filter((a) => a.status === "available");
  const estimatedWaitTime =
    availableAgents.length > 0 ? "< 2 minutes" : "5-10 minutes";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Connect with Live Support
          </CardTitle>
          <CardDescription>Talk to a real human right now</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <Users className="h-6 w-6 mx-auto text-green-600 mb-2" />
              <p className="text-2xl font-bold text-green-700">
                {availableAgents.length}
              </p>
              <p className="text-xs text-green-700">Agents Available</p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <Clock className="h-6 w-6 mx-auto text-blue-600 mb-2" />
              <p className="text-2xl font-bold text-blue-700">
                {estimatedWaitTime}
              </p>
              <p className="text-xs text-blue-700">Est. Wait Time</p>
            </div>
          </div>

          {availableAgents.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Available Agents</p>
              {availableAgents.map((agent) => (
                <div
                  key={agent.id}
                  className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Avatar>
                    <AvatarImage src={agent.avatar} />
                    <AvatarFallback>{agent.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{agent.name}</p>
                    <p className="text-xs text-gray-600">{agent.specialty}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200"
                  >
                    Available
                  </Badge>
                </div>
              ))}
            </div>
          )}

          <Button className="w-full" size="lg">
            <MessageCircle className="h-4 w-4 mr-2" />
            Start Live Chat
          </Button>

          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-xs text-gray-700">
              <strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM EST
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Weekend support available for critical issues
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
