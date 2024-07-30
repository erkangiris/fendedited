import React from 'react';

interface MotionBoxProps {
  children: React.ReactNode;
}

export default function MotionBox({ children }: MotionBoxProps) {
  return (
    <div className="w-610 overflow-hidden relative flex justify-center lg:w-460 md:w-400 pt-32 sm:pt-9 sm:w-full">
      <div className="w-360 flex justify-center items-end relative sm:w-full sm:max-w-80 h-475 sm:h-310">
        {children}
      </div>
    </div>
  );
}
