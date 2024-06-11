<template>
    <div>
        <div id="image-carousel">
            <slot />
        </div>
        <DialogBox>
            <img :src="currentOpenImage" alt="Carousel image">
        </DialogBox>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DialogBox from './DialogBox.vue';

const currentOpenImage = ref<string>("")

</script>

<style scoped lang="scss">

#image-carousel {
    display: flex;
    flex-direction: row;
    height: 100px;
    gap: 5px;


    &:deep(img) {
        height: 100%;
        width: auto;
        cursor: pointer;

        transition: ease-out .2s;
        &:hover {
            transform: scale(1.05);
        }
    }
}

</style>