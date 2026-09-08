export interface WorkSample {
  id: string;
  title: string;
  caption: string;
  platform: string;
  category: 'analytics' | 'strategy' | 'calendar' | 'systems' | 'all';
  imageFileName: string;
  highlightMetric?: string;
  metricLabel?: string;
  details: {
    overview: string;
    keyDeliverables: string[];
    metricsOrResults?: { label: string; value: string; change?: string }[];
    toolsUsed: string[];
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  bestFor: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface Outcome {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StrategicFramework {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  pillars: { name: string; focus: string; tag?: string }[];
}

export interface ToolCategory {
  categoryName: string;
  description: string;
  tools: {
    name: string;
    role: string;
    iconId?: string;
    badgeColor?: string;
    tag?: string;
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  status: 'Completed' | 'In Progress';
  year?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ScopeQuestion {
  id: string;
  question: string;
  options: {
    label: string;
    description: string;
    recommendedServiceId: string;
  }[];
}
