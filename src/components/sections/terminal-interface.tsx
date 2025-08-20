import React from 'react';

const TerminalInterface = () => {
    // The welcome message text with deliberate newlines to be rendered by `whitespace-pre-wrap`.
    const welcomeMessage = `Hi, I'm Mark Gatere, a Software & AI Engineer.

Welcome to my interactive 'AI powered' portfolio terminal!
Type 'help' to see available commands.`;

    return (
        <div className="font-mono bg-black text-green-500 w-full h-full overflow-y-auto px-4 pb-6 text-sm">
            {/* Command history section */}
            <div className="command-history pt-2">
                <div className="mb-4">
                    {/* The executed "welcome" command */}
                    <div className="command-line flex items-center">
                        <span className="text-blue-400 mr-2">gatere@portfolio:~$</span>
                        <span>welcome</span>
                    </div>
                    {/* The output of the "welcome" command */}
                    <div className="response mt-1 text-white whitespace-pre-wrap">
                        {welcomeMessage}
                    </div>
                </div>
            </div>

            {/* The current, active command prompt */}
            <div className="command-input flex items-center">
                <span className="text-blue-400 mr-2">gatere@portfolio:~$</span>
                <div className="fake-input flex-1 relative flex items-center h-4">
                    <span className="text-green-500"></span>
                    {/* Blinking cursor simulation */}
                    <span 
                        className="cursor bg-green-500 w-2 h-full inline-block animate-pulse"
                    ></span>
                    <span className="text-green-500"></span>
                    {/* Hidden actual input for interactivity in a real app */}
                    <input 
                        className="absolute inset-0 w-full h-full bg-transparent border-none text-transparent outline-none opacity-0 p-0"
                        aria-label="Terminal input"
                    />
                </div>
            </div>
        </div>
    );
};

export default TerminalInterface;