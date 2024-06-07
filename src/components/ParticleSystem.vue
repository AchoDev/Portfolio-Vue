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
}>()

onMounted(() => {
    setInterval(() => {
        const particle = particleContainer.value.createElement('div')
    }, 1000 / 50)
})

</script>

<style scoped lang="scss">

#particle-container {
    width: 1px;
    height: 1px;
}

</style>