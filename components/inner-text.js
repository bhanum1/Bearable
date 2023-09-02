import Link from "next/link"



export default function Inner(props){
    return(
        <div className="flex flex-col gap-3">
            <h1 className="text-[4vw] ">{props.title}</h1> 
            <p className="text-[2vw]">{props.text}</p>
            <div className=" inset-0 flex flex-col items-center justify-center text-center text-lg">
                <Link href='/courses/linear-algebra' className='bg-[#CC4955] hover:bg-[#a9414a] text-[white] text-[1vw] rounded-md px-[5%] py-[0.3%]'>Start</Link> 
            </div>
        </div>
    );
}