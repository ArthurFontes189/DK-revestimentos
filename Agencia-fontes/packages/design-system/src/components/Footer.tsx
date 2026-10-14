import React from 'react';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterProps {
  columns?: FooterColumn[];
  social?: { platform: string; url: string }[];
  copyright?: string;
  className?: string;
}

export function Footer({ columns = [], social = [], copyright, className = '' }: FooterProps) {
  return (
    <footer
      className={className}
      style={{
        backgroundColor: 'var(--color-primary-dark)',
        color: 'var(--color-white)',
        padding: 'var(--spacing-3xl) var(--spacing-lg)',
        marginTop: 'var(--spacing-4xl)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--spacing-2xl)',
          marginBottom: 'var(--spacing-3xl)',
        }}
      >
        {columns.map((column) => (
          <div key={column.title}>
            <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-accent-cyan)' }}>{column.title}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {column.links.map((link) => (
                <li key={link.href} style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <a href={link.href} style={{ color: 'var(--color-white)', textDecoration: 'none' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {social.length > 0 && (
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
          {social.map((s) => (
            <a key={s.platform} href={s.url} style={{ color: 'var(--color-accent-cyan)', textDecoration: 'none' }}>
              {s.platform}
            </a>
          ))}
        </div>
      )}

      {copyright && (
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--spacing-lg)', textAlign: 'center', fontSize: 'var(--text-sm)' }}>
          {copyright}
        </div>
      )}
    </footer>
  );
}
