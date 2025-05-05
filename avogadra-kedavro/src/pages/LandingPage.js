import React from 'react';
import Image from 'next/image';
import { NavigationButton } from '@/components/buttons/NavigationButton';

export default function LandingPage() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/landing-page/background.svg')" }}
    >
      <div className="absolute top-20 left-20 w-1/2">
        <Image
          src="/landing-page/title.svg"
          alt="Title"
          width={500}
          height={200}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-6 right-20 flex flex-col space-y-4">
        <NavigationButton 
          imageSrc="/landing-page/button-start.svg"
          altText="Start"
          route="/home"
        />
        <NavigationButton 
          imageSrc="/landing-page/button-about.svg"
          altText="About"
          route="/about"
        />
      </div>
    </div>
  );
}