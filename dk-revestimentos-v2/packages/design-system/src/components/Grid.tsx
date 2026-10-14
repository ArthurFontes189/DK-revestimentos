import React from 'react';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: number;
  children: React.ReactNode;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ columns = 3, gap = 16, className = '', style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `${gap}px`,
          ...style,
        }}
        className={className}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';
