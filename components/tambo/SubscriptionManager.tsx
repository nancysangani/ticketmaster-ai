"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Package, TrendingUp, TrendingDown } from "lucide-react";
import { mockCustomer, mockPlans } from "@/lib/mock-data";
import { motion } from "framer-motion";

interface SubscriptionManagerProps {
  currentPlan: string;
  customerId: string;
}

export default function SubscriptionManager({ currentPlan, customerId }: SubscriptionManagerProps) {
  const plan = mockPlans.find(p => p.name === currentPlan);
  const usage = {
    projects: 7,
    storage: 32,
    maxProjects: plan?.name === "Starter" ? 10 : "Unlimited",
    maxStorage: plan?.name === "Starter" ? 5 : plan?.name === "Pro" ? 50 : 500
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
            <Package className="h-5 w-5" />
            Subscription Management
          </CardTitle>
          <CardDescription>
            Manage your current plan and usage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current Plan */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-lg">{currentPlan} Plan</h3>
                <p className="text-sm text-gray-600">
                  Member since {new Date(mockCustomer.memberSince).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">${plan?.price}</p>
                <p className="text-sm text-gray-600">per month</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              Active
            </Badge>
          </div>

          {/* Usage Stats */}
          <div className="space-y-4">
            <h4 className="font-semibold">Usage This Month</h4>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Projects</span>
                <span className="font-medium">
                  {usage.projects} / {usage.maxProjects}
                </span>
              </div>
              <Progress 
                value={usage.maxProjects === "Unlimited" ? 0 : (usage.projects / Number(usage.maxProjects)) * 100} 
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Storage</span>
                <span className="font-medium">
                  {usage.storage}GB / {usage.maxStorage}GB
                </span>
              </div>
              <Progress value={(usage.storage / Number(usage.maxStorage)) * 100} />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <h4 className="font-semibold">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="w-full">
                <TrendingUp className="h-4 w-4 mr-2" />
                Upgrade Plan
              </Button>
              <Button variant="outline" className="w-full">
                <TrendingDown className="h-4 w-4 mr-2" />
                Downgrade Plan
              </Button>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-2">Your Plan Includes</h4>
            <ul className="space-y-1">
              {plan?.features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}