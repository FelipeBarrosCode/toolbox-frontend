import Image from "next/image";
import { FollowerPointerCard } from "../components/ui/follow-pointer";
import Link from "next/link";
import {useRouter} from "next/navigation"

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


export function FollowingPointerDemo({slug,
    author,
    link,
    title,
    description,
    image,
    authorAvatar}:BoxesObject) {
    
        const router = useRouter()
  
        return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={author}
            avatar={authorAvatar}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src={image}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200  `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
              {title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
              {description}
            </h2>
            <div className="flex flex-row justify-center items-center mt-10">
              
                <div onClick={() => { router.push(link)  }} className=" cursor-default px-4 py-2 rounded-md border border-black bg-white  text-sm hover:shadow-[4px_4px_0px_0px_rgba(248,113,113)] transition duration-200 text-red-400  font-bold dark:text-slate-400 dark:bg-black dark:hover:shadow-[4px_4px_0px_0px_rgba(128,128,128)]">
                Go
            </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}



const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height={20}
      width={20}
      alt="thumbnail"
      className="rounded-full border-2 border-black text-black"
    />
    <p className="text-black">{title}</p>
  </div>
);
