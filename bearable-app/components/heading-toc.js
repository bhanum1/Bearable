export default function HeadingToc({headings}) {
    return (
        <>
        <h4 className="text-xl underline underline-offset-4"> Lesson Outline </h4>
        <div className="pl-4 border-l-2 border-black">
          {headings.length > 0 ? (
            <ul>
              {headings.map((heading) => (
                <li key={heading.text} className="hover:text-[#bb434e] hover:underline hover:underline-offset-4">
                  <a href={`#${heading.slug}`}>{heading.text}</a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        </>
      );
    };