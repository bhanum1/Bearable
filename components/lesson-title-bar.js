import {format, parseISO } from 'date-fns'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthorCard } from "./author-card"

export default function TitleBar({ title, description, authors, date}) {
    return(
        <Card className="mb-10 bg-card  border-card-hover">
            <CardHeader className="border-b border-card-hover pb-1 font-Poppins">
                <CardTitle className="mt-2 scroll-m-20 text-4xl font-bold font-Poppins text-title tracking-tight before:content-none"> 
                    {title} 
                </CardTitle>
                <div className="flex justify-between items-center font-Poppins">
                    <div> <strong> Prepared by:</strong> {authors.map( (author, idx) => (
                        <AuthorCard key={idx} author={author} />
                    ))}
                    </div>
                    <div>
                        <time dateTime={date}>
                            <strong>{format(parseISO(date), 'LLLL dd, yyyy')}</strong>
                        </time>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="mt-6 font-Poppins">
                <p>{description}</p>
            </CardContent>
        </Card>
    )
}