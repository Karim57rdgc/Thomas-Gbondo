"use client";

import React from 'react';

const NavigationMenu = () => {
  const commands = [
    'help', 'about', 'projects', 'skills', 'experience', 'contact',
    'education', 'certifications', 'leadership', 'sudo', 'clear'
  ];

  // In a real application, this would likely dispatch a command to a terminal context
  const handleCommandClick = (command: string) => {
    // This is a placeholder for the actual command logic
    console.log(`Executing command: ${command}`);
  };

  return (
    <div className="font-mono text-sm flex flex-wrap gap-x-2 gap-y-1 text-primary">
      {commands.map((command, index) => (
        <React.Fragment key={command}>
          <button
            onClick={() => handleCommandClick(command)}
            className="hover:text-[var(--color-cyan-accent)] focus:text-[var(--color-cyan-accent)] focus:outline-none transition-colors"
          >
            {command}
          </button>
          {index < commands.length - 1 && (
            <span aria-hidden="true">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavigationMenu;