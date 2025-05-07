import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function RetroTextInput({ 
  label,
  value, 
  onChange, 
  placeholder,
  iconPath,
  stretch = false,
  type = "text"
}) {
  const [placeholderWidth, setPlaceholderWidth] = useState('auto');
  const spanRef = useRef(null);

  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.textContent = placeholder;
      setPlaceholderWidth(`${spanRef.current.offsetWidth}px`);
    }
  }, [placeholder]);

  return (
    <>
      <span
        ref={spanRef}
        className="
          font-press-start
          text-sm md:text-lg
          tracking-widest
          absolute
          opacity-0
          pointer-events-none
          whitespace-nowrap
        "
      />
      
      <div className={`
        bg-[#E77BFF]/70 hover:bg-fuchsia-700 focus-within:bg-fuchsia-700
        px-3 py-2 rounded-2xl
        transition-colors duration-200 ease-in-out
        flex items-center gap-4
        border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        focus-within:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        ${stretch ? 'w-full' : 'inline-flex'}
      `}>
        {iconPath && (
          <div className="flex-shrink-0">
            <Image 
              src={iconPath} 
              alt="Input icon" 
              width={24} 
              height={24}
              className="w-8 h-8"
            />
          </div>
        )}
        
        <div className="flex items-baseline min-w-0 w-full">
          {label && (
            <span className="
              font-press-start
              text-shadow-press-start
              text-sm md:text-lg
              tracking-widest
              whitespace-nowrap
            ">
              {label}
            </span>
          )}
          
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{ width: stretch ? '100%' : placeholderWidth }}
            className="
              font-press-start
              text-shadow-press-start
              text-sm md:text-lg
              bg-transparent border-none outline-none
              tracking-widest
              placeholder-white/70
              ml-1
              min-w-[40px]
              ${stretch ? 'flex-1' : ''}
              w-full
            "
          />
        </div>
      </div>
    </>
  );
}