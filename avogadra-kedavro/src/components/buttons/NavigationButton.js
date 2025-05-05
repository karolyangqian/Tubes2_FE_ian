'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function NavigationButton({ imageSrc, altText, route }) {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="cursor-pointer hover:opacity-90 transition-opacity"
    >
      <Image
        src={imageSrc}
        alt={altText}
        width={400}
        height={80}
        className="w-auto h-auto"
      />
    </div>
  );
}