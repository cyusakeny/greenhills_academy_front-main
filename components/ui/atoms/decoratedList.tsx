import Image from "next/image";
import React from "react";
interface ListProps {
    details: string;
  }
const DecoratedList:React.FC<ListProps> = ({details}) =>{
    return (
        <div className="w-full h-auto  justify-start items-center gap-4 flex flex-row">
          <Image src="/icons/list.svg" width={1} height={1} alt="" className="w-6 h-6"/>  
          <div className="text-justify text-zinc-600 text-lg font-normal font-['Outfit']">
            {details}
          </div>
        </div>
    )
}
export default DecoratedList;