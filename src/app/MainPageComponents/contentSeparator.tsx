import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Key } from "react";




export default function CreateScroolSection({ content }: { content: object[] }){


  
    return(<>
    <div className="grid grid-cols-4 gap-4">
              <h1 className="text-red-400 dark:text-slate-400">Name</h1>
              <h1 className="text-red-400 dark:text-slate-400">Acceptability Rate</h1>
              <h1 className="text-red-400 dark:text-slate-400">Premium</h1>
              <h1 className="text-red-400 dark:text-slate-400">Link</h1>

            </div>
    <Separator className="my-2" />
    
    {content.map((key:object,index:number) => (
          <>
            <div key={index} className="grid grid-cols-4 gap-4 ">
              <h1 className="text-red-400 dark:text-slate-400">{key.Name}</h1>
              <h1 className="text-red-400 dark:text-slate-400">{key.Acceptabiliy}</h1>
              <h1 className="text-red-400 dark:text-slate-400">{key.paidOnly? "Need Premium" : "No need For Premium"}</h1>
              <Link href={key.urlToBeUsed} className="text-red-400 dark:text-slate-400">Go to this question</Link>

            </div>
            <Separator className="my-2" />
          </>
        ))}
    
    
    </>)



}