
interface ChangelogEntry {
    title: string,
    date: string,
    description: string,
    images: string[]
    relatedPage: string | null,
}

const changelogEntries = <ChangelogEntry[]>[
    {
        title: "Fun factory and particle system",
        date: "8 June, 2024",
        description: "Look at this, a brand new page! The 'Fun Factory' is an exciting new innovation, brought to you by AchoDev Incorporated TM. We aim to revolutionize the lanscape and bring exciting new ideas and innovations. In this impressive new update, we bring two new innovations: The 'Fun Factory', an exciting new innovation and the 'Particle System', able to revolutionize and innovate the technical landscape. With the former, we will be able to bring organized fun and entertainment to all customers. The latter will enhance our users experience and create unforgettable memories. Thank you for listening to this exiciting innovative presentation and buy our product",
        images: ['particlesystem.png']

    },
    {
        title: "Hyperlink buttons!",
        date: "6 June, 2024",
        description: "I added these nice hyperlink buttons with animations and such done for them, that are good and easy to use and follow",
    },
    {
        title: "Updated home room model",
        date: "1 June, 2024",
        description: "The home menu got some new assets: Cup of tea, a new rubiks cube, nice headphones, some new books and a secret....",
    },
    {
        title: "Changelog entry page created!",
        date: "31 May, 2024",
        description: "So, this is where I'll document changes for this website. Since there's gonna be some changees in the future, I decided to quickly code this up + it makes the site way more lively and fun to explore",
    }
]

export {changelogEntries, type ChangelogEntry}