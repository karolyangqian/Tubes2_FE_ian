'use client';

import React, { useState } from "react";
import Home from "@/components/views/home";
import Start from "@/components/views/start";
import About from "@/components/views/about";
import RetroButton from "@/components/buttons/retrobutton";

export default function App() {
  const transitionDuration = 2000;
  const [homePage, setHomePage] = useState(true);
  const [startPage, setStartPage] = useState(false);
  const [aboutPage, setAboutPage] = useState(false);
  
  const [transitioningHome, setTransitioningHome] = useState(false);
  const [transitioningStart, setTransitioningStart] = useState(false);
  const [transitioningAbout, setTransitioningAbout] = useState(false);

  const handleStartClick = () => {
      setTransitioningHome(true);
      setStartPage(true);

      setTimeout(() => {
        setHomePage(false);
        setTransitioningStart(true);
      }, transitionDuration);
    };

  const handleAboutClick = () => {
      setTransitioningHome(true);
      setAboutPage(true);

      setTimeout(() => {
        setHomePage(false);
        setTransitioningAbout(true);
      }, transitionDuration);
    }

  const handleBackClick = () => {
      setTransitioningStart(false);
      setTransitioningAbout(false);
      setHomePage(true);
      
      setTimeout(() => {
        setStartPage(false);
        setAboutPage(false);
        setTransitioningHome(false);
      }, transitionDuration);
    }

  return (
    <div className="absolute w-full h-full">
      { (startPage || aboutPage) && (
        <div 
        className={`absolute p-6 z-10 hover:opacity-100 transition-opacity ${(transitioningStart || transitioningAbout) ? 'opacity-20' : 'opacity-0'}`}
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
          className={`absolute w-full h-screen transition-opacity ${transitioningHome ? 'opacity-0' : 'opacity-100'}`}
          style={{ transitionDuration: `${transitionDuration}ms` }}
          >
            <Home 
              onStartClick={handleStartClick}
              onAboutClick={handleAboutClick}
            />
          </div>
        )
      }
      {
        startPage && (
        <div 
        className={`absolute w-full h-screen transition-opacity ${transitioningStart ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDuration: `${transitionDuration}ms` }}
        >
          <Start />
        </div>
      )
      }
      {
        aboutPage && (
          <div 
          className={`absolute w-full h-screen transition-opacity ${transitioningAbout ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDuration: `${transitionDuration}ms` }}
          >
            <About />
          </div>
        )
      }     

    </div>
  );
}
