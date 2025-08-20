"use client";

import React from 'react';

interface NavigationMenuProps {
  onCommandExecute?: (command: string) => void;
}

const NavigationMenu = ({ onCommandExecute }: NavigationMenuProps = {}) => {
  const commands = [
    'help', 'about', 'projects', 'skills', 'experience', 'contact',
    'education', 'certifications', 'leadership', 'sudo', 'clear'
  ];

  const handleCommandClick = (command: string) => {
    // Trigger command execution in terminal
    if (onCommandExecute) {
      onCommandExecute(command);
    } else {
      // Fallback: dispatch custom event that terminal can listen to
      window.dispatchEvent(new CustomEvent('terminal-command', { 
        detail: { command } 
      }));
    }
  };

  return (
    <div className="font-mono text-sm flex flex-wrap gap-x-2 gap-y-1 text-primary">
      {commands.map((command, index) => (
        <React.Fragment key={command}>
          <button
            onClick={() => handleCommandClick(command)}
            className="hover:text-cyan-400 focus:text-cyan-400 focus:outline-none transition-colors cursor-pointer active:scale-95"
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