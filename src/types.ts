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
}


