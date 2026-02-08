"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bug } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BugReportForm() {
  const [severity, setSeverity] = useState("");
  const [title, setTitle] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bug className="h-5 w-5" />
            Report a Bug
          </CardTitle>
          <CardDescription>
            Help us fix the issue by providing detailed information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bug-title">Bug Title</Label>
            <Input
              id="bug-title"
              placeholder="e.g., Dashboard not loading"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="severity">Severity</Label>
            <Select value={severity} onValueChange={setSeverity}>
              <SelectTrigger id="severity">
                <SelectValue placeholder="Select severity level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="critical">🔴 Critical - System down</SelectItem>
                <SelectItem value="high">🟠 High - Major feature broken</SelectItem>
                <SelectItem value="medium">🟡 Medium - Feature impaired</SelectItem>
                <SelectItem value="low">🟢 Low - Minor issue</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="steps">Steps to Reproduce</Label>
            <Textarea
              id="steps"
              placeholder="1. Go to...
2. Click on...
3. See error..."
              className="min-h-[120px] font-mono text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="expected">Expected Behavior</Label>
            <Textarea
              id="expected"
              placeholder="Describe what should happen..."
              className="min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="actual">Actual Behavior</Label>
            <Textarea
              id="actual"
              placeholder="Describe what actually happens..."
              className="min-h-[80px]"
            />
          </div>

          <div className="pt-4">
            <Button className="w-full">
              Submit Bug Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}