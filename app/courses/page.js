'use client'
import Image from "next/image"
import Link from "next/link"
import React, {useState, useEffect} from 'react'

export default function Courses() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}
  
  	useEffect(() => {
    		const updateDimension = () => {
      			setScreenSize(getCurrentDimension())
    		}
    		window.addEventListener('resize', updateDimension);
    
		
    		return(() => {
        		window.removeEventListener('resize', updateDimension);
    		})
  	}, [screenSize])
    

    
    return (
        <div>
            <section className=" min-h-screen relative">
                {/* Background */}
                <div className="flex ">

                <div className="absolute left-[1.4%] top-[5%] text-[10vw] text-[#442725] font-Poppins">
                    <h1>Courses</h1>
                </div>

                <Image
                src='/Courses-page/long-tree.svg'
                className="absolute right-0"
                style={{transform: 'translateY(30%)'}}
                width={window.innerWidth * 0.72}
                height={196}
                quality={100}
                alt="Background Image"
                />
{/* 
                <Image
                src='/Courses-page/long-tree.svg'
                className="fixed right-0"
                style={{transform: ' translateY(40%)'}}
                width={923}
                height={196}
                quality={100}
                alt="Background Image"
                /> */}
            
            
                <Image
                src='/Courses-page/clouds.svg'
                className="absolute left-0"
                style={{transform: 'translateY(10%)'}}
                width={window.innerWidth * 0.81}
                height={230} 
                quality={100}
                alt="Background Image"
                />

                {/* <Image
                src='/Courses-page/clouds.svg'
                className="fixed left-0"
                // style={{transform: }}
                width={1057}
                height={230} 
                quality={100}
                alt="Background Image"
                /> */}

                <Image
                src='/Courses-page/tree-right.svg'
                className="absolute right-0 bottom-0"
                width={window.innerWidth * 0.22}
                height={323}
                quality={100}
                alt="Background Image"
                />

                {/* <Image
                src='/Courses-page/tree-right.svg'
                className="fixed right-0"
                style={{transform: 'translateY(80%)'}}
                width={284}
                height={323}
                quality={100}
                alt="Background Image"
                /> */}


                <Image
                src='/Courses-page/tree-left.svg'
                className="absolute left-0 bottom-0"
                width={window.innerWidth * 0.16}
                height={341}
                quality={100}
                alt="Background Image"
                />

                {/* <Image
                src='/Courses-page/tree-left.svg'
                className="fixed left-0"
                style={{transform: ' translateY(80%)'}}
                width={225}
                height={341}
                quality={100}
                alt="Background Image"
                /> */}

                <div className="bg-[#FDFEF3] rounded-lg px-[20%] pt-[5%] absolute left-[11%] bottom-[8%] w-[78%] h-[50%] 
                flex flex-col text-center overflow-hidden font-Poppins">
                    <h1 className="text-[4vw] ">Linear Algebra</h1> 
                    <p className="text-[1vw]">THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA THIS IS LINEAR ALGEBRA </p>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-lg" style={{ transform: 'translateY(30%)' }}>
                        <Link href='/courses/linear-algebra' className='bg-[#CC4955] text-[white] text-[1vw] rounded-md px-[2%] py-[0.3%]'>Start</Link> 
                    </div>
                </div>



                {/* <Image
                src='/Courses-page/bear.svg'
                className="hover:object-scale-down"
                style={{transform: 'translateX(50%) translateY(-485%)'}}
                width={193}
                height={219}
                quality={100}
                alt="Background Image"
                /> */}


                <Image
                src='/Courses-page/bear.svg'
                className="absolute bottom-[6%]"
                style={{transform: 'translateX(50%)'}}
                width={window.innerWidth * 0.125}
                height={219}
                quality={100}
                alt="Background Image"
                />

                <Image
                src='/Courses-page/sun.svg'
                className="absolute top-[5%] right-[13.5%]"
                width={window.innerWidth * 0.054}
                height={219}
                quality={100}
                alt="Background Image"
                />
                </div>
                
            </section>


       </div>
    );
};