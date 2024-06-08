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
}>()

function getRandomDirection() {
    const degree = Math.random() * (props.endRadius - props.startRadius) + props.startRadius
    const radian = degree * Math.PI / 180
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

    let continueAfterFinish = !(singular ?? false)
    if(isActive.value && singular) {
        continueAfterFinish = true
    }

    const particle: HTMLDivElement = document.createElement('div')
    particle.classList.add('particle')
    particle.style.left = '0px'
    particle.style.top = '0px'
    particle.style.width = props.size + 'px'
    particle.style.height = props.size + 'px'
    particleContainer.value.appendChild(particle)

    const direction = getRandomDirection()

    let start: number
    let dead = false;

    function moveParticle(timeStamp: number) {

        if(dead) return

        if(start == undefined) {
            start = timeStamp
        }

        const elapsed = timeStamp - start

        particle.style.left = ((props.speed * elapsed) * direction.x) + 'px'
        particle.style.top = ((props.speed * elapsed) * direction.y) + 'px'
        
        requestAnimationFrame(moveParticle)
    }

    requestAnimationFrame(moveParticle)

    setTimeout(() => {
        console.log("die")
        dead = true
        particleContainer.value.removeChild(particle)
    }, props.lifetime * 1000)

    setTimeout(() => {
        particle.classList.add('disappear')
    }, props.lifetime * 1000 - 100)

    if(!continueAfterFinish) {
        isActive.value = false;
        return
    }

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