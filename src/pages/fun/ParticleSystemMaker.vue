<template>

<div id="container">
    <div id="controls">
        <div>
            Speed:
            <input v-model="speed" type="range" min="0" max="10">
            {{ speed }}
        </div>
        
        <div>
            Size:
            <input v-model="size" type="range" min="0" max="10">
            {{ size }}
        </div>
    </div>

    <ParticleSystem 
        :speed="speed"
        :size="size"
    />

</div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import ParticleSystem from '../../components/ParticleSystem.vue';

const speed = ref<number>(0)
const size = ref<number>(0)

</script>

<style scoped lang="scss">

#container {
    background: rgba(255, 255, 255, 0.237);
    backdrop-filter: blur(100px);
    max-width: 700px;
    height: 300px;
    padding: 10px;

    display: flex;
    flex-direction: row !important;
    justify-content: start !important;

    #controls {
        width: auto;
        display: flex;
        flex-direction: column;

        div {
            width: 230px;
            display: flex;
            justify-content: space-between;
        }
    }
}

</style>