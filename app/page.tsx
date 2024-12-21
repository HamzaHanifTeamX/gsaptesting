"use client";

import { useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = ({ clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: clientX - cursorRef.current.offsetWidth / 2, // Center horizontally
        y: clientY - cursorRef.current.offsetHeight / 2, // Center vertically
        duration: 0.2, // Smoother animation
        ease: "elastic", // Linear movement
      });
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-screen h-screen bg-gray-200 relative overflow-hidden"
    >
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="w-5 h-5 bg-slate-600 rounded-full fixed pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}
