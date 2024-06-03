
interface ChangelogEntry {
    title: string,
    date: string,
    description: string,
    relatedPage: string | null,
}

const changelogEntries = <ChangelogEntry[]>[
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