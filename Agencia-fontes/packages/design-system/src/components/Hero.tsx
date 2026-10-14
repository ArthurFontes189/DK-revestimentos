import React from 'react';
import { Button } from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Hero({ title, subtitle, ctaText, ctaLink, backgroundImage, children, className = '' }: HeroProps) {
  return (
    <section
      className={className}
      style={{
        padding: 'var(--spacing-4xl) var(--spacing-lg)',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'var(--gradient-blue-cyan)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'var(--color-white)',
        textAlign: 'center',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ marginBottom: 'var(--spacing-md)', maxWidth: '800px' }}>{title}</h1>
      {subtitle && <p style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--spacing-lg)', maxWidth: '600px' }}>{subtitle}</p>}
      {ctaText && (
        <Button
          variant="secondary"
          size="lg"
          onClick={() => ctaLink && window.location.href === ctaLink}
          style={{ marginTop: 'var(--spacing-lg)' } as any}
        >
          {ctaText}
        </Button>
      )}
      {children}
    </section>
  );
}
