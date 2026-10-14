import React from 'react';
import { Card } from './Card';

interface Feature {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({ features, columns = 3, className = '' }: FeatureGridProps) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
        gap: 'var(--spacing-lg)',
      }}
    >
      {features.map((feature, idx) => (
        <Card key={idx}>
          {feature.icon && (
            <div style={{ fontSize: '40px', marginBottom: 'var(--spacing-md)' }}>
              {feature.icon}
            </div>
          )}
          <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>{feature.title}</h3>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>{feature.description}</p>
        </Card>
      ))}
    </div>
  );
}
