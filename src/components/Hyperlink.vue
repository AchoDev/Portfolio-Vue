<template>

<span :style="{
    background: link.color
}">
    <span id="container">
        <img :src="link.smallImg" alt="Image">
        {{ link.title }}
    </span>
</span>

</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { projectList } from '../projects';

interface Hyperlink {
    smallImg: string,
    title: string,
    color: string,
}

const props = defineProps<{
    to: string,
}>()

const link: Hyperlink = {
    smallImg: '../question.jpeg',
    title: `"${props.to}" not found`,
    color: 'white'
}


onMounted(() => {
    const writtenProjectRes = projectList.find((a) => a.path == props.to)

    if (writtenProjectRes != null)
    {
        link.color = writtenProjectRes.color
        link.smallImg = `../projects/${writtenProjectRes.path}/small.png`
        link.title = writtenProjectRes.name

        return
    }
})

</script>

<style scoped lang="scss">

span {
    height: 15px;
    color: black;
    display: inline-block;
    width: auto;
    
    #container {
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        img {
            height: 100%;
            width: auto;
        }
    }

}

</style>