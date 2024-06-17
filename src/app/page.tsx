"use client"
import Image from "next/image";
import { FloatingNav } from "./components/ui/floating-navbar";
import Header from "./MainPageComponents/Header";
import HeroDefault from "./MainPageComponents/HeroSection";
import { StickyScrollRevealPlatforms } from "./MainPageComponents/Method";
import { CardHoverEffectPlatforms } from "./MainPageComponents/HoverPlatforms";
import { ScrollAreaDemo } from "./MainPageComponents/diffScrool";
import FooterToBeUsed from "./MainPageComponents/Footer"
import { ModeToggle } from "./MainPageComponents/ActivateDarkMode";
import { FollowerPointerCard } from "./components/ui/follow-pointer";
import imgOne from "../../public/githubgood.svg"
import { FollowingPointerDemo } from "./MainPageComponents/FollowPPointer";
import FollowPointerSection from "./MainPageComponents/FollowPointerSection";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-x-hidden  gap-14">
        <Header />
        
        <HeroDefault/>
        <StickyScrollRevealPlatforms/>
        {/* <FollowPointerSection /> */}
        <CardHoverEffectPlatforms/>
        <ScrollAreaDemo/>

        <FooterToBeUsed/>

        



      </div>
    </>
  );
}
