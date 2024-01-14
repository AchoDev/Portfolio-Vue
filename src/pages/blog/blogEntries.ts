
import entryType from "./blogEntryType"

import AmLauncherFinished from './entries/AmLauncherFinished.vue'
import LuminaEarlyLook from "./entries/LuminaEarlyLook.vue"
import Kang2Version1_1 from "./entries/Kang2Version1_1.vue"
import Kang2Version1_2 from "./entries/kang2version1_2/Kang2Version1_2.vue"

const blogEntries: Array<entryType> = [
    { 
        title: 'Kang2 version 1.2 out!',
        desc: 'The second version is finally done! This version is a lot more stable and has a lot more features! (and a vsc extension!)',
        date: '14 January, 2024',
        component: Kang2Version1_2,
        relatedProject: 'kang2',
        color: 'linear-gradient(0.9turn, rgb(255, 115, 0), red)',
        path: 'kang2-version-1-2'
    },
    { 
        title: 'Kang2 version 1.1 out!',
        desc: 'My Programming Language Kang2 is getting an update! Lots of fun stuff and really big shifts in the language',
        date: '04 January, 2024',
        component: Kang2Version1_1,
        relatedProject: 'kang2',
        color: 'linear-gradient(0.9turn, rgb(255, 115, 0), red)',
        path: 'kang2-version-1-1'
    },
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