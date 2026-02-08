"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calculator } from "lucide-react";
import { motion } from "framer-motion";

interface ProrationCalculatorProps {
  currentPlan: string;
  newPlan: string;
  currentPrice: number;
  newPrice: number;
  daysRemaining?: number;
  currentTimeMs: number;
}

export default function ProrationCalculator({
  currentPlan,
  newPlan,
  currentPrice,
  newPrice,
  daysRemaining = 15,
  currentTimeMs,
}: ProrationCalculatorProps) {
  const daysInMonth = 30;
  const unusedCredit = (currentPrice / daysInMonth) * daysRemaining;
  const proratedCharge = (newPrice / daysInMonth) * daysRemaining;
  const totalDue = proratedCharge - unusedCredit;

  const nextBillingDate = new Date(
    currentTimeMs + daysRemaining * 24 * 60 * 60 * 1000,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Proration Breakdown
          </CardTitle>
          <CardDescription>
            Changing from {currentPlan} to {newPlan}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">
                Current plan ({currentPlan})
              </span>
              <span className="font-medium">
                ${currentPrice.toFixed(2)}/month
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">New plan ({newPlan})</span>
              <span className="font-medium">${newPrice.toFixed(2)}/month</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Days remaining in cycle</span>
              <span className="font-medium">{daysRemaining} days</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">
                Unused credit from {currentPlan}
              </span>
              <span className="text-sm font-medium text-green-600">
                -${unusedCredit.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">
                Prorated charge for {newPlan}
              </span>
              <span className="text-sm font-medium">
                +${proratedCharge.toFixed(2)}
              </span>
            </div>
          </div>

          <Separator />

          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Amount due today</span>
              <span className="text-2xl font-bold text-green-700">
                ${Math.max(0, totalDue).toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Your next full billing cycle starts on{" "}
              {nextBillingDate.toLocaleDateString()}
            </p>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-900">
              💡 You will be charged ${newPrice.toFixed(2)} on your next billing
              date
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
