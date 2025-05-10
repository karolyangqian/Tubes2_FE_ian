import Image from "next/image";
import { NavigationButton } from "@/components/buttons/navigationbutton";

export default function Home({ onStartClick, onAboutClick }) {
  

  return (
    <div className="w-full h-screen">
      <div className="absolute flex top-10 left-10">
          <Image
            src="/home/title.svg"
            alt="Title"
            width={900}
            height={200}
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
