import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div> 
      {/* This is the section with your background image */}
      <section className=" min-h-screen relative"> 
        <div className="absolute bottom-0 max-sm:bottom-10 w-[100vw]">
            <Image
              src="/home-page.svg"
              className="object-cover"
              height={0}
              width={0}
              style = {
                {width: '100%', height:'auto'}
              }
              quality={100}
              alt="Background Image"
            />
        </div>


        <div className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ transform: 'translateY(-21.875%)' }}>
          <Image
            src="/sun.svg"
            className='max-sm:hidden'
            width={180} // specify the width
            height={180} // specify the height
            alt="Image above the content"
          />

          <Image
            src="/sun.svg"
            className='sm:hidden'
            width={0}
            height={0} 
            style={{width:'20%', height:'auto', transform: 'translateY(20%)'}}
            alt="Image above the content"
          />

        <div className='max-sm:hidden'>
          <div className='text-center text-4xl pt-12 pb-5 font-Ruda'>
            <h1>Making First Year of Engineering<br></br>More Bearable</h1>
          </div>
          <div className=' text-center text-lg'>
            <Link href='/courses' className='bg-[#CC4955] text-[white] rounded-md px-5 py-3'>View Courses</Link> 
          </div>
        </div>

        <div className='sm:hidden' style={{transform:'translateY(8%)'}}>
          <div className='text-center text-4xl pt-12 pb-5 font-Ruda'>
            <h1>Making First Year of Engineering<br></br>More Bearable</h1>
          </div>
          <div className=' text-center text-lg'>
            <Link href='/courses' className='bg-[#CC4955] text-[white] rounded-md px-5 py-3'>View Courses</Link> 
          </div>
        </div>

        </div>
      </section>

      {/* This is the section after the image */}
    </div>

  )
}
