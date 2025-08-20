import React from 'react';

const Header = () => {
  return (
    <header className="p-4 border-b border-primary text-center md:text-left">
      <h1 className="font-mono text-2xl font-bold text-primary">
        Mark Gatere
      </h1>
      <p className="font-mono text-sm text-muted">
        Software Engineer
      </p>
    </header>
  );
};

export default Header;