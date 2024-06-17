
import { useEffect, useState } from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import axios from "axios";
import CreateScroolSection from "./contentSeparator";
import CreateScroolProject from "./contentSeparatorProject";




export function ScrollAreaDemo() {
  const [decideWhich, setDecide] = useState<any>(undefined);
  const [decideWhichProject, setDecideProject] = useState<any>(undefined);
  const [load, setLoad] = useState<boolean>(false);
  let [innerLoad, setInnerLoad] = useState<boolean>(false);


  useEffect(() => {

    console.log("calling method")
    fetchData(); // Call the function to fetch data

    // Cleanup function (optional for potential side effects)

  }, []);

  const fetchData = async () => {
    console.log("calling method")
    try {
      const response = await fetch('http://localhost:4000/dataRequested/exercises');
      const responseProject = await fetch("http://localhost:4000/dataRequested/projects")

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      if (!responseProject.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      const responseDataProject = await responseProject.json()

      setDecideProject(responseDataProject)
      setDecide(responseData);
      setLoad(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };






  return (
    <>
      
        
      {
        <ScrollArea className="h-72 w-5/6 rounded-md  border ">
          <div className="p-4 flex flex-col gap-8">
            
            <div className="flex flex-row justify-center items-baseline gap-10 ">
            <button onClick={() => {  setInnerLoad(innerLoad = true) }} className="px-4 py-2 rounded-md border border-black bg-white  text-sm hover:shadow-[4px_4px_0px_0px_rgba(248,113,113)] transition duration-200 text-red-400  font-bold dark:text-slate-400 dark:bg-black dark:hover:shadow-[4px_4px_0px_0px_rgba(128,128,128)]">
              Projects
            </button>
            <button onClick={() => {  setInnerLoad(innerLoad = false) }} className="px-4 py-2 rounded-md border border-black bg-white  text-sm hover:shadow-[4px_4px_0px_0px_rgba(248,113,113)] transition duration-200 text-red-400  font-bold dark:text-slate-400 dark:bg-black dark:hover:shadow-[4px_4px_0px_0px_rgba(128,128,128)]">
              Exercises
            </button>
            </div>
            <div>
            {decideWhich ? (innerLoad ? <CreateScroolProject content={decideWhichProject} /> : <CreateScroolSection content={decideWhich} />) : <h1>Loading ...</h1>}
            </div>
          </div>
        </ScrollArea>



      }







    </>
  )
}
