import React from 'react';
import Header from '@/components/sections/header';
import InteractiveCard from '@/components/sections/interactive-card';
import TerminalInterface from '@/components/sections/terminal-interface';
import NavigationMenu from '@/components/sections/navigation-menu';
import StatusBar from '@/components/sections/status-bar';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex">
        <InteractiveCard />
        
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-primary">
            <NavigationMenu />
          </div>
          
          <div className="flex-1">
            <TerminalInterface />
          </div>
        </div>
      </main>
      
      <StatusBar />
    </div>
  );
}