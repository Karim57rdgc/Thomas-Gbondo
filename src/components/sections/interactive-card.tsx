'use client';

import React, { useRef, MouseEvent } from 'react';
import Image from 'next/image';

const InteractiveCard = () => {
    const cardContainerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardContainerRef.current || !cardRef.current) return;

        const { left, top, width, height } = cardContainerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / (width / 2);
        const y = (e.clientY - top - height / 2) / (height / 2);

        const rotateY = x * 15;
        const rotateX = -y * 15;

        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

  return (
    <div className="hidden md:block w-2/5 h-full border-r border-green-700 relative z-10">
      <div 
        ref={cardContainerRef}
        className="relative w-full h-full flex items-center justify-center p-4"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={cardRef}
          className="w-[280px] h-[480px] flex flex-col items-center transition-transform duration-300 ease-out"
          style={{ transformStyle: 'preserve-3d'}}
        >
          <div className="w-px h-20 bg-gray-600 mb-[-1px]" style={{ transform: 'translateZ(-10px)' }}></div>
          <div className="w-16 h-4 bg-gray-700 border border-gray-600 rounded-t-sm z-10 flex items-center justify-center">
              <div className='w-1 h-2 bg-gray-500 rounded-full'></div>
          </div>
          <div 
            className="w-full h-[400px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl shadow-primary/20 flex flex-col justify-end p-6"
            style={{ transform: 'translateZ(20px)' }}
          >
              <div className="flex flex-col items-center gap-4">
                <div className="w-36 h-36 rounded-full border-2 border-gray-400/50 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/QAP335I5T7SttGOtxW9Dag.jpg" 
                    alt="Profile" 
                    width={144} 
                    height={144} 
                    className="object-cover w-36 h-36 rounded-full"
                  />
                </div>
                <div className="w-full flex justify-between items-center mt-4">
                  <div className="w-8 h-8 rounded-md bg-white/20"></div>
                  <div className="w-24 h-4 rounded bg-white/20"></div>
                </div>
              </div>
          </div>
        </div>

        <div className="absolute bottom-2 right-2 text-xs text-green-500 font-mono bg-black bg-opacity-70 p-1 rounded z-20">
          [Interactive 3D Card]
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;