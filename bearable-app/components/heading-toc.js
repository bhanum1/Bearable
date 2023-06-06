export default function HeadingToc({headings}) {
    return (
        <>
        <h4 className="text-xl border-b-2 border-black"> Lesson Outline </h4>
        <div className="pl-4">
          {headings.length > 0 ? (
            <ul>
              {headings.map((heading) => (
                <li key={heading.text} className="hover:text-[#bb434e] hover:underline hover:underline-offset-4 my-1.5">
                  <a href={`#${heading.slug}`}>{heading.text}</a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        </>
      );
    };