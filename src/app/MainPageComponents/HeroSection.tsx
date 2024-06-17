
import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export default function HeroDefault(){

    const words = ["job", "school", "hobby", "carrer"];
 
  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-red-400 dark:text-neutral-400">
        Welcome to ToolBox.io, our tools will help you in your
        <FlipWords words={words} /> <br />
        
      </div>
    </div>
  );


}