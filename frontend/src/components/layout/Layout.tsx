import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
