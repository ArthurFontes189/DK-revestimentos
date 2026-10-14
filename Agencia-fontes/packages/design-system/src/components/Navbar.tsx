import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: React.ReactNode;
  items?: NavItem[];
  onDarkModeToggle?: () => void;
  className?: string;
}

export function Navbar({ logo, items = [], onDarkModeToggle, className = '' }: NavbarProps) {
  return (
    <nav
      className={className}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'var(--spacing-md) var(--spacing-lg)',
        borderBottom: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg-default)',
      }}
    >
      <div style={{ fontSize: '24px', fontWeight: 'var(--font-bold)', color: 'var(--color-primary)' }}>
        {logo || 'Logo'}
      </div>

      <div style={{ display: 'flex', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              textDecoration: 'none',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-medium)',
              transition: 'color 200ms ease',
            }}
          >
            {item.label}
          </a>
        ))}

        {onDarkModeToggle && (
          <button
            onClick={onDarkModeToggle}
            style={{
              background: 'none',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '8px 12px',
              cursor: 'pointer',
              fontSize: '18px',
            }}
          >
            🌓
          </button>
        )}
      </div>
    </nav>
  );
}
