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
    directionalRotation: boolean,
    gravityScale: number,
    shape: string,
    blur: number,
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
    particle.classList.add(props.shape)
    particle.style.filter = `blur(${props.blur}px)`
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

        if(props.directionalRotation) {
            const degree = Math.atan2(speed.y, speed.x) * (180 / Math.PI)

            console.log(degree)

            particle.style.rotate = `${degree}deg`
        }
        
        speed.y += elapsed * (props.gravityScale * 0.0000025)

        particle.style.left = speed.x * elapsed + 'px'
        particle.style.top = speed.y * elapsed + 'px'
        
        if(elapsed > props.lifetime * 1000) {
            dead = true
            particleContainer.value.removeChild(particle)
            return
        }

        if(elapsed > props.lifetime * 1000 - 100) {
            particle.classList.add('disappear')
        }

        requestAnimationFrame(moveParticle)
    }

    requestAnimationFrame(moveParticle)

    if(!singular) {
        let loopStart: number

        function loop(timeStamp: number) {

            if(loopStart == undefined) {
                loopStart = timeStamp
            }

            const elapsed = timeStamp - loopStart

            if(elapsed > 1000 / props.emission) {
                loopStart = timeStamp
                runParticleSystem()
                return
            }

            requestAnimationFrame(loop)
        }

        requestAnimationFrame(loop)
    }
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
        filter: blur(3px);
        position: absolute;

        opacity: 1;

        transition: opacity linear .1s, transform linear .2s, rotate linear .01s;
        
        &.disappear {
            opacity: 0;
            transform: scale(0)
        }

        &.circle {
            border-radius: 100%;
        }

        &.square {
            border-radius: 0;
        }

        &.star {
            // position: relative;
            visibility: hidden;
        }

        &.star::before {
            content: '';
            position: absolute;
            width: inherit;
            height: inherit;
            background: inherit;
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
            transform: rotate(36deg);
            visibility: visible;
            left: 0;
            rotate: 180deg;
        }
    }
}

</style>