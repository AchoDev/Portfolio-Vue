<template>

<div id="container">

    <h2>Particle system creator</h2>

    <div>
        <div id="controls">
            <div>
                Speed:
                <input v-model="speed" type="range" min="0.01" max="1" step="0.01">
                {{ speed }}
            </div>
            
            <div>
                Size:
                <input v-model="size" type="range" min="1" max="30">
                {{ size }}
            </div>
    
            <div>
                Emission:
                <input v-model="emission" type="range" min="1" max="20">
                {{ emission }}
            </div>
    
            <div>
                Lifetime:
                <input v-model="lifetime" type="range" min="0.1" max="2" step="0.1">
                {{ lifetime }}
            </div>

            <br>

            <div>
                Start radius:
                <input v-model="startRadius" type="range" min="0" max="360" step="1">
                {{ startRadius }}
            </div>

            <div>
                End radius:
                <input v-model="endRadius" type="range" min="1" max="360" step="1">
                {{ endRadius }}
            </div>
        </div>
    
        <div id="particle-system-container">

            <div id="arc-indicator">
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" :style="{
                        strokeDashoffset: indicatorOffset,
                        transform: `rotate(${startRadius}deg)`
                    }"/>
                </svg>
            </div>

            <ParticleSystem 

                ref="particleSystem"

                :speed="parseFloat(speed)"
                :size="parseFloat(size)"
                :emission="parseFloat(emission)"
                :lifetime="parseFloat(lifetime)"
                :start-radius="parseFloat(startRadius)"
                :end-radius="parseFloat(endRadius)"
            />
        </div>
    </div>

    <div>
        <button v-if="!isActive" @click="startParticleSystem()">Start</button>
        <button v-else @click="stopParticleSystem()">Stop</button>
        <button @click="sendSingleParticle()">Single particle</button>
    </div>

</div>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ParticleSystem from '../../components/ParticleSystem.vue';

const speed = ref<string>("0.1")
const size = ref<string>("10")
const emission = ref<string>("10")
const lifetime = ref<string>("1")

const startRadius = ref<string>("0")
const endRadius = ref<string>("360")

const isActive = ref(false)

const particleSystem = ref()

const indicatorOffset = computed(() => (
    250 - (250 * ((parseFloat(endRadius.value) - parseFloat(startRadius.value)) / 360))) + 1
)

function startParticleSystem() {
    isActive.value = true
    particleSystem.value.start()
}

function stopParticleSystem() {
    isActive.value = false
    particleSystem.value.stop()
}

function sendSingleParticle() {
    particleSystem.value.singleParticle()
}

</script>

<style scoped lang="scss">

#container {
    background: rgba(255, 255, 255, 0.237);
    backdrop-filter: blur(100px);
    max-width: 700px;
    height: 380px;
    padding: 10px;
    border-radius: 5px;

    
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    &>div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        width: 80%;
    }

    button {
        width: 130px;
        height: 40px;
        border-radius: 5px;
        border: none;
        background: rgb(255, 255, 255);

        transition: ease-out .2s;
        &:hover {
            transform: scale(1.05) rotate(2deg);
            cursor: pointer;
        }

        &:active {
            transform: scale(1)
        }
    }

    #controls {
        width: auto;
        display: flex;
        flex-direction: column;

        div {
            width: 270px;
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
        position: relative;
    
        #arc-indicator {
            position: absolute;
            circle {
                stroke: rgb(0, 0, 0);
                fill: transparent;
                stroke-width: 1;
                stroke-dasharray: 250;
                stroke-dashoffset: 0;

                transform-origin: center;
            }
        }
    }
}

</style>