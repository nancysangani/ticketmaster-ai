export const mockCustomer = {
  id: "cust_12345",
  name: "Sarah Chen",
  email: "sarah.chen@example.com",
  plan: "Pro",
  status: "active",
  memberSince: "2023-06-15",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
};

export const mockTransactions = [
  {
    id: "tx_001",
    date: "2024-01-15",
    amount: 49.99,
    status: "succeeded" as const,
    description: "Pro Plan - Monthly",
    paymentMethod: "•••• 4242",
  },
  {
    id: "tx_002",
    date: "2024-02-15",
    amount: 49.99,
    status: "failed" as const,
    description: "Pro Plan - Monthly",
    paymentMethod: "•••• 4242",
    failureReason: "Insufficient funds",
    failureCode: "insufficient_funds",
  },
  {
    id: "tx_003",
    date: "2023-12-15",
    amount: 49.99,
    status: "succeeded" as const,
    description: "Pro Plan - Monthly",
    paymentMethod: "•••• 4242",
  },
  {
    id: "tx_004",
    date: "2023-11-15",
    amount: 49.99,
    status: "succeeded" as const,
    description: "Pro Plan - Monthly",
    paymentMethod: "•••• 4242",
  },
];

export const mockPlans = [
  {
    id: "starter",
    name: "Starter",
    price: 19,
    interval: "month",
    features: [
      "10 projects",
      "5GB storage",
      "Basic support",
      "Community access",
    ],
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 49,
    interval: "month",
    features: [
      "Unlimited projects",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 199,
    interval: "month",
    features: [
      "Everything in Pro",
      "500GB storage",
      "Dedicated support",
      "99.9% SLA",
      "Custom contracts",
      "SSO & SAML",
    ],
    highlighted: false,
  },
];

export const mockTickets = [
  {
    id: "ticket_001",
    title: "Payment failure investigation",
    status: "open" as const,
    priority: "high" as const,
    createdAt: "2024-02-15T10:30:00Z",
    updates: [
      {
        timestamp: "2024-02-15T10:30:00Z",
        type: "created" as const,
        message: "Ticket created",
      },
      {
        timestamp: "2024-02-15T10:35:00Z",
        type: "update" as const,
        message: "Payment diagnostic completed",
      },
    ],
  },
];

export const mockKnowledgeBase = [
  {
    id: "kb_001",
    title: "How to update payment method",
    category: "Billing",
    excerpt: "Learn how to add or change your payment method...",
    url: "#",
  },
  {
    id: "kb_002",
    title: "Understanding failed payments",
    category: "Billing",
    excerpt: "Common reasons why payments fail and how to fix them...",
    url: "#",
  },
  {
    id: "kb_003",
    title: "Changing your subscription plan",
    category: "Subscription",
    excerpt: "Upgrade or downgrade your plan at any time...",
    url: "#",
  },
  {
    id: "kb_004",
    title: "Reporting bugs effectively",
    category: "Support",
    excerpt: "Help us help you by providing detailed bug reports...",
    url: "#",
  },
];

export const mockAgents = [
  {
    id: "agent_001",
    name: "Alex Morgan",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    status: "available" as const,
    specialty: "Billing & Payments",
  },
  {
    id: "agent_002",
    name: "Jamie Lee",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
    status: "busy" as const,
    specialty: "Technical Support",
  },
];

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  status: "succeeded" | "failed" | "pending";
  description: string;
  paymentMethod: string;
  failureReason?: string;
  failureCode?: string;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  interval: string;
  features: string[];
  highlighted: boolean;
}

export interface Ticket {
  id: string;
  title: string;
  status: "open" | "in_progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high" | "critical";
  createdAt: string;
  updates: Array<{
    timestamp: string;
    type: "created" | "update" | "comment" | "resolved";
    message: string;
  }>;
}
