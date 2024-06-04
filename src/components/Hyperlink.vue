<template>

<router-link :to="link.path">
    <span :style="{
        background: link.color
    }">
        <span id="container">
            <img :src="link.smallImg" alt="Image">
            {{ link.title }}
        </span>
    </span>
</router-link>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { projectList } from '../projects';

interface Hyperlink {
    smallImg: string,
    title: string,
    color: string,
    path: string,
}

const props = defineProps<{
    to: string,
}>()

const link = ref<Hyperlink>({
    smallImg: '../question.jpeg',
    title: `"${props.to}" not found`,
    color: 'white',
    path: '/'
})


onMounted(() => {
    const writtenProjectRes = projectList.find((a) => a.path == props.to)

    if (writtenProjectRes != null)
    {
        link.value.color = writtenProjectRes.color
        link.value.smallImg = `../projects/${writtenProjectRes.path}/small.png`
        link.value.title = writtenProjectRes.name
        
    
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