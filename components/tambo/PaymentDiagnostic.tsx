"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, CreditCard, RefreshCw } from "lucide-react";
import { mockTransactions } from "@/lib/mock-data";
import { motion } from "framer-motion";

interface PaymentDiagnosticProps {
  customerId: string;
  transactionId?: string;
}

export default function PaymentDiagnostic({ customerId, transactionId }: PaymentDiagnosticProps) {
  const recentTransactions = mockTransactions.slice(0, 5);
  const failedTransaction = transactionId 
    ? mockTransactions.find(t => t.id === transactionId)
    : mockTransactions.find(t => t.status === 'failed');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Diagnostic
          </CardTitle>
          <CardDescription>
            Analyzing your recent payment activity
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {failedTransaction && (
            <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-red-900">Payment Failed</h4>
                  <p className="text-sm text-red-700 mt-1">
                    {failedTransaction.failureReason}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" variant="destructive">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Retry Payment
                    </Button>
                    <Button size="sm" variant="outline">
                      Update Payment Method
                    </Button>
                  </div>
                </div>
                <Badge variant="destructive">
                  ${failedTransaction.amount}
                </Badge>
              </div>
            </div>
          )}

          <div>
            <h4 className="font-semibold mb-3">Recent Transactions</h4>
            <div className="space-y-2">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {transaction.status === 'succeeded' ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                    <div>
                      <p className="text-sm font-medium">{transaction.description}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(transaction.date).toLocaleDateString()} • {transaction.paymentMethod}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">${transaction.amount}</p>
                    <Badge
                      variant={transaction.status === 'succeeded' ? 'default' : 'destructive'}
                      className="text-xs"
                    >
                      {transaction.status}
                    </Badge>
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