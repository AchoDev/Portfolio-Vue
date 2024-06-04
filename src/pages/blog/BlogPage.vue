<template>
    <div id="container">

        <br>
        <br>
        <br>

        <h1>Blog</h1>

        <router-link :to="`/blog/${entry.path}`" class="blog-entry" v-for="entry in blogEntries">
            <div class="banner" :style="`background: ${findProject(entry.relatedProject).color}`">
                <img :src="`/projects/${entry.relatedProject}/main.png`" alt="Project Image">
            </div>

            <div class="content" :style="`--background-color: ${entry.color}`">
                <h2> {{ entry.title }} </h2>

                <div class="body">
                    {{ entry.desc }}
                </div>

                <span class="date"> {{ entry.date }} </span>
            </div>
        </router-link>

        <BlogEntry :content="currentOpenBlog"/>

    </div>
</template>

<script setup lang="ts">

import { watch, shallowRef } from 'vue';
import { projectList, projectType } from '../../projects';

import blogEntries from './blogEntries';
import BlogEntry from './BlogEntry.vue'

const props = defineProps<{
    title?: any
}>()

const currentOpenBlog = shallowRef()


if(props.title != null) {
    blogEntries.forEach((blog) => {
        if(blog.path === props.title) currentOpenBlog.value = blog.component
    })
}

watch(() => props.title, () => {
    if(props.title != null) {
        blogEntries.forEach((blog) => {
            if(blog.path === props.title) currentOpenBlog.value = blog.component
        })
    } else {
        currentOpenBlog.value = null
    }
})


function findProject(projectName: string) {
    let result: projectType = projectList[0];

    projectList.forEach((project) => {
        if(project.path === projectName) {
            result = project 
        }
    })

    return result
}

</script>

<style scoped lang="scss">

#container {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 40px;

    min-height: 100dvh;
}

.blog-entry {
    display: flex;
    flex-direction: row;
    
    width: 800px;
    max-width: 90%;

    height: 200px;

    overflow: hidden;

    color: white;
    text-decoration: none;

    border-radius: 10px;

    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) .5s;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        transform: scale(1.05);

        .content::after {
            left: -65px;
            // transform: rotate(0);
        }

        .banner img {
            transform: scale(1.1) translateX(-10px);
        }
    }

    .banner {
        width: 200px;
        height: auto;

        position: relative;

        z-index: -1;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            transition: cubic-bezier(0.165, 0.84, 0.44, 1) .8s;

            position: absolute;

            height: 110px;
            width: auto;
        }
    }

    .content {
        // $background-color: rgb(28, 61, 105);
        // $background: linear-gradient(
        //     40deg, 
        //     darken($background-color, 5%), 
        //     lighten($background-color, 5%)
        // );
        // $background: $background-color;

        // background: $background;

        background: var(--background-color);

        position: relative;
        // overflow: hidden;

        display: flex;
        align-items: center;
        flex-direction: column;

        width: 100%;

        gap: 20px;
        

        .date {
            position: absolute;
            bottom: 5px;
            right: 10px;
        }

        @media screen and (max-width: 700px) {
            width: 300px !important;
            gap: 0;

            .body {
                font-size: 10pt;
                width: 95%;
            }

            h2 {
                margin-bottom: 10px !important;
            }
        }

        &::after {
            content: '';
            position: absolute;
            background: var(--background-color);
            box-shadow: rgba(0, 0, 0, 0.507) -10px 0px 13px -5px;

            height: 500px;
            width: 200px;

            transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) .3s;

            top: -20px;
            left: -50px;

            z-index: -1;

            transform: rotate(10deg)
        }
    }
}
    
</style>