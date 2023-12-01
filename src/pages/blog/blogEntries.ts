
import entryType from "./blogEntryType"

import AmLauncherFinished from './entries/AmLauncherFinished.vue'
import LuminaEarlyLook from "./entries/LuminaEarlyLook.vue"

const blogEntries: Array<entryType> = [
    {
        title: 'Lumina-Engine: An early look',
        desc: 'Lumina Engine is finally presentable! Though there is still a lot missing',
        date: '1 December, 2023',
        component: LuminaEarlyLook,
        relatedProject: 'lumina',
        color: '#5b297f',
        path: 'lumina-early-look'
    },
    {
        title: 'AchoMatico-Launcher finished!',
        desc: 'Yesterday, I finally finished AchoMatico-Launcher, this explains, the process of ending this ~1.5 year journey',
        date: '17 November, 2023',
        component: AmLauncherFinished,
        relatedProject: 'am-launcher',
        color: 'rgb(28,61,105)',
        path: 'am-launcher-finished'
    },
]

export default blogEntries