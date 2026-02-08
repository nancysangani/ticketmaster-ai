"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface PriorityEscalationProps {
  ticketId: string;
  currentIssue: string;
}

export default function PriorityEscalation({ ticketId, currentIssue }: PriorityEscalationProps) {
  const [urgency, setUrgency] = useState("high");
  
  const slaEstimates = {
    critical: "15 minutes",
    high: "2 hours",
    medium: "8 hours",
    low: "24 hours"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full border-orange-200">
        <CardHeader className="bg-orange-50">
          <CardTitle className="flex items-center gap-2 text-orange-900">
            <AlertTriangle className="h-5 w-5" />
            Priority Escalation
          </CardTitle>
          <CardDescription>
            Fast-track this ticket to our support team
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Current Issue:</strong> {currentIssue}
            </p>
            <p className="text-xs text-blue-700 mt-1">
              Ticket ID: {ticketId}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="urgency">Urgency Level</Label>
            <Select value={urgency} onValueChange={setUrgency}>
              <SelectTrigger id="urgency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="critical">
                  🔴 Critical - Business stopped
                </SelectItem>
                <SelectItem value="high">
                  🟠 High - Major impact
                </SelectItem>
                <SelectItem value="medium">
                  🟡 Medium - Moderate impact
                </SelectItem>
                <SelectItem value="low">
                  🟢 Low - Minor inconvenience
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="impact">Business Impact</Label>
            <Textarea
              id="impact"
              placeholder="Describe how this is affecting your business..."
              className="min-h-[100px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-gray-600" />
                <span className="text-xs text-gray-600">Response SLA</span>
              </div>
              <p className="text-lg font-semibold">
                {slaEstimates[urgency as keyof typeof slaEstimates]}
              </p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Users className="h-4 w-4 text-gray-600" />
                <span className="text-xs text-gray-600">Queue Position</span>
              </div>
              <p className="text-lg font-semibold">#3</p>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
              Escalate to Team
            </Button>
            <Button variant="outline">
              Cancel
            </Button>
          </div>

          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-xs text-yellow-900">
              💡 <strong>Tip:</strong> For immediate assistance, our live chat is available 24/7
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}