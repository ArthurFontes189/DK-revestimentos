import React from 'react';

interface NavbarProps {
  logo?: React.ReactNode;
  items?: Array<{ label: string; href: string }>;
  children?: React.ReactNode;
}

export const Navbar = ({ logo, items, children }: NavbarProps) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {logo && <div className="font-bold text-xl">{logo}</div>}
          {items && (
            <ul className="hidden md:flex gap-6">
              {items.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {children}
      </div>
    </nav>
  );
};

Navbar.displayName = 'Navbar';
