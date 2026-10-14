import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled,
  className = '',
}: InputProps) {
  return (
    <div>
      {label && (
        <label
          style={{
            display: 'block',
            marginBottom: 'var(--spacing-sm)',
            fontWeight: 'var(--font-semibold)',
            fontSize: 'var(--text-sm)',
          }}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={className}
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: 'var(--radius-md)',
          border: error ? '2px solid var(--color-error)' : '1px solid var(--color-border)',
          fontSize: 'var(--text-base)',
          fontFamily: 'var(--font-sans)',
          backgroundColor: 'var(--color-bg-default)',
          color: 'var(--color-text-primary)',
          transition: 'all 200ms ease',
        }}
      />
      {error && (
        <span
          style={{
            color: 'var(--color-error)',
            fontSize: 'var(--text-sm)',
            marginTop: 'var(--spacing-xs)',
            display: 'block',
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
