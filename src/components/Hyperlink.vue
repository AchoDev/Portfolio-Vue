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
import { computed, onMounted, ref, watch } from 'vue';
import { projectList, ProjectType } from '../projects';


const props = defineProps<{
    to: string,
}>()

const defaultProject: ProjectType = {
    name: `"${props.to}" not found`,
    desc: '',
    color: 'white',
    path: '',
    text: 'black'
}

const link = ref<ProjectType>(defaultProject)

const smallImgLink = computed(() => {

    if(link.value.path == '') {
        return '../question.jpeg'
    } else {
        return `../projects/${link.value.path}/small.png`
    }

})

function searchForProject() {
    const writtenProjectRes = projectList.find((a) => a.path == props.to)
    
    if (writtenProjectRes != null)
    {
        link.value = writtenProjectRes
    
        return
    } else {
        link.value = defaultProject
    }
}

watch(props, () => {
    searchForProject()
})

onMounted(() => {
    searchForProject()
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
        animation-duration: 0.4s;
        animation-iteration-count: infinite;
        animation-delay: .2s;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

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