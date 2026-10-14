import React from 'react';
import { Button } from './Button';

interface CTAProps {
  title: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function CTA({ title, description, buttonText, onButtonClick, variant = 'primary', className = '' }: CTAProps) {
  const bgColor = variant === 'primary' ? 'var(--color-primary)' : 'var(--color-primary-light)';
  const textColor = variant === 'primary' ? 'var(--color-white)' : 'var(--color-primary)';

  return (
    <section
      className={className}
      style={{
        padding: 'var(--spacing-3xl) var(--spacing-lg)',
        backgroundColor: bgColor,
        color: textColor,
        textAlign: 'center',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      <h2 style={{ marginBottom: 'var(--spacing-md)' }}>{title}</h2>
      {description && <p style={{ marginBottom: 'var(--spacing-lg)', maxWidth: '600px)', margin: '0 auto var(--spacing-lg)' }}>{description}</p>}
      {buttonText && (
        <Button variant={variant === 'primary' ? 'secondary' : 'primary'} onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </section>
  );
}
