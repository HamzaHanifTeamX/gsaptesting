"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const MouseFollowerWithScale = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: clientX,
          y: clientY,
          duration: 0.1,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 2,
        backgroundColor: "#2563eb",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: "#3b82f6",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <div>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 bg-blue-500 rounded-full pointer-events-none"
        style={{
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />

      {/* Page Content */}
      <div className="w-screen h-screen bg-gray-100 flex items-center justify-center space-x-10">
        {/* Example divs with mouse events */}
        <div
          className="w-32 h-32 bg-red-400 flex items-center justify-center text-white font-bold cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover Me!
        </div>
        <div
          className="w-32 h-32 bg-green-400 flex items-center justify-center text-white font-bold cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover Me Too!
        </div>
      </div>
    </div>
  );
};

export default MouseFollowerWithScale;
