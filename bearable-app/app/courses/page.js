import Link from "next/link";

export default function Courses() {
    return (
        <div>
            <h1> This is the courses page </h1>
            <Link href="/courses/linear-algebra"> 
                <h1> Click Here for Linear Algebra </h1>
            </Link>
            <Link href="/courses/test-course">
                <h1> Click here for the contentlayer test</h1>
            </Link>
       </div>
    );
};