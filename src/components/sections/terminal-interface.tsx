"use client";

import React, { useState, useRef, useEffect } from 'react';

interface CommandHistory {
  command: string;
  response: string;
}

const TerminalInterface = () => {
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      response: `Hi, I'm Thomas Hopanda Gbondo — a Full-Stack & AI Enthusiast, Trader, and Real Estate Agent.

Welcome to my interactive portfolio terminal!
Type 'help' to see available commands.`
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: `Available commands:
• about - Learn about my background and experience
• projects - View my portfolio of projects  
• skills - See my technical skills and expertise
• experience - Browse my work history
• contact - Get in touch with me
• education - View my educational background
• certifications - See my certifications and achievements
• leadership - Learn about my leadership experience
• sudo - Access admin functions
• clear - Clear the terminal screen`,
    
    about: `Full-Stack & AI Enthusiast | Trader | Real Estate Agent

I'm a passionate developer with expertise in modern web technologies and AI systems.
Currently building innovative solutions that bridge technology and business needs.`,

    projects: `Recent Projects:
• AI Trading Bot - Automated cryptocurrency trading system
• Real Estate Platform - Property management and listing system
• Portfolio Terminal - This interactive terminal interface
• Full-Stack Applications - Various web applications using React, Node.js`,

    skills: `Technical Skills:
• Frontend: React, Next.js, TypeScript, Tailwind CSS
• Backend: Node.js, Python, PostgreSQL, MongoDB
• AI/ML: Machine Learning, Natural Language Processing
• Trading: Algorithmic Trading, Market Analysis
• Real Estate: Property Analysis, Market Research`,

    experience: `Professional Experience:
• Full-Stack Developer - Building scalable web applications
• AI Engineer - Developing intelligent systems and automation
• Trader - Cryptocurrency and financial markets analysis
• Real Estate Agent - Property consultation and sales`,

    contact: `Get In Touch:
• Email: thomas.gbondo@example.com
• LinkedIn: linkedin.com/in/thomasgbondo
• GitHub: github.com/thomasgbondo
• Phone: Available upon request`,

    education: `Educational Background:
• Computer Science Degree
• AI & Machine Learning Certifications
• Real Estate License
• Continuous learning in emerging technologies`,

    certifications: `Certifications & Achievements:
• AWS Certified Developer
• Google Cloud Platform Professional
• Real Estate License
• Trading Certifications
• Various AI/ML Course Completions`,

    leadership: `Leadership Experience:
• Team Lead for multiple development projects
• Mentor for junior developers
• Community involvement in tech meetups
• Real estate team collaboration`,

    sudo: `Access granted. Welcome to admin mode.
Remember: With great power comes great responsibility. 🚀`,

    clear: 'CLEAR_TERMINAL'
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setCommandHistory([]);
      return;
    }

    const response = commands[trimmedCmd as keyof typeof commands] || `Command not found: ${cmd}
Type 'help' to see available commands.`;

    setCommandHistory(prev => [...prev, { command: cmd, response }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (currentInput.trim()) {
        executeCommand(currentInput);
      }
      setCurrentInput('');
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  // Listen for commands from navigation menu
  useEffect(() => {
    const handleTerminalCommand = (event: CustomEvent) => {
      const { command } = event.detail;
      executeCommand(command);
    };

    window.addEventListener('terminal-command', handleTerminalCommand as EventListener);
    
    return () => {
      window.removeEventListener('terminal-command', handleTerminalCommand as EventListener);
    };
  }, []);

  // Auto-scroll to bottom when new commands are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div 
      ref={terminalRef}
      className="font-mono bg-black text-green-500 w-full h-full overflow-y-auto px-4 pb-6 text-sm cursor-text"
      onClick={focusInput}
    >
      {/* Command history section */}
      <div className="command-history pt-2">
        {commandHistory.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="command-line flex items-center">
              <span className="text-blue-400 mr-2">thomas@portfolio:~$</span>
              <span>{item.command}</span>
            </div>
            <div className="response mt-1 text-white whitespace-pre-wrap">
              {item.response}
            </div>
          </div>
        ))}
      </div>

      {/* The current, active command prompt */}
      <div className="command-input flex items-center">
        <span className="text-blue-400 mr-2">thomas@portfolio:~$</span>
        <div className="fake-input flex-1 relative flex items-center h-4">
          <span className="text-green-500">{currentInput}</span>
          <span className="cursor bg-green-500 w-2 h-full inline-block animate-pulse"></span>
          <input 
            ref={inputRef}
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="absolute inset-0 w-full h-full bg-transparent border-none text-transparent outline-none opacity-0 p-0"
            aria-label="Terminal input"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalInterface;