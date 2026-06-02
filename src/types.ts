export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  tags: string[];
  imageUrl: string;
  previewUrl?: string;
  techStack: string[];
  category: string;
  metrics?: { label: string; value: string }[];
  features?: string[];
  architecture?: string;
  duration?: string;
  clientName?: string;
  dashboardService?: string;
}

export interface ServiceCapability {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  category: string;
  typicalStack: string[];
  estimatedWeeks: number;
  basePriceUSD: number;
  monthlySubscriptionUSD?: number;
}

export interface ProposalSelection {
  capabilitiesSelected: string[];
  techScale: "startup" | "growth" | "enterprise";
  supportPlan: "none" | "standard" | "premium";
}

export interface ContactMessage {
  name: string;
  email: string;
  company?: string;
  message: string;
  serviceSelected?: string;
  status?: "pending" | "sending" | "success" | "error";
}
