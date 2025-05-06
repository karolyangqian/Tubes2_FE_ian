import Image from "next/image";
import { NavigationButton } from "@/components/buttons/navigationbutton";

export default function Home({ onStartClick, onAboutClick }) {
  

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-10 left-10 w-3/5">
          <Image
            src="/home/title.svg"
            alt="Title"
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-15 right-10 flex flex-col space-y-4">
          <NavigationButton 
            imageSrc="/home/button-start.svg"
            altText="Start"
            onClick={onStartClick}
            width={300}
          />
          <NavigationButton 
            imageSrc="/home/button-about.svg"
            altText="About"
            onClick={onAboutClick}
            width={300}
          />
        </div>
    </div>
  );
}
