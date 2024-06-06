<template>

<router-link :to="'/' + link.path">
    <span id="background-wrapper" :style="{
        background: link.color
    }">
        <span id="container" :style="{
            color: link.text ?? 'white'
        }">
            <img :src="smallImgLink" alt="Image">
            {{ link.name }}

            <img id="link" src="/link.png" alt="Link">
        </span>
    </span>
</router-link>

</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { projectList, ProjectType } from '../projects';
import { useRouter } from 'vue-router';
// import Project from '../pages/about/projectType';

// interface Hyperlink {
//     smallImg: string,
//     title: string,
//     color: string,
//     path: string,
// }

// const router = useRouter()

const props = defineProps<{
    to: string,
}>()

const link = ref<ProjectType>({
    // smallImg: '../question.jpeg',
    name: `"${props.to}" not found`,
    desc: '',
    color: 'white',
    path: '/',
    text: 'black'
})

const smallImgLink = computed(() => `../projects/${link.value.path}/small.png`)

onMounted(() => {
    const writtenProjectRes = projectList.find((a) => a.path == props.to)

    if (writtenProjectRes != null)
    {
        link.value = writtenProjectRes
    
        return
    }
})

</script>

<style scoped lang="scss">

#background-wrapper {

    user-select: none;

    height: 15px;
    color: black;
    display: inline-block;
    width: auto;

    position: relative;
    overflow: hidden;

    padding: 3px 5px;

    border-radius: 10px;
    
    transition: ease-out .2s;


    &:hover {
        transform: scale(1.1) rotate(-2deg);
        animation-name: hover-animation;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-delay: .2s;

        &::after {
            left: 0;
            opacity: 0;

            transition: left cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, opacity linear 1s;
            transition-delay: opacity .2s, left 0;
        }
    }

    @keyframes hover-animation {
        0% {
            transform: scale(1.1) rotate(-2deg)
        }
        50% {
            transform: scale(1.1) rotate(2deg)
        }
        100% {
            transform: scale(1.1) rotate(-2deg)
        }
    }

    #container {
        
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        gap: 2px;
        
        img {
            height: 100%;
            width: auto;
            max-width: auto;
        }

        #link {
            filter: invert(1);
            height: 90%;
            width: auto;
        } 
    }

    &::after {
        content: '';
        height: 50px;
        width: 100%;

        position: absolute;
        left: -100%;
        top: 0;
        background: white;
        // z-index: 100;

        opacity: 1;
        transition: ease-out .2s;
    }

}

</style>