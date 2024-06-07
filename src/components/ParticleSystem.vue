<template>
    <div id="particle-container" ref="particleContainer">

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const particleContainer = ref()

const props = defineProps<{
    speed: number,
    size: number,
    emission: number,
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

let lastUpdate = 0

onMounted(() => {
    const runParticleSystem = () => {
        const particle: HTMLDivElement = document.createElement('div')
        particle.classList.add('particle')
        particle.style.left = '0px'
        particle.style.top = '0px'
        particle.style.width = props.size + 'px'
        particle.style.height = props.size + 'px'
        particleContainer.value.appendChild(particle)

        const direction = getRandomDirection()


        const interval = setInterval(() => {
            const now = Date.now()
            const dt = (now - lastUpdate) / 1000
            lastUpdate = now

            particle.style.left = ((props.speed * dt + Math.abs(particle.offsetLeft)) * direction.x) + 'px'
            particle.style.top = ((props.speed * dt + Math.abs(particle.offsetTop)) * direction.y) + 'px'
        }, 1000 / 50)

        setTimeout(() => {
            console.log("die")
            clearInterval(interval)
            particleContainer.value.removeChild(particle)
        }, 1000)

        setTimeout(() => {
            particle.style.opacity = '0'
        }, 900)

        setTimeout(runParticleSystem, 1000 / props.emission)
    }

    setTimeout(runParticleSystem, 1000 / props.emission)


    // }, 1000)
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

        transition: opacity linear .1s;
    }
}

</style>