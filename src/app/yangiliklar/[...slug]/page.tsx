"use client"
import { news } from '@/data/data';
type newsType = {
    id: number,
    img: string,
    data: string,
    title: string,
    description: string,
}
export default function page({ params }) {
    const newId: newsType = news[params.slug[0]]
    return (
        <div>
            {
                <div>
                    <h1>{newId.title}</h1>
                    <h1>{newId.description}</h1>
                </div>
            }
        </div>
    )
}