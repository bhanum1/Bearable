import { cn } from "@/lib/utils";

export function HeadingItem({ heading }){
  var classAddition = 0
  if(heading.number === 3){
    classAddition = "ml-[30px]"
  } else if(heading.number === 4){
    classAddition = "ml-[50px]"
  } else if(heading.number === 5) {
    classAddition = "ml-[70px]"
  } else if(heading.number === 6){
    classAddition = "ml-[90px]"
  }

  return(
    <li key={heading.text} className={cn("hover:text-[#bb434e] hover:underline hover:underline-offset-4 my-1.5 list-disc", classAddition)}>
      <a href={`#${heading.slug}`}>{heading.text}</a>
    </li>
  )
}


export default function HeadingToc({headings}) {
    return (
        <div className="fixed hidden lg:block right-[70px] 2xl:right-[200px] 2xl:w-[350px] w-[300px] h-full mt-5">
          <h4 className="text-xl font-bold border-b-2 border-title text-title"> Lesson Outline </h4>
          <div className="pl-5">
            {headings.length > 0 ? (
              
              <ul>
                {headings.map((heading) => (
                  <HeadingItem key={heading} heading={heading}/>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      );
    };