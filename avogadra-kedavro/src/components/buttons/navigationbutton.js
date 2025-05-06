'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function NavigationButton({ imageSrc, altText, onClick, width = 400, height = 80 }) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push('/');
    };
  }

  return (
    <div 
      onClick={handleClick}
      className="cursor-pointer hover:opacity-90 transition-opacity"
    >
      <Image
        src={imageSrc}
        alt={altText}
        width={width}
        height={height}
        className="h-auto"
      />
    </div>
  );
}
