import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div> 
      {/* This is the section with your background image */}
      <section className=" min-h-screen relative"> 
        <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/bear1.svg"
              className="object-cover"
              fill={true}
              style = {
                {objectFit: "fill" }
              }
            // layout="fill"
            // objectFit="cover"
              quality={100}
              alt="Background Image"
            />
        </div>

        {/* Your overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ transform: 'translateY(-21.875%)' }}>
          <Image
            src="/sun.svg"
            width={180} // specify the width
            height={180} // specify the height
            alt="Image above the content"
          />
          <div className='text-center text-4xl pt-12 pb-5 font-Ruda'>
            <h1>Making First Year of Engineering<br></br>More Bearable</h1>
          </div>
          <div className=' text-center text-lg'>
            <Link href='/courses' className='bg-[#CC4955] text-[white] rounded-md px-5 py-3'>View Courses</Link> 
          </div>
        </div>
      </section>

      {/* This is the section after the image */}
    </div>

  )
}
