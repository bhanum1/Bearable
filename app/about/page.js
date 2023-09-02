'use client'
import Image from 'next/image'
import {useState, useEffect, useRef} from "react"


export default function About() {
    return (
        <section className=" min-h-screen relative flex">
            <div className='flex flex-col'>
                <div className='h-[30vw]'>
                    <div className="flex absolute left-[30%] text-[8vw] text-[#442725] font-Poppins" style={{transform: 'translateY(70%)'}}>
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
                    <div className="bg-[#FEFDF3] rounded-lg pt-[1%] pb-[5%] left-[11%] w-[78%] flex flex-col self-center text-center justify-center">
                        <h1 className='font-bold text-[2vw] pt-5'>The Story of Bearnoulli</h1>
                        <div className='flex justify-evenly gap-10'>
                            <Image
                            src='/About-page/c-bear.svg'
                            className=''
                            style={{width: '20%', height: 'auto', transfrom: "translateX(100%)"}}
                            width={0}
                            height={0} 
                            quality={100}
                            alt="Background Image"
                            />

                            <Image
                            src='/About-page/c-bearbook.svg'
                            className=''
                            style={{width: '25%', height: 'auto' }}
                            width={0}
                            height={0} 
                            quality={100}
                            alt="Background Image"
                            />

                            <Image
                            src='/About-page/c-bearglass.svg'
                            className=''
                            style={{width: '40%', height: 'auto' }}
                            width={0}
                            height={0} 
                            quality={100}
                            alt="Background Image"
                            />
                        </div>
                    </div>


                    <div className="bg-[#FEFDF3] rounded-lg left-[11%] w-[78%] flex  self-center font-Poppins">
                            <Image
                            src='/About-page/mission.svg'
                            className=''
                            style={{width: '100%', height: 'auto', transfrom: "translateX(15%)"}}
                            width={0}
                            height={0} 
                            quality={100}
                            alt="Background Image"
                            />
                           <div className='absolute flex flex-col font-Poppins text-center pt-10 w-[60vw] left-[25%]'>
                            <h1 className='text-[2vw]'>Learning Made Bearable</h1>
                            <p className='text-[1vw]'>our mission is to ghjkgdhjakhgjklahgjkHF HDSJKFHSJLKFHLK HDSJKAFHSDJLKFHSJDKHFSJKDHF HFJDKSAHFJK HJKSDHFJKSLA HJKSDAHFJKLAS H JSDAKHFJKLDASHFJSDK HJASKDLFHJSKLAH HJKLASHDJKLF HJKSDAHFJKASL HJSADKHLJK SDHJAKLHFJKL SDHJAKLFHLKJA FJSHDAKHF HJKDSA</p>
                           </div>
                    </div>


                    <div className="bg-[#FEFDF3] rounded-lg left-[11%] w-[78%] flex flex-col self-center text-center font-Poppins">
                        <h1 className='text-[2vw] pt-10'>The Creators of Bearable</h1>
                        <div className='flex flex-col gap-8'>
                            <div className='flex justify-evenly gap-10 px-14 pt-10'>
                                <div className='bg-[#5893B6] flex justify-center w-[20%]'>
                                    <Image
                                    src='/About-page/man.svg'
                                    className=''
                                    style={{width: '20%', height: 'auto'}}
                                    width={0}
                                    height={0} 
                                    quality={100}
                                    alt="Background Image"
                                    />
                                </div>

                                <div className='bg-[#BC454F] flex justify-center w-[20%]'>
                                    <Image
                                    src='/About-page/man-2.svg'
                                    className=''
                                    style={{width: '18%', height: 'auto'}}
                                    width={0}
                                    height={0} 
                                    quality={100}
                                    alt="Background Image"
                                    />
                                </div>

                                <div className='bg-[#57702D] flex justify-center w-[20%]'>
                                    <Image
                                    src='/About-page/woman.svg'
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
                                <div className='bg-[#5893B6] flex justify-center w-[20%]'>
                                    <Image
                                    src='/About-page/man-4.svg'
                                    className=''
                                    style={{width: '20%', height: 'auto'}}
                                    width={0}
                                    height={0} 
                                    quality={100}
                                    alt="Background Image"
                                    />
                                </div>

                                <div className='bg-[#BC454F] flex justify-center w-[20%]'>
                                    <Image
                                    src='/About-page/man-3.svg'
                                    className=''
                                    style={{width: '18%', height: 'auto'}}
                                    width={0}
                                    height={0} 
                                    quality={100}
                                    alt="Background Image"
                                    />
                                </div>

                                <div className='bg-[#57702D] flex justify-center w-[20%]'>
                                    <Image
                                    src='/About-page/peanut.svg'
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


                    <div className="bg-[#FEFDF3] rounded-lg left-[11%] w-[78%] pt-10 flex flex-col gap-5 self-center text-center font-Poppins">
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