<template>

<div id="container">

    <h2>Particle system creator</h2>

    <div id="controls">
        <div>
            Speed:
            <input v-model="speed" type="range" min="0" max="500">
            {{ speed }}
        </div>
        
        <div>
            Size:
            <input v-model="size" type="range" min="0" max="30">
            {{ size }}
        </div>

        <div>
            Emission:
            <input v-model="emission" type="range" min="0" max="20">
            {{ emission }}
        </div>
    </div>

    <div id="particle-system-container">
        <ParticleSystem 
            :speed="parseInt(speed)"
            :size="parseInt(size)"
            :emission="parseInt(emission)"
            :start-radius="0"
            :end-radius="360"
        />
    </div>

</div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import ParticleSystem from '../../components/ParticleSystem.vue';

const speed = ref<string>("100")
const size = ref<string>("5")
const emission = ref<string>("5")

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

    #particle-system-container {
        width: 100%;
        margin: 20px;
        height: 200px;
        border-radius: 10px;
        display: grid;
        place-items: center;
        background: linear-gradient(10deg, rgba(69, 51, 51, 0.513), rgba(147, 90, 90, 0.489));
    }
}

</style>