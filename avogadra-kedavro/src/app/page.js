'use client';

import React, { useState } from "react";
import Home from "@/components/views/home";
import Start from "@/components/views/start";
import RetroButton from "@/components/buttons/retrobutton";

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
        setTransitioningStart(true);
      }, transitionDuration);
    };

  const handleBackClick = () => {
      setTransitioningStart(false);
      setHomePage(true);
      
      setTimeout(() => {
        setStartPage(false);
        setTransitioningHome(false);
      }, transitionDuration);
    }

  return (
    <div className="relative w-full h-screen">
      { startPage && (
        <div 
        className={`absolute p-6  z-10 hover:opacity-100 transition-opacity ${transitioningStart ? 'opacity-20' : 'opacity-0'}`}
        style={{ transitionDuration: `${transitionDuration/2}ms` }}
        >
        <RetroButton
          text="BACK"
          onClick={handleBackClick}
        />
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
      {
        startPage && (
        <div 
        className={`transition-opacity ${transitioningStart ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDuration: `${transitionDuration}ms` }}
        >
          <Start />
        </div>
      )}

    </div>
  );
}
