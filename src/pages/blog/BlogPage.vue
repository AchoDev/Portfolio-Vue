<template>
    <div>
        <div class="blog-entry" v-for="entry in blogEntries">
            <router-link :to="`/blog/${entry.path}`">
                <div class="banner" :style="`background: ${findProject(entry.relatedProject).color}`">
                    <img :src="`/projects/${entry.relatedProject}/main.png`" alt="Project Image">
                </div>
    
                <div class="content">
                    <div class="head">
                        <h2> {{ entry.title }} </h2>
                        <span> {{ entry.date }} </span>
                    </div>
    
                    <div class="body">
                        {{ entry.desc }}
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">

import * as EntryComponents from './entries/'
// import BlogEntry from './BlogEntry.vue';

import projectList from '../projects/projectList';
import projectType from "../projects/projectType"

const props = defineProps<{
    blogEntry?: any
}>()

if(props.blogEntry != null) console.log("open blog man!!")

interface entryType {
    title: string
    desc: string
    date: string,
    component: any
    relatedProject: string,
    path: string,
}

const blogEntries: Array<entryType> = [
    {
        title: 'AchoMatico-Launcher finished!',
        desc: 'Yesterday, I finally finished AchoMatico-Launcher, this explains, the process of ending this ~1.5 year journey',
        date: '17 November, 2023',
        component: EntryComponents.AmLauncherFinished,
        relatedProject: 'am-launcher',
        path: 'am-launcher-finished',
    }    
]

function findProject(projectName: string) {
    let result: projectType = projectList[0];

    projectList.forEach((project) => {
        if(project.name === projectName) {
            result = project 
        }
    })

    return result
}

</script>

<style lang="scss">
    
</style>