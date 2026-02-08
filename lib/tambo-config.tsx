"use client";

import { TamboComponent } from '@tambo-ai/react';
import { z } from 'zod';
import PaymentDiagnostic from '@/components/tambo/PaymentDiagnostic';
import TransactionHistory from '@/components/tambo/TransactionHistory';
import RefundForm from '@/components/tambo/RefundForm';
import SubscriptionManager from '@/components/tambo/SubscriptionManager';
import PlanComparison from '@/components/tambo/PlanComparison';
import ProrationCalculator from '@/components/tambo/ProrationCalculator';
import BugReportForm from '@/components/tambo/BugReportForm';
import SystemDiagnostics from '@/components/tambo/SystemDiagnostics';
import ScreenshotUploader from '@/components/tambo/ScreenshotUploader';
import PriorityEscalation from '@/components/tambo/PriorityEscalation';
import LiveChatConnector from '@/components/tambo/LiveChatConnector';
import TicketTimeline from '@/components/tambo/TicketTimeline';

export const tamboComponents: TamboComponent[] = [
  {
    name: "PaymentDiagnostic",
    description: "Displays payment diagnostic information including failed transactions, recent payment history, and retry options. Use when user mentions payment failures, billing issues, charge problems, or asks about recent transactions.",
    component: PaymentDiagnostic,
    propsSchema: z.object({
      customerId: z.string().describe("The customer's unique identifier"),
      transactionId: z.string().optional().describe("Optional specific transaction ID to highlight"),
    }),
  },
  {
    name: "TransactionHistory",
    description: "Shows complete transaction history in a filterable table with export options. Use when user wants to see payment history, review past transactions, or needs transaction details.",
    component: TransactionHistory,
    propsSchema: z.object({
      customerId: z.string().describe("The customer's unique identifier"),
      limit: z.number().default(10).describe("Number of transactions to display"),
    }),
  },
  {
    name: "RefundForm",
    description: "Refund request form with amount calculator and reason selection. Use when user wants a refund, mentions getting money back, or disputes a charge.",
    component: RefundForm,
    propsSchema: z.object({
      transactionId: z.string().describe("The transaction ID to refund"),
      maxAmount: z.number().describe("Maximum refundable amount in dollars"),
    }),
  },
  {
    name: "SubscriptionManager",
    description: "Displays current subscription details, usage statistics, and quick action buttons for plan changes. Use when user asks about their current plan, subscription status, or usage.",
    component: SubscriptionManager,
    propsSchema: z.object({
      currentPlan: z.string().describe("User's current subscription plan name (Starter, Pro, or Enterprise)"),
      customerId: z.string().describe("The customer's unique identifier"),
    }),
  },
  {
    name: "PlanComparison",
    description: "Side-by-side comparison of all available subscription plans with features and pricing. Use when user wants to see plan options, compare tiers, or is considering a plan change.",
    component: PlanComparison,
    propsSchema: z.object({
      currentPlan: z.string().optional().describe("User's current plan to highlight"),
    }),
  },
  {
    name: "ProrationCalculator",
    description: "Calculates prorated charges when changing subscription plans mid-billing cycle. Shows credit from current plan and charge for new plan. Use when user wants to upgrade/downgrade and needs to see exact costs.",
    component: ProrationCalculator,
    propsSchema: z.object({
      currentPlan: z.string().describe("Current subscription plan name"),
      newPlan: z.string().describe("Target subscription plan name"),
      currentPrice: z.number().describe("Current plan monthly price in dollars"),
      newPrice: z.number().describe("New plan monthly price in dollars"),
      daysRemaining: z.number().default(15).describe("Days left in current billing cycle"),
    }),
  },
  {
    name: "BugReportForm",
    description: "Structured bug report form with severity selection, steps to reproduce, and expected vs actual behavior fields. Use when user reports a bug, mentions something is broken, not working, or encounters an error.",
    component: BugReportForm,
    propsSchema: z.object({}),
  },
  {
    name: "SystemDiagnostics",
    description: "Automatically captured system information including browser, OS, console errors, and performance metrics. Use alongside bug reports to provide technical context.",
    component: SystemDiagnostics,
    propsSchema: z.object({}),
  },
  {
    name: "ScreenshotUploader",
    description: "File upload interface for screenshots and images with drag-and-drop support. Use when user wants to show visual evidence of an issue or attach files.",
    component: ScreenshotUploader,
    propsSchema: z.object({}),
  },
  {
    name: "PriorityEscalation",
    description: "Escalation form for urgent issues with SLA estimates and priority routing. Use when user indicates urgency (urgent, emergency, critical, ASAP) or needs immediate help.",
    component: PriorityEscalation,
    propsSchema: z.object({
      ticketId: z.string().describe("Current ticket identifier"),
      currentIssue: z.string().describe("Brief description of the urgent issue"),
    }),
  },
  {
    name: "LiveChatConnector",
    description: "Shows available support agents and connects user to live chat with wait time estimates. Use when user wants to talk to a human, requests an agent, or needs personal assistance.",
    component: LiveChatConnector,
    propsSchema: z.object({}),
  },
  {
    name: "TicketTimeline",
    description: "Timeline view of ticket history with status updates, agent notes, and activity log. Use when user asks about ticket status, wants to see ticket progress, or reviews ticket history.",
    component: TicketTimeline,
    propsSchema: z.object({
      ticketId: z.string().describe("Ticket identifier to display timeline for"),
    }),
  },
];