import Image from 'next/image'
import Link from 'next/link'
import {Icons} from '@/components/icons.js'
import { siteConfig } from "@/config/site"

export default function Footerlessons(props) {
    return(
        <div className="bottom-0 bg-background" id="footer">
           
            <div className='flex justify-center' style={{transform: 'translateX(0%)'}}>
                <div className='flex flex-col w-[40%] mb-[8%]' style={{transform: 'translateY(50%) translateX(10%)'}}>
                    <div className='flex gap-[3%]'>
                        <Icons.foot className='w-[12%] h-auto' ></Icons.foot>
                        <h1 className='font-Habibi text-[3vw]' style={{transform: 'translateY(3%)'}}>{siteConfig.name}</h1>
                    </div>
                    
                    <div>
                        <h1 className='font-Poppins text-[2.5vw]' style={{transform: 'translateY(20%)'}}>Learning Made Bearable</h1>
                    </div>
                </div>       

                <div className='flex flex-col gap-[20%]' style={{transform: 'translateY(15%)'}} >
                    <div className='flex gap-[20%] w-[50%] '>
                        <Link href='/' className='text-[2vw] z-50'>Home</Link>
                        <Link href='/about' className='text-[2vw] z-40'>About</Link>
                        <Link href='/courses' className='text-[2vw] z-30 '>Courses</Link>
                    </div>

                    <div className='flex gap-[10%] '> 
                        <button className='' style={{width: '10%', height: 'auto'}} >
                            <Image
                            src="/sun.svg"
                            className=''
                            style={{width: '100%', height: 'auto'}}
                            width={0}
                            height={0} 
                            quality={100}
                            alt="Background Image"
                            />
                        </button>

                        <button className='' style={{width: '10%', height: 'auto'}} >
                            <Image
                            src="/sun.svg"
                            className=''
                            style={{width: '100%', height: 'auto'}}
                            width={0}
                            height={0} 
                            quality={100}
                            alt="Background Image"
                            />
                        </button>

                        <button className='' style={{width: '10%', height: 'auto'}} >
                            <Image
                            src="/sun.svg"
                            className=''
                            style={{width: '100%', height: 'auto'}}
                            width={0}
                            height={0} 
                            quality={100}
                            alt="Background Image"
                            />
                        </button>

                        <button className='' style={{width: '10%', height: 'auto'}} >
                            <Image
                            src="/sun.svg"
                            className=''
                            style={{width: '100%', height: 'auto'}}
                            width={0}
                            height={0} 
                            quality={100}
                            alt="Background Image"
                            />
                        </button>
                    </div> 
                </div>
            </div>    
        </div>
    )
}