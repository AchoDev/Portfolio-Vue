
interface ChangelogEntry {
    title: string,
    description: string,
    relatedPage: string | null,
}

const changelogEntries = <ChangelogEntry[]>[
    {
        title: "Changelog entry page created!",
        description: "So, this is where I'll document changes for this website. Since there's gonna be some changees in the future, I decided to quickly code this up + it makes the site way more lively and fun to explore",
    }
]

export {changelogEntries, type ChangelogEntry}