<template>

<div id="fun-container">
    <h2>{{ title }}</h2>
    <slot />
</div>

</template>

<script setup lang="ts">

defineProps<{
    title: string
}>()

</script>

<style scoped lang="scss">
#fun-container {
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

    &:deep(button) {
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
}
</style>