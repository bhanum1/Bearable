'use client'
import Image from "next/image"
import {useState, useEffect} from "react"

import Inner from '@/components/inner-text'


export default function Courses() {
    //Animations
    const [load, setLoad] = useState(0)
     useEffect(()=>{
        setTimeout(()=>{
            setLoad(1)
        }, 50)
        setTimeout(()=>{
            setLoad(2)
        }, 800)
     }, [])


    const classes = [["absolute right-[-100%] ease-in duration-500", "absolute right-0 ease-in duration-500",  "absolute right-0 ease-in duration-500"],
                     ["absolute left-[-100%] ease-in duration-500", "absolute left-0 ease-in duration-500", "absolute left-0 ease-in duration-500"],
                     ["absolute right-[-100%] bottom-0 ease-in duration-500", "absolute right-0 bottom-0 ease-in duration-500", "absolute right-0 bottom-0 ease-in duration-500"],
                     ["absolute left-[-100%] bottom-0 ease-in duration-500", "absolute left-0 bottom-[-0.1%] z-50 ease-in duration-500", "absolute left-0 bottom-[-0.1%] ease-in duration-500"],
                     ["absolute right-[-100%] ease-in duration-500", "absolute right-[13.5%] hover:animate-bounce ease-in duration-500", "absolute right-[13.5%] hover:animate-bounce ease-in duration-500"],
                     ["absolute left-[-100%] text-[10vw] text-[#442725] font-Poppins dark:text-white", "absolute left-[1.4%] text-[10vw] text-[#442725] font-Poppins ease-in duration-500 dark:text-white", "absolute left-[1.4%] text-[10vw] text-[#442725] dark:text-white font-Poppins"]]
    
    return (
            <section className=" min-h-screen ">
                {/* Background */}
                <div className="flex flex-col gap-">

                    {/* Top */}
                    <div className={`flex h-[21vw]`}>
                        <div className={classes[5][load]} style={{transform: 'translateY(20%)'}}>
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
                        src='/Courses-page/sun.svg'
                        className={classes[4][load]}
                        style={{width: '5.4%', height: 'auto', transform: 'translateY(25%)'}}
                        width={0}
                        height={0}
                        quality={100}
                        alt="Background Image"
                        />

                    </div>
                    
                    {/* Courses Box */}
                    <center>
                        <div className="bg-card dark:bg-[#2C3850] rounded-lg px-[20%] pt-[5%] pb-[5%] mb-[5%] w-[90%] flex flex-col justify-center text-center gap-[10vw] font-Poppins max-sm:px-[3%]">
                            <Inner source='matrix-icon' title="Linear Algebra" text="THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA "></Inner>
                        </div>
                    </center>

                    {/* Bottom Svgs */}
                    <div className="flex">
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
                    </div>
                </div> 
            </section>
    );
};