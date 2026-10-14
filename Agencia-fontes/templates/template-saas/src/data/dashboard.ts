// Dashboard Mock Data

export interface DashboardMetric {
  label: string;
  value: string | number;
  change?: number;
  icon?: string;
}

export interface DashboardCard {
  title: string;
  value: string | number;
  description: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export const metrics: DashboardMetric[] = [
  {
    label: 'Total Users',
    value: '12,345',
    change: 12,
    icon: '👥',
  },
  {
    label: 'Revenue',
    value: '$45,231',
    change: 8,
    icon: '💰',
  },
  {
    label: 'Active Sessions',
    value: '2,834',
    change: -3,
    icon: '🔄',
  },
  {
    label: 'Conversion Rate',
    value: '3.24%',
    change: 0.5,
    icon: '📊',
  },
];

export const cards: DashboardCard[] = [
  {
    title: 'Monthly Revenue',
    value: '$45,231',
    description: 'Up from $41,200 last month',
    trend: 'up',
    trendValue: '+10%',
  },
  {
    title: 'Total Users',
    value: '12,345',
    description: '324 new users this month',
    trend: 'up',
    trendValue: '+2.8%',
  },
  {
    title: 'Churn Rate',
    value: '2.1%',
    description: 'Down from 2.4% last month',
    trend: 'down',
    trendValue: '-0.3%',
  },
  {
    title: 'Support Tickets',
    value: '142',
    description: '98% resolved within 24h',
    trend: 'neutral',
    trendValue: 'On track',
  },
];

export const features = [
  'Real-time analytics',
  'User management',
  'API access',
  'Custom reports',
  'Team collaboration',
  'Advanced integrations',
  'Priority support',
  'Security & compliance',
];

export const integrations = [
  { name: 'Slack', icon: '💬' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Google Drive', icon: '📁' },
  { name: 'Zapier', icon: '⚙️' },
  { name: 'Stripe', icon: '💳' },
  { name: 'Salesforce', icon: '☁️' },
];

export const pricingTiers = [
  {
    name: 'Starter',
    price: 'R$ 29',
    period: '/mês',
    description: 'Perfect to get started',
    features: [
      'Up to 100 users',
      'Basic analytics',
      'Email support',
      'API access',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: 'R$ 79',
    period: '/mês',
    description: 'For growing teams',
    features: [
      'Up to 500 users',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large organizations',
    features: [
      'Unlimited users',
      'Full customization',
      'Dedicated support',
      'On-premise option',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
  },
];
