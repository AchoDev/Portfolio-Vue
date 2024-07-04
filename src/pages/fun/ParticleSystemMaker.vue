<template>
    <FunContainer title="Particle system creator">
        <div id="container">
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

                    <br>

                    <div>
                        Gravity Scale:
                        <input v-model="gravityScale" type="range" min="0" max="1" step="0.1">
                        {{ gravityScale }}
                    </div>

                    <div>
                        Color:
                        <input type="text" v-model="color">
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
                        :gravity-scale="parseFloat(gravityScale)"
                        :color="color ?? 'white'"
                    />
                </div>
            </div>
        
            <div>
                <button v-if="!isActive" @click="startParticleSystem()">Start</button>
                <button v-else @click="stopParticleSystem()">Stop</button>
                <button @click="sendSingleParticle()">Single particle</button>
                <button @click="dialog.open()">Generate code</button>
            </div>
        </div>
        
        <DialogBox ref="dialog">
            <div id="code-container">
                <h2>Generated code</h2>
                
                <code>
                    <pre>
                        {{ generatedCode }}
                    </pre>
                </code>

                <p
                    :style="{opacity: infoTextVisible ? 1 : 0}"
                >Copied to clipboard!</p>

                <button @click="copyCode()">Copy to clipboard</button>
            </div>
        </DialogBox>

    </FunContainer>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ParticleSystem from '../../components/ParticleSystem.vue';
import FunContainer from './FunContainer.vue';
import DialogBox from '../../components/DialogBox.vue';

const speed = ref<string>("0.1")
const size = ref<string>("10")
const emission = ref<string>("10")
const lifetime = ref<string>("1")

const startRadius = ref<string>("0")
const endRadius = ref<string>("360")

const gravityScale = ref<string>("0")

const color = ref<string>()

const isActive = ref(false)

const particleSystem = ref()
const dialog = ref()

const indicatorOffset = computed(() => (
    250 - (250 * ((parseFloat(endRadius.value) - parseFloat(startRadius.value)) / 360)))
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

function copyCode() {
    navigator.clipboard.writeText(generatedCode.value)
    showInfoText()
}



const infoTextVisible = ref(false)

function showInfoText() {
    infoTextVisible.value = true;
    
    setTimeout(() => {
        infoTextVisible.value = false
    }, 1000);
}

const generatedCode = computed(() => 
`
<ParticleSystem
    :speed="${speed.value}"
    :size="${size.value}"
    :emission="${emission.value}"
    :lifetime="${lifetime.value}"
    :start-radius="${startRadius.value}"
    :end-radius="${endRadius.value}"
/>`)

</script>

<style lang="scss">

#code-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    code {
        display: flex;
        justify-content: center;
        
        pre {
            background: rgb(46, 51, 57);
            font-family: 'Courier New', Courier, monospace;
            padding: 20px;
            border-radius: 10px; 
        }
    }

    p {
        transition: linear .3s;
    }

    button {
        height: 30px;
        width: 150px;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        transition: ease-out .2s;
        &:hover {
            transform: scale(1.1);
        }
        &:active {
            transform: scale(1);
        }
    }
}

#container {
    &>div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        // width: 80%;
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
    flex-shrink: 0;
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


</style>