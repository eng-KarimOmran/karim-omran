"use client";
import React, { useState, useEffect } from 'react';

export default function Count({ num }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < num) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    },2000 / num);

    return () => clearInterval(interval);
  }, [num]);

  return (
    <div className='text-5xl text-white'>
      {count}
    </div>
  );
}
