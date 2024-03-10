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
    salary: number,
    intern: boolean,
    category: string,
}
type newsType = {
    id: number,
    img: string,
    data: string,
    title: string,
    description: string,
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
        salary: 1200,
        intern: true,
        category: 'fulltime',
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
        salary: 1500,
        intern: false,
        category: 'contract',
    },
    {
        id: 3,
        img: 'img',
        position: 'Back-end Developer',
        company: 'Tech Solutions',
        timeType: 'Full time',
        experiense: "3-7",
        typeJob: "Remote",
        techno: ['Java,Spring Boot'],
        location: 'Canada',
        salary: 2000,
        intern: false,
        category: 'fulltime',

    },
    {
        id: 4,
        img: 'img',
        position: 'Mobile App Developer',
        company: 'Innovate Labs',
        timeType: 'Part time',
        experiense: "2-6",
        typeJob: "office",
        techno: ['React Native,JavaScript'],
        location: 'Berlin',
        salary: 1800,
        intern: true,
        category: 'contract',

    },
    {
        id: 5,
        img: 'img',
        position: 'Data Scientist',
        company: 'Data Insights',
        timeType: 'Full time',
        experiense: "5-10",
        typeJob: "Remote",
        techno: ['Python,Machine Learning'],
        location: 'Singapore',
        salary: 2500,
        intern: false,
        category: 'partTime',

    },
    {
        id: 6,
        img: 'img',
        position: 'UI/UX Designer',
        company: 'Creative Minds',
        timeType: 'Part time',
        experiense: "2-5",
        typeJob: "office",
        techno: ['Adobe XD,Figma'],
        location: 'Barcelona',
        salary: 1700,
        intern: true,
        category: 'kelishuv',

    },
    {
        id: 7,
        img: 'img',
        position: 'Network Engineer',
        company: 'Connect Tech',
        timeType: 'Full time',
        experiense: "4-8",
        typeJob: "Remote",
        techno: ['Cisco,CCNA'],
        location: 'Australia',
        salary: 2200,
        intern: false,
        category: 'partTime',

    },
    {
        id: 8,
        img: 'img',
        position: 'DevOps Engineer',
        company: 'Cloud Solutions',
        timeType: 'Part time',
        experiense: "3-6",
        typeJob: "office",
        techno: ['Docker,Kubernetes'],
        location: 'Tokyo',
        salary: 1900,
        intern: true,
        category: 'contract',

    },
    {
        id: 9,
        img: 'img',
        position: 'Marketing Specialist',
        company: 'Digital Marketing Agency',
        timeType: 'Full time',
        experiense: "2-5",
        typeJob: "Remote",
        techno: ['Social Media,SEO'],
        location: 'London',
        salary: 1800,
        intern: false,
        category: 'contract',

    },
    {
        id: 10,
        img: 'img',
        position: 'Quality Assurance Tester',
        company: 'Testing Solutions',
        timeType: 'Part time',
        experiense: "1-3",
        typeJob: "office",
        techno: ['Selenium,JIRA'],
        location: 'New York',
        salary: 1600,
        intern: true,
        category: 'contract',

    },
    {
        id: 11,
        img: 'img',
        position: 'AI/ML Engineer',
        company: 'Innovate AI',
        timeType: 'Full time',
        experiense: "4-7",
        typeJob: "Remote",
        techno: ['TensorFlow,PyTorch'],
        location: 'San Francisco',
        salary: 2300,
        intern: false,
        category: 'kelishuv',

    },
    {
        id: 12,
        img: 'img',
        position: 'Cybersecurity Analyst',
        company: 'Secure Systems',
        timeType: 'Part time',
        experiense: "3-6",
        typeJob: "office",
        techno: ['Ethical Hacking,Firewall'],
        location: 'Dubai',
        salary: 2000,
        intern: true,
        category: 'contract',

    },
    {
        id: 13,
        img: 'img',
        position: 'Content Writer',
        company: 'Creative Content',
        timeType: 'Full time',
        experiense: "2-4",
        typeJob: "Remote",
        techno: ['Content Creation,SEO'],
        location: 'Paris',
        salary: 1700,
        intern: false,
        category: 'partTime',
    },
    {
        id: 14,
        img: 'img',
        position: 'Game Developer',
        company: 'Gaming Studios',
        timeType: 'Part time',
        experiense: "3-5",
        typeJob: "office",
        techno: ['Unity,C#'],
        location: 'Los Angeles',
        salary: 1900,
        intern: true,
        category: 'kelishuv',
    },
    {
        id: 15,
        img: 'img',
        position: 'Database Administrator',
        company: 'Data Management Solutions',
        timeType: 'Full time',
        experiense: "4-8",
        typeJob: "Remote",
        techno: ['SQL,Oracle'],
        location: '',
        salary: 1200,
        intern: false,
        category: 'contract',
    }
]
export const news: newsType[] = [
    {
        id: 1,
        img: 'https://thg.uz/uploads/POST/amazon.png',
        data: '06.03.2024',
        title: "Xorazmdagi IT maktablar",
        description: 'Rossiya Tashqi ishlar vazirligi matbuot kotibi Mariya Zaxarova Rossiya hech kimga, shu jumladan NATOga ham hujum qilishni rejalashtirmayotganini, mamlakatda bunday, rejalar hech qachon bo‘lmaganini xabar berdi. Rossiya, hujum qilish, to‘g‘ridan-to‘g‘ri yoki bilvosita tajovuz qilish, NATO, Vashington, Ukraina yoki kim bilan bo‘lishidan qat’i nazar, hech kim bilan urushga kirish niyati yo‘q.'
    },
    {
        id: 2,
        img: 'data:image/jpeg;base64,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',
        data: '05.03.2024',
        title: "Discovery of New Species in Amazon Rainforest",
        description: 'Scientists have announced the discovery of a new species in the heart of the Amazon rainforest. The newfound creature, a vibrant bird species with unique plumage, adds to the incredible biodiversity of this ecologically crucial region.'
    },
    {
        id: 3,
        img: 'https://study.com/cimages/videopreview/videopreview-full/u4izilpv7l.jpg',
        data: '04.03.2024',
        title: "SpaceX Launches Mission to Mars",
        description: 'SpaceX has successfully launched its mission to Mars, marking a significant milestone in space exploration. The spacecraft carries advanced equipment designed to study the Martian surface and search for signs of past life.'
    },
    {
        id: 4,
        img: 'data:image/jpeg;base64,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',
        data: '03.03.2024',
        title: "Advancements in Quantum Computing",
        description: 'Researchers have achieved groundbreaking advancements in quantum computing, bringing us closer to unlocking the full potential of this revolutionary technology. The latest breakthroughs promise to redefine computing as we know it.'
    },
    {
        id: 5,
        img: 'image_url_5.jpg',
        data: '02.03.2024',
        title: "Renewable Energy Surpasses Fossil Fuels",
        description: 'Renewable energy sources have surpassed fossil fuels in global energy production for the first time in history. This significant milestone signals a positive shift towards a more sustainable and environmentally friendly energy landscape.'
    },
    {
        id: 6,
        img: 'image_url_20.jpg',
        data: '01.03.2024',
        title: "Breakthrough in Renewable Energy Technology",
        description: 'Researchers have achieved a major breakthrough in renewable energy technology, paving the way for more efficient and sustainable power sources. The new technology promises to revolutionize the way we harness and utilize clean energy.'
    },
    {
        id: 7,
        img: 'image_url_21.jpg',
        data: '28.02.2024',
        title: "Space Exploration Milestone",
        description: 'Astronomers have reached a significant milestone in space exploration, uncovering new celestial phenomena. The latest observations from space telescopes provide valuable insights into the mysteries of our vast universe.'
    },
    {
        id: 8,
        img: 'image_url_30.jpg',
        data: '15.02.2024',
        title: "Advancements in Medical Research",
        description: 'Groundbreaking developments in medical research are on the horizon, offering hope for improved treatments and cures. Scientists are making strides in understanding complex diseases, bringing us closer to a healthier future.'
    },
    {
        id: 9,
        img: 'image_url_20.jpg',
        data: '11.02.2024',
        title: "Breakthrough in Cancer Treatment",
        description: 'Scientists have achieved a major breakthrough in cancer treatment, offering new hope to patients worldwide. The innovative therapy targets cancer cells with unprecedented precision, improving outcomes and quality of life.'
    }
]