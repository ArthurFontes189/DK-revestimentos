import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        padding: 'var(--spacing-lg)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-md)',
        backgroundColor: 'var(--color-bg-default)',
        transition: 'all 300ms ease-out',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {children}
    </div>
  );
}
