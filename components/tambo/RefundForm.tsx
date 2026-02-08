"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface RefundFormProps {
  transactionId: string;
  maxAmount: number;
}

export default function RefundForm({ transactionId, maxAmount }: RefundFormProps) {
  const [refundAmount, setRefundAmount] = useState(maxAmount.toString());
  const [reason, setReason] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Request Refund
          </CardTitle>
          <CardDescription>
            Transaction: {transactionId}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Refund Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">$</span>
              <Input
                id="amount"
                type="number"
                value={refundAmount}
                onChange={(e) => setRefundAmount(e.target.value)}
                max={maxAmount}
                className="pl-7"
              />
            </div>
            <p className="text-xs text-gray-500">
              Maximum refundable: ${maxAmount.toFixed(2)}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Refund</Label>
            <Select value={reason} onValueChange={setReason}>
              <SelectTrigger id="reason">
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="not_as_described">Service not as described</SelectItem>
                <SelectItem value="duplicate">Duplicate charge</SelectItem>
                <SelectItem value="not_used">Did not use service</SelectItem>
                <SelectItem value="quality">Quality issues</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="details">Additional Details</Label>
            <Textarea
              id="details"
              placeholder="Please provide any additional context..."
              className="min-h-[100px]"
            />
          </div>

          <div className="pt-4 flex gap-2">
            <Button className="flex-1">
              Submit Refund Request
            </Button>
            <Button variant="outline">
              Cancel
            </Button>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              💡 Refunds typically process within 5-7 business days
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}