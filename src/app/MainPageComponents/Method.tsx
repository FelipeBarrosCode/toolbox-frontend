"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scrool-reveal";
import Image from "next/image";
import ytImage from "../../../public/ytGood.jpg"
import vsCode from "../../../public/vscode.png"
import leetCodeImg from "../../../public/leetcode.png"
import gitHubIMG from "../../../public/GitHub-Mark-ea2971cee799.png"
import stackOverflow from "../../../public/stack.webp"

const content = [
  {
    title: "Watch",
    description:
      "This is the first step when learning a new topic in progamming. At this step your main goal is to learn by watching try to grasp as much information as you can about the topic and see if you are actually interested in learning the topic",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image src={ytImage} alt="not working" width={400} height={400}/>
      </div>
    ),
  },
  {
    title: "Do It",
    description:
      "Watching is a good startegy but it rarely will be able to fill the leaning necessities of most people. Which brings us to the second step, of actually doing the same thing that was being taught in the video here you can choose wheater you want to do it while watching the video or after watching it. The main goal of this step is to get your brain used to the syntax and the logic",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={vsCode}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Challenge Questions",
    description:
      "Here you are supposed to go one step ahead. You will want here to slve small question about what you are learning like little challenges to see if you are being able to grasp the concepts. I highly recommend you not trying to use the video or any other resource at this step here you will want to challenge yourslef to see if you are capable of doing something without any assistance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src={leetCodeImg}
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Create a Project",
    description:
      "That is by far the most fun step to learn this new content. Here you are going to actually do a project one that is so dope that you will be able to apply all the knowledge that you gatehred. Use the tech that you just learned to buils a meaningfull project. When I say that I do not want you to build a clone or a silly website. I want you to build something big that you can say DAMN I was the G.O.A.T that built that",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src={gitHubIMG}
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  }, {
    title: "Review and Rebuild",
    description:
      "Now this is the last step considering that you built your project. Get this project and start to see where you feel like that your code could have improvements. Get that intel and improve your next project or refine the one that you currently have.",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src={stackOverflow}
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealPlatforms() {
  return (
    <div className="p-10 mt-10 flex flex-col justify-center items-center gap-4" >
      <h1 className=" text-2xl text-red-400  font-bold dark:text-slate-400  ">Our Learning Method</h1>
      <StickyScroll content={content} />
    </div>
  );
}
