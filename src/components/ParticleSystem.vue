<template>
    <div id="particle-container" ref="particleContainer">

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const particleContainer = ref()

const isActive = ref(false)

const props = defineProps<{
    speed: number,
    size: number,
    emission: number,
    lifetime: number
    startRadius: number,
    endRadius: number,
    rotation: number,
    gravityScale: number,
    color: string,
}>()

function getRandomDirection() {
    const degree = Math.random() * (props.endRadius - props.startRadius) + props.startRadius
    const radian = (degree + props.rotation) * Math.PI / 180
    const x = Math.cos(radian)
    const y = Math.sin(radian)

    return { x, y }
}




function startParticleSystem() {
    isActive.value = true
    runParticleSystem()
}

function sendSingular() {
    runParticleSystem(true)
}

function stopParticleSystem() {
    isActive.value = false;
}

function runParticleSystem(singular?: boolean) {

    if(!isActive.value && !singular) {
        return
    }

    const particle: HTMLDivElement = document.createElement('div')
    particle.classList.add('particle')
    particle.style.left = '0px'
    particle.style.top = '0px'
    particle.style.width = props.size + 'px'
    particle.style.height = props.size + 'px'
    particle.style.background = props.color
    particleContainer.value.appendChild(particle)

    const direction = getRandomDirection()

    let start: number
    let dead = false;
    let speed = {
        x: props.speed * direction.x,
        y: props.speed * direction.y,
    }

    function moveParticle(timeStamp: number) {

        if(dead) return

        if(start == undefined) {
            start = timeStamp
        }

        const elapsed = timeStamp - start
        
        speed.y += elapsed * (props.gravityScale * 0.0000025)

        particle.style.left = speed.x * elapsed + 'px'
        particle.style.top = speed.y * elapsed + 'px'
        
        requestAnimationFrame(moveParticle)
    }

    requestAnimationFrame(moveParticle)

    setTimeout(() => {
        dead = true
        particleContainer.value.removeChild(particle)
    }, props.lifetime * 1000)

    setTimeout(() => {
        particle.classList.add('disappear')
    }, props.lifetime * 1000 - 100)

    if(!singular) setTimeout(runParticleSystem, 1000 / props.emission)
}


defineExpose({
    start: () => {
        startParticleSystem()
    },
    stop: () => {
        stopParticleSystem()
    },
    singleParticle: () => {
        sendSingular()
    }
})

</script>

<style scoped lang="scss">

#particle-container {
    width: 1px;
    height: 1px;
    position: relative;
    &:deep(.particle) {
        width: 10px;
        height: 10px;
        left: 0px;
        background: rgb(255, 255, 255);
        border-radius: 100%;
        filter: blur(3px);
        position: absolute;

        opacity: 1;

        transition: opacity linear .1s, transform linear .2s;
        
        &.disappear {
            opacity: 0;
            transform: scale(0)
        }
    }
}

</style>