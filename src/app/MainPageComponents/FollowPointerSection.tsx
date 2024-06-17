import { FollowingPointerDemo } from "./FollowPPointer"

interface Boxes {
    boxesContent:BoxesObject[]

    
}

interface BoxesObject {
    
        slug: string
        author: string
        link: string
        title: string
        description:
        string
        image: string
        authorAvatar:string
    
}






export default function FollowPointerSection(){

    const blogContents: Boxes ={ 
    boxesContent:
        [{
            slug: "Introduction To Web Developement",
            author: "Coder Coder",
            link: "https://www.youtube.com/watch?v=ysEN5RaKOlA",
            title: "Learn web development as an absolute beginner",
            description:
              "A video for you to learn web dev basics faster",
            image: "/logowebdev.jpg",
            authorAvatar: "/ytLogo.svg",
    
        },{
            slug: "How Large Language Models Work",
            author: "IBM",
            link: "https://www.youtube.com/watch?v=5sLYAQS9sWQ",
            title: "Learn how to build your own ChatGPT starting from  the basics",
            description:
              "A video for you to learn AI basics faster",
            image: "/logowebdev.jpg",
            authorAvatar: "/ytLogo.svg",
    
        },{
            slug: "Game Development for Dummies | The Ultimate Guide",
            author: "Thomas Brush",
            link: "https://www.youtube.com/watch?v=eANjGomWZp4",
            title: "Learn How to develop Your first Game",
            description:
              "A video for you to learn game development basics faster",
            image: "/logowebdev.jpg",
            authorAvatar: "/ytLogo.svg",
    
        }]}
    
    return(
        <>

        <div className="flex flex-col gap-5 justify-center items-center w-screen ">
            <h1 className="text-2xl text-red-400  font-bold dark:text-slate-400 ">Some videos For you To Learn The Basics</h1>

        <div className=" w-screen gap-5  h-max flex flex-row flex-wrap justify-center items-baseline">
           
        
            {blogContents.boxesContent.map((item,index)=>{
              return (
               // eslint-disable-next-line react/jsx-key
               <FollowingPointerDemo slug={item.slug}
               author={item.author}
               link={item.link}
               title={item.title}
               description={item.description}
               image={item.image}
               authorAvatar={item.authorAvatar} />
              )
        
               
            })}
            

        
            

        
        
        
        
        
        </div>
        </div>
        </>
    )
}



