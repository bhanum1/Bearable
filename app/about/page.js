'use client'
import Image from 'next/image'
import {useState, useEffect, useRef} from "react"


export default function About() {
    return (
        <section className=" min-h-screen relative flex">
            <div className='flex flex-col'>
                <div className='h-[30vw]'>
                    <div className="flex absolute left-[30%] text-[8vw] text-[#442725] dark:text-white font-Poppins" style={{transform: 'translateY(70%)'}}>
                        About Us
                    </div>
                
                    <Image
                    src='/About-page/left-cloud.svg'
                    className='absolute left-0'
                    style={{transform: 'translateY(0%)',  width: '72%', height: 'auto' }}
                    width={0}
                    height={0}
                    quality={100}
                    alt="Background Image"
                    />

                    <Image
                    src='/About-page/sun.svg'
                    className='absolute'
                    style={{transform: 'translateY(1%) translateX(1030%)', width: '7%', height: 'auto'}}
                    width={0}
                    height={0} 
                    quality={100}
                    alt="Background Image"
                    />

                    <Image
                    src='/About-page/right-cloud.svg'
                    className='absolute right-0'
                    style={{transform: "translateY(105%)", width: '52%', height: 'auto' }}
                    width={0}
                    height={0}
                    quality={100}
                    alt="Background Image"
                    />

                    <Image
                    src='/About-page/long-trees.svg'
                    className='absolute'
                    style={{transform: "translateY(0%)", width: '100%', height: 'auto' }}
                    width={0}
                    height={0}
                    quality={100}
                    alt="Background Image"
                    />
                </div>

                {/* main page */}
                <div className='flex flex-col gap-10 w-screen h-[50%] mb-[5%]'>
                    <div className="bg-[#FEFDF3] dark:bg-[#2C3850] rounded-lg pt-[1%] pb-[5%] w-[90%] flex flex-col self-center text-center justify-center">
                        <h1 className='font-bold font-Poppins text-[3vw] pt-5'>The Story of Bearnoulli</h1>
                        <div className='flex justify-evenly gap-10'>
                            <Image
                            src='/About-page/comic.svg'
                            className=''
                            style={{width: '90%', height: 'auto'}}
                            width={0}
                            height={0} 
                            quality={100}
                            alt="Background Image"
                            />
                        </div>
                    </div>


                    <div className="bg-[#FEFDF3] dark:bg-[#2C3850] rounded-lg w-[90%] flex  self-center font-Poppins">
                            <Image
                            src='/About-page/mission.svg'
                            className=''
                            style={{width: '100%', height: 'auto', transfrom: "translateX(15%)"}}
                            width={0}
                            height={0} 
                            quality={100}
                            alt="Background Image"
                            />
                           <div className='absolute flex flex-col font-Poppins text-center pt-10 w-[60vw] left-[25%] max-sm:pt-3'>
                            <h1 className='text-[2vw] font-bold max-sm:text-[4vw]'>Learning Made Bearable</h1>
                            <p className='text-[1.7vw] max-sm:text-[1.7vw]'>
                                Our mission is to make learning complex concepts appart of most engineering curriculums easier. We want to ensure students are assured in the reason they learn certain material and are able to look to the future to where it can applied.
                            </p>
                           </div>
                    </div>


                    <div className="bg-[#FEFDF3] dark:bg-[#2C3850] rounded-lg w-[90%] flex flex-col self-center text-center font-Poppins">
                        <h1 className='text-[2vw] max-sm:text-[4vw] font-bold pt-10'>The Creators of Bearable</h1>
                        <div className='flex flex-col gap-8'>
                            <div className='flex justify-evenly gap-10 px-14 pt-10'>
                                <div className='bg-[#5893B6] flex justify-center w-[20%] max-sm:w-[30%] pb-[5%] pt-[2%]'>
                                    <Image
                                    src='/About-page/Photo.svg'
                                    className='max-sm:hidden'
                                    style={{width: '18%', height: 'auto'}}
                                    width={0}
                                    height={0} 
                                    quality={100}
                                    alt="Background Image"
                                    />

                                    <Image
                                    src='/About-page/Photo.svg'
                                    className='sm:hidden'
                                    style={{width: '18%', height: 'auto'}}
                                    width={0}
                                    height={0} 
                                    quality={100}
                                    alt="Background Image"
                                    />
                                </div>

                                <div className='bg-[#BC454F] flex justify-center w-[20%] max-sm:w-[30%] pb-[5%] pt-[1.5%]'>
                                    <Image
                                    src='/About-page/Photo.svg'
                                    className=''
                                    style={{width: '18%', height: 'auto'}}
                                    width={0}
                                    height={0} 
                                    quality={100}
                                    alt="Background Image"
                                    />
                                </div>

                                <div className='bg-[#57702D] flex justify-center w-[20%] max-sm:w-[30%] pb-[5%] pt-[1.5%]'>
                                    <Image
                                    src='/About-page/Photo.svg'
                                    className=''
                                    style={{width: '18%', height: 'auto'}}
                                    width={0}
                                    height={0} 
                                    quality={100}
                                    alt="Background Image"
                                    />
                                </div>
                            </div>

                            <div className='flex justify-evenly gap-10 px-14 pb-10'>
                                <div className='bg-[#5893B6] flex justify-center w-[20%] max-sm:w-[30%] pb-[5%] pt-[1.5%]'>
                                    <Image
                                    src='/About-page/Photo.svg'
                                    className=''
                                    style={{width: '20%', height: 'auto'}}
                                    width={0}
                                    height={0} 
                                    quality={100}
                                    alt="Background Image"
                                    />
                                </div>

                                <div className='bg-[#BC454F] flex justify-center w-[20%] max-sm:w-[30%] pb-[5%] pt-[1.5%]'>
                                    <Image
                                    src='/About-page/Photo.svg'
                                    className=''
                                    style={{width: '18%', height: 'auto'}}
                                    width={0}
                                    height={0} 
                                    quality={100}
                                    alt="Background Image"
                                    />
                                </div>

                                <div className='bg-[#57702D] flex justify-center w-[20%] max-sm:w-[30%] pb-[5%] pt-[1.5%]'>
                                    <Image
                                    src='/About-page/Photo.svg'
                                    className=''
                                    style={{width: '18%', height: 'auto'}}
                                    width={0}
                                    height={0} 
                                    quality={100}
                                    alt="Background Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-[#FEFDF3] dark:bg-[#2C3850] rounded-lg w-[90%] pt-10 flex flex-col gap-5 self-center text-center font-Poppins">
                            <h1 className='text-[3vw]'>Join Our Community!</h1>
                            
                            <Image
                            src='/About-page/community.svg'
                            className='bottom-5'
                            style={{width: '100%', height: 'auto'}}
                            width={0}
                            height={0} 
                            quality={100}
                            alt="Background Image"
                            />
                    </div>

                </div>
            </div>

        </section>
    );
};