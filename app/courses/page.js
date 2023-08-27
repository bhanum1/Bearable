'use client'
import Image from "next/image"
import Link from "next/link"
import {useState, useEffect, useRef} from "react"


export default function Courses() {
    //Animations
    const [load, setLoad] = useState(0)
     useEffect(()=>{
        setTimeout(()=>{
            setLoad(1)
        }, 200)
     }, [])


    //Gets the Y position of the long-tree svg to place the text's div slighty below it at all times
     const elementRef = useRef(null);
     const [position, setPosition] = useState({ y: 0 });
   
     useEffect(() => {
       function handleResize() {
         const y =elementRef.current.getBoundingClientRect().bottom - 50;
         setPosition({y});
       }
   
       handleResize()
       window.addEventListener("resize", handleResize);
       return () => window.removeEventListener("resize", handleResize);
     }, [elementRef]);



    //Controlling the text's div to stay in the right position regarless of scroll 
    useEffect(() => {
        function updateImagePosition() {
            const scrollY = window.scrollY
        }
        
        window.addEventListener('scroll', updateImagePosition);
        updateImagePosition();
    }, []) 


    const classes = [["absolute right-[-100%] ease-in duration-500", "absolute right-0 ease-in duration-500"],
                     ["absolute left-[-100%] ease-in duration-500", "absolute left-0 ease-in duration-500"],
                     ["absolute right-[-100%] bottom-0 ease-in duration-500", "absolute right-0 bottom-0 ease-in duration-500"],
                     ["absolute left-[-100%] bottom-0 ease-in duration-500", "absolute left-0 bottom-0 ease-in duration-500"],
                     ["absolute bottom-[-100%] opacity-0 ease-in duration-500", "absolute bottom-[6%] opacity-100 ease-in duration-500"],
                     ["absolute right-[-100%] ease-in duration-500", "absolute right-[13.5%] hover:animate-bounce ease-in duration-500"],
                     ["absolute left-[-100%] text-[10vw] text-[#442725] font-Poppins ease-in duration-500", "absolute left-[1.4%] text-[10vw] text-[#442725] font-Poppins ease-in duration-500"]]
    
    return (
            <section className=" min-h-screen relative">
                {/* Background */}
                <div className="flex ">

                <div className={classes[6][load]} style={{transform: 'translateY(20%)'}}>
                    Courses
                </div>

                <Image
                src='/Courses-page/long-tree.svg'
                className={classes[0][load]}
                style={{transform: 'translateY(30%)',  width: '72%', height: 'auto' }}
                width={0}
                height={0}
                quality={100}
                alt="Background Image"
                ref={elementRef}
                />

                <Image
                src='/Courses-page/clouds.svg'
                className={classes[1][load]}
                style={{transform: 'translateY(10%)', width: '81%', height: 'auto'}}
                width={0}
                height={0} 
                quality={100}
                alt="Background Image"
                />

                <Image
                src='/Courses-page/tree-right.svg'
                className={classes[2][load]}
                style={{width: '22%', height: 'auto' }}
                width={0}
                height={0}
                quality={100}
                alt="Background Image"
                />

                <Image
                src='/Courses-page/tree-left.svg'
                className={classes[3][load]}
                style={{width: '16%', height: 'auto' }}
                width={0}
                height={0}
                quality={100}
                alt="Background Image"
                />

                <div className={`bg-[#FDFEF3] rounded-lg px-[20%] pt-[5%] absolute left-[11%] w-[78%] h-[50%] flex flex-col text-center overflow-hidden font-Poppins`}
                style={{transform: "translateY("+(position.y+scrollY)+"px)"}}>
                    <h1 className="text-[4vw] ">Linear Algebra </h1> 
                    <p className="text-[1vw]">THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA </p>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-lg" style={{ transform: 'translateY(30%)' }}>
                        <Link href='/courses/linear-algebra' className='bg-[#CC4955] hover:bg-[#a9414a] text-[white] text-[1vw] rounded-md px-[2%] py-[0.3%]'>Start</Link> 
                    </div>
                </div>

                <Image
                src='/Courses-page/bear.svg'
                className={classes[4][load]}
                style={{transform: 'translateX(50%)', width: '12.5%', height: 'auto'}}
                width={0}
                height={0}
                quality={100}
                alt="Background Image"
                />

                <Image
                src='/Courses-page/sun.svg'
                className={classes[5][load]}
                style={{width: '5.4%', height: 'auto', transform: 'translateY(25%)'}}
                width={0}
                height={0}
                quality={100}
                alt="Background Image"
                />
                </div>
                
            </section>
    );
};