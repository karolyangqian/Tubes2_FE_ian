'use client';

import React, { useState } from "react";
import Home from "@/components/views/home";
import Start from "@/components/views/start";


export default function App() {
  const transitionDuration = 2000;
  const [homePage, setHomePage] = useState(true);
  const [startPage, setStartPage] = useState(false);
  
  const [transitioningHome, setTransitioningHome] = useState(false);
  const [transitioningStart, setTransitioningStart] = useState(false);

  const handleStartClick = () => {
      setTransitioningHome(true);
      setStartPage(true);

      setTimeout(() => {
        setHomePage(false);
        setTransitioningHome(false);
        setTransitioningStart(true);
      }, transitionDuration);
    };

  return (
    <div className="relative w-full h-screen">
      {
        startPage && (
        <div 
        className={`transition-opacity ${transitioningStart ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDuration: `${transitionDuration}ms` }}
        >
          <Start />
        </div>
      )}

      {
        homePage && (
          <div 
          className={`transition-opacity ${transitioningHome ? 'opacity-0' : 'opacity-100'}`}
          style={{ transitionDuration: `${transitionDuration}ms` }}
          >
            <Home 
              onStartClick={handleStartClick}
              onAboutClick={() => {}}
            />
          </div>
        )
      }
    </div>
  );
}
