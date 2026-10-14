import React from 'react';
import { Button } from './Button';
import { Card } from './Card';

interface PricingTierProps {
  name: string;
  price: string | number;
  description?: string;
  features: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  highlighted?: boolean;
}

interface PricingProps {
  tiers: PricingTierProps[];
  className?: string;
}

export function Pricing({ tiers, className = '' }: PricingProps) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--spacing-lg)',
      }}
    >
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          style={{
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-xl)',
            border: tier.highlighted ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
            transform: tier.highlighted ? 'scale(1.05)' : 'scale(1)',
            transition: 'all 300ms ease',
          } as any}
        >
          <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>{tier.name}</h3>
          {tier.description && <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>{tier.description}</p>}

          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <span style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-primary)' }}>
              {tier.price}
            </span>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, marginBottom: 'var(--spacing-lg)' }}>
            {tier.features.map((feature) => (
              <li key={feature} style={{ padding: 'var(--spacing-sm) 0', borderBottom: '1px solid var(--color-border)' }}>
                ✓ {feature}
              </li>
            ))}
          </ul>

          {tier.buttonText && <Button onClick={tier.onButtonClick}>{tier.buttonText}</Button>}
        </Card>
      ))}
    </div>
  );
}
