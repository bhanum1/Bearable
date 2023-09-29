import Link from "next/link"
import Image from "next/image"
import { Icons } from "./icons";


export default function Inner(props){
    return(
        <div className="flex flex-col gap-3">
            <Image
            src={`/${props.source}.svg`}
            className='self-center pt-10'
            style={{width: '20%', height: 'auto'}}
            width={0}
            height={0} 
            quality={100}
            alt="Background Image"
            />
            <h1 className="text-[4vw] max-sm:text-[8vw]">{props.title}</h1> 
            <p className="text-[2vw] max-sm:text-[4vw]">{props.text}</p>
            <div className=" inset-0 flex flex-col items-center justify-center text-center text-lg pb-10">
                <Link href={props.path} className='bg-[#CC4955] hover:bg-[#a9414a] text-[white] text-[1vw] max-sm:text-[2vw] rounded-md px-[5%] py-[0.3%]'>Start</Link> 
            </div>
        </div>
    );
}