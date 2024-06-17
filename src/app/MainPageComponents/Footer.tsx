import {AnimatedTooltip} from "../components/ui/animated-tooltip"
import ImageGit from "../../../public/githubgood.svg"
import ImageLinkedin from "../../../public/linkagain.svg"
import { ModeToggle } from "./ActivateDarkMode"



export default function FooterToBeUsed(){
    const contentTpoRender:Array<object> = [{ id:1, name:"Git Hub",urlLink:"https://github.com/FelipeBarrosCode",image:ImageGit, designation:"My Git Hub"},{id:2,name:"LinkedIn",urlLink:"https://www.linkedin.com/in/felipe-barros-moura-773595261/",image:ImageLinkedin, designation:"My Linkedin"}]
    return(
        <>  

            <div className="flex flex-row dark:bg-black bg-white justify-around items-center w-11/12 border rounded-lg mt-14">

            <AnimatedTooltip items={contentTpoRender} />
                
            
                <ModeToggle/>



            </div>
            
        
        
        </>
    )

}