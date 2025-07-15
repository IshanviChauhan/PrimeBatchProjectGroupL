import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      <main>{children}</main>
      
      {/* Simple Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Programming Pathshala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
