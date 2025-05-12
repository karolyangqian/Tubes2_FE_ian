import Image from "next/image";

export default function RetroButton({ iconPath, text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        bg-[#E77BFF]/70 hover:bg-fuchsia-700 active:bg-fuchsia-800
        px-3 py-2 rounded-2xl cursor-pointer select-none
        transition-colors duration-200 ease-in-out
        flex items-center justify-between gap-4
        w-fit max-w-full min-w-10 md:min-w-14
        border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-[2px] active:translate-y-[2px]
        overflow-hidden
      "
    >
      {iconPath && (
        <div className="flex-shrink-0">
          <Image 
            src={iconPath} 
            alt="Button icon" 
            width={24} 
            height={24}
            className="w-4 h-4 md:w-8 md:h-8"
          />
        </div>

      )}
      {text && (
        <span className="
          font-press-start
          text-shadow-press-start
          text-xs md:text-lg
          text-center flex-grow
          tracking-widest
        ">
          {text}
        </span>
        )}
    </div>
  );
}