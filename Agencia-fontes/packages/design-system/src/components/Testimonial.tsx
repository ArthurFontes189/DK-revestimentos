import React from 'react';
import { Card } from './Card';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  company?: string;
  className?: string;
}

export function Testimonial({ quote, author, role, avatar, company, className = '' }: TestimonialProps) {
  return (
    <Card className={className}>
      <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-lg)', fontSize: 'var(--text-lg)' }}>"{quote}"</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
        {avatar && (
          <img
            src={avatar}
            alt={author}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: 'var(--radius-full)',
              objectFit: 'cover',
            }}
          />
        )}

        <div>
          <p style={{ fontWeight: 'var(--font-semibold)', margin: 0 }}>{author}</p>
          {role && <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>{role}</p>}
          {company && <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>{company}</p>}
        </div>
      </div>
    </Card>
  );
}
