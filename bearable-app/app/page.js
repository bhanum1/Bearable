import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
        <div className=' -z-50 absolute w-screen h-screen'>
          <Image
            src='/../public/Background.png'
            alt='Welcome to Bearable'
            fill={true}
            style={{objectFit: "cover"}}>
          </Image>
        </div>
        <div className='absolute'>
          <div className='text-center text-4xl px-5 mt-30'>
            <h1>Making First Year of Engineering<br></br>More Bearable</h1>
          </div>
          <div className=' text-center p-5'>
            <Link href='#' className='bg-[#CC4955] text-[white] rounded-md px-4 py-2'>View Courses</Link> 
          </div>
        </div>
      </div>

      <div>
        <h2>About Us</h2>
      </div>
    </main>
  )
}
