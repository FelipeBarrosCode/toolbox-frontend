import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectPlatforms() {
  return (
    <div className="max-w-5xl mx-auto px-8  flex flex-col justify-center items-center">
      <h1 className=" text-2xl text-red-400  font-bold dark:text-slate-400  ">Platforms To Be Used</h1>
      <div>
      <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "GitHub",
    description:
      "Platform where you can contribute to open source code projects and create your own remote repositories",
    link: "https://github.com/",
  },
  {
    title: "Stack Overflow",
    description:
      "Online Forum for progammers to help eachother with their coding questions",
    link: "https://stackoverflow.com/",
  },
  {
    title: "Leet Code",
    description:
      "Platform where people can solve coding questions",
    link: "https://leetcode.com/",
  },
  {
    title: "Copilot",
    description:
      "AI software that porgammers use to boost their work efficiency.",
    link: "https://github.com/features/copilot",
  },
  {
    title: "YouTube",
    description:
      "The Place where you can find all information you need about the software engineering world",
    link: "https://youtube.com",
  },
  {
    title: "Udemy",
    description:
      "One of the bigest online course platforms that you can find on the internet.",
    link: "https://www.udemy.com/",
  },
];
