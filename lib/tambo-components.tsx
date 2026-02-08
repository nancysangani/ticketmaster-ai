// lib/tambo-components.tsx
import { z } from "zod";
import type { TamboComponent } from "@tambo-ai/react";

// Import your actual components
// Note: Update these paths if your components are in different locations
import PaymentDiagnostic from "@/components/tambo/PaymentDiagnostic";
import TransactionHistory from "@/components/tambo/TransactionHistory";
import RefundForm from "@/components/tambo/RefundForm";
import SubscriptionManager from "@/components/tambo/SubscriptionManager";
import PlanComparison from "@/components/tambo/PlanComparison";
import ProrationCalculator from "@/components/tambo/ProrationCalculator";
import BugReportForm from "@/components/tambo/BugReportForm";
import SystemDiagnostics from "@/components/tambo/SystemDiagnostics";
import ScreenshotUploader from "@/components/tambo/ScreenshotUploader";
import PriorityEscalation from "@/components/tambo/PriorityEscalation";
import LiveChatConnector from "@/components/tambo/LiveChatConnector";
import TicketTimeline from "@/components/tambo/TicketTimeline";

export const tamboComponents: TamboComponent[] = [
  {
    name: "PaymentDiagnostic",
    description: "Shows payment diagnostics for failed transactions",
    component: PaymentDiagnostic,
    propsSchema: z.object({
      customerId: z.string(),
      transactionId: z.string().optional(),
    }),
  },
  {
    name: "TransactionHistory",
    description: "Displays recent transaction history",
    component: TransactionHistory,
    propsSchema: z.object({
      customerId: z.string(),
      limit: z.number().default(5),
    }),
  },
  {
    name: "RefundForm",
    description: "Refund request form",
    component: RefundForm,
    propsSchema: z.object({
      transactionId: z.string(),
      maxAmount: z.number(),
    }),
  },
  {
    name: "SubscriptionManager",
    description: "Current subscription details",
    component: SubscriptionManager,
    propsSchema: z.object({
      currentPlan: z.string(),
      customerId: z.string(),
    }),
  },
  {
    name: "PlanComparison",
    description: "Compare all available plans",
    component: PlanComparison,
    propsSchema: z.object({
      currentPlan: z.string(),
    }),
  },
  {
    name: "ProrationCalculator",
    description: "Calculate prorated costs for plan changes",
    component: ProrationCalculator,
    propsSchema: z.object({
      currentPlan: z.string(),
      newPlan: z.string(),
      currentPrice: z.number(),
      newPrice: z.number(),
      daysRemaining: z.number(),
    }),
  },
  {
    name: "BugReportForm",
    description: "Bug report form",
    component: BugReportForm,
    propsSchema: z.object({}),
  },
  {
    name: "SystemDiagnostics",
    description: "System diagnostics information",
    component: SystemDiagnostics,
    propsSchema: z.object({}),
  },
  {
    name: "ScreenshotUploader",
    description: "Upload screenshots",
    component: ScreenshotUploader,
    propsSchema: z.object({}),
  },
  {
    name: "PriorityEscalation",
    description: "Escalate to priority support",
    component: PriorityEscalation,
    propsSchema: z.object({
      ticketId: z.string(),
      currentIssue: z.string(),
    }),
  },
  {
    name: "LiveChatConnector",
    description: "Connect to live chat",
    component: LiveChatConnector,
    propsSchema: z.object({}),
  },
  {
    name: "TicketTimeline",
    description: "Ticket timeline and history",
    component: TicketTimeline,
    propsSchema: z.object({
      ticketId: z.string(),
    }),
  },
];