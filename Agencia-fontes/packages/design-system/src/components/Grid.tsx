import React from 'react';

interface GridProps {
  columns?: number;
  gap?: string;
  children: React.ReactNode;
  className?: string;
}

export function Grid({ columns = 3, gap = 'var(--spacing-lg)', children, className = '' }: GridProps) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
        gap,
      }}
    >
      {children}
    </div>
  );
}
