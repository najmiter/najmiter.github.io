'use client';

import { useState, useEffect, useRef } from 'react';

export default function NullPage() {
  const [mouseSpeed, setMouseSpeed] = useState(0);
  const lastPosition = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const currentTime = Date.now();
      const currentPosition = { x: event.clientX, y: event.clientY };

      const deltaX = currentPosition.x - lastPosition.current.x;
      const deltaY = currentPosition.y - lastPosition.current.y;
      const deltaTime = currentTime - lastTime.current;

      if (deltaTime > 10) {
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const speed = distance / deltaTime;

        const scaledSpeed = Math.min(speed * 0.02, 1);
        setMouseSpeed(scaledSpeed);
      }

      lastPosition.current = currentPosition;
      lastTime.current = currentTime;
    };

    const speedDecay = setInterval(() => {
      setMouseSpeed((prev) => Math.max(prev * 0.95, 0));
    }, 50);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(speedDecay);
    };
  }, []);

  return (
    <div className="min-h-svh flex items-center justify-center bg-black">
      <h1
        className="text-6xl font-bold pointer-events-none select-none text-white transition-opacity duration-100"
        style={{ opacity: mouseSpeed }}
      >
        Maa mje kch dikhaee nhi dy rha maa
      </h1>
    </div>
  );
}
