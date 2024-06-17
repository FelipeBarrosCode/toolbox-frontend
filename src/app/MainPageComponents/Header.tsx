"use client"
import { FloatingNav } from "../components/ui/floating-navbar";
import ImageGit from "../../../public/icons8-github.svg"
import ImageLinkedin from "../../../public/icons8-linkedin.svg"
import Image from "next/image"

export default function Header() {
    
    const contentTpoRender:Array<any> = []
    
    return (
     <>
        <FloatingNav navItems={contentTpoRender} className="custom-class"/>
        
     
     
     </>
    );
  }
  