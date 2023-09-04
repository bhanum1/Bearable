import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return(
        <div className="bottom-0 w-full bg-background" id="footer">
            
            <div>
                    <Image
                src="/footer-trans.svg"
                className=''
                style={{width: '100%', height: 'auto'}}
                width={0}
                height={0} 
                quality={100}
                alt="Background Image"
                />
            </div>
            <div className="">
                <h1 className='absolute font-Poppins text-[#ECE9D6] text-[2.5vw] pl-[3%] pt-[1%]'>Learning Made Bearable</h1>
                <div className='flex flex-col gap-20 ' style={{transform: 'translateX(55%)'}}>
                    <Link href='/' className='absolute text-[#ECE9D6] text-[1.7vw] pt-[1%] z-50'>Home</Link>
                    <Link href='/about' className='absolute text-[#ECE9D6] text-[1.7vw] pt-[4%] z-40'>About</Link>
                    <Link href='/courses' className='absolute text-[#ECE9D6] text-[1.7vw] pt-[7%] z-30' style={{transform:'translateX(-13%)'}}>Courses</Link>
                </div>
                <Image
                src="/Footer.svg"
                className=''
                style={{width: '100%', height: 'auto'}}
                width={0}
                height={0} 
                quality={100}
                alt="Background Image"
                />

            </div>
        </div>
    )
}