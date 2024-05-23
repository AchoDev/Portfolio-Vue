
import entryType from "./blogEntryType"

import AmLauncherFinished from './entries/AmLauncherFinished.vue'
import LuminaEarlyLook from "./entries/LuminaEarlyLook.vue"
import Kang2Version1_1 from "./entries/Kang2Version1_1.vue"
import Kang2Version1_2 from "./entries/kang2version1_2/Kang2Version1_2.vue"
import Kang2Version1_3 from "./entries/kang2version1_3/Kang2Version1_3.vue"
import PicoTermRelease from "./entries/PicoTermRelease.vue"
import PicoTermUpdate1 from "./entries/PicoTermUpdate1/PicoTermUpdate1.vue"

const blogEntries: Array<entryType> = [
    { 
        title: 'Pico-Term, is now officially better than vim (Update 1)',
        desc: 'Pico-Term got its first major update! Lots of new features (I swear this is interesting)',
        date: '23 May, 2024',
        component: PicoTermUpdate1,
        relatedProject: 'pico-term',
        color: 'rgb(42, 65, 163)',
        path: 'pico-term-update-1'
    },
    { 
        title: 'Pico-Term, the best terminal based text editor',
        desc: 'I released Pico-Term yesterday, a new text editor. Kinda like vim, only better!',
        date: '18 February, 2024',
        component: PicoTermRelease,
        relatedProject: 'pico-term',
        color: 'rgb(42, 65, 163)',
        path: 'pico-term-release'
    },
    { 
        title: 'Kang2 version FINAL VERSION 1.3 out!',
        desc: 'The next (and probably last) version of Kang2 is out! Some new features and a lot of bug fixes!',
        date: '31 January, 2024',
        component: Kang2Version1_3,
        relatedProject: 'kang2',
        color: 'linear-gradient(0.8turn, rgb(255, 115, 0), red)',
        path: 'kang2-version-1-3'
    },
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