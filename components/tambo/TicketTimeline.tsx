"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, MessageSquare, AlertCircle } from "lucide-react";
import { mockTickets } from "@/lib/mock-data";
import { motion } from "framer-motion";

interface TicketTimelineProps {
  ticketId: string;
}

interface Ticket {
  id: string;
  title: string;
  status: "open" | "in_progress" | "closed";
  priority: "low" | "medium" | "high" | "critical";
  createdAt: string;
  updates: Array<{
    type: string;
    timestamp: string;
    message: string;
  }>;
}

export default function TicketTimeline({ ticketId }: TicketTimelineProps) {
  const ticket: Ticket = mockTickets.find((t) => t.id === ticketId) || mockTickets[0];

  const getIconForType = (type: string) => {
    switch (type) {
      case "created":
        return <AlertCircle className="h-4 w-4 text-blue-600" />;
      case "update":
        return <MessageSquare className="h-4 w-4 text-gray-600" />;
      case "resolved":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
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
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Ticket Timeline</CardTitle>
              <CardDescription>ID: {ticket.id}</CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge
                variant={
                  ticket.status === "open"
                    ? "outline"
                    : ticket.status === "in_progress"
                      ? "secondary"
                      : "default"
                }
              >
                {ticket.status.replace("_", " ")}
              </Badge>
              <Badge
                variant={
                  ticket.priority === "critical" || ticket.priority === "high"
                    ? "destructive"
                    : "outline"
                }
              >
                {ticket.priority} priority
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-sm mb-1">{ticket.title}</h4>
              <p className="text-xs text-gray-600">
                Created {new Date(ticket.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="relative space-y-4 pl-6">
              {/* Timeline line */}
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gray-200" />

              {ticket.updates.map((update, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-6 top-1 bg-white">
                    {getIconForType(update.type)}
                  </div>

                  <div className="bg-white border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium capitalize">
                        {update.type.replace("_", " ")}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(update.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{update.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
