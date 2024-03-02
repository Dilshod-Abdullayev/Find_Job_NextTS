type jobType = {
    id: number,
    img: string
    position: string,
    company: string,
    timeType: string,
    experiense: string,
    typeJob: string,
    techno: string[],
    location: string,
    salary: number
}
export const jobData: jobType[] = [
    {
        id: 1,
        img: 'img',
        position: 'frontend dasturchi',
        company: 'Najot Ta`lim',
        timeType: 'Part time',
        experiense: "1-4",
        typeJob: "office",
        techno: ['nodejs,mongodb,express'],
        location: 'tashkent',
        salary: 1200
    },
    {
        id: 2,
        img: 'img',
        position: 'Flutter',
        company: 'EPAM',
        timeType: 'Full time',
        experiense: "2-5",
        typeJob: "Remote",
        techno: ['Flutter,kotlin'],
        location: 'USA',
        salary: 1500
    }
]