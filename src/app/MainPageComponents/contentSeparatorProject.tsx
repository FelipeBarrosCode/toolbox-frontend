import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Key } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"




export default function CreateScroolProject({ content }: { content: object[] }) {

  function filter(str: string) {

    let finalString = str.slice(1, str.lastIndexOf("]"))

    return finalString
  }

  return (<>

    <div className="flex flex-row flex-wrap gap-5 justify-center items-baseline ">
      {content.map((key: object, index: number) => (
        <>
          <div key={index} className=" w-5/12">
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1">
                <AccordionTrigger className=" text-red-400 dark:text-slate-400">{key.categoryName}</AccordionTrigger>
                <AccordionContent >
                  <div className="flex flex-col justify-around text-red-400 dark:text-slate-400">

                    {key.projects.map((project) => (
                      <h1 key={project.id}>
                        {/* Access project details here */}
                        {filter(project.projectName)}
                      </h1>
                    ))}

                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </>
      ))}
    </div>


  </>)



}