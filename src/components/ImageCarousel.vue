<template>
    <div>
        <div id="image-carousel">
            <img v-for="image in images" :src="image" @click="expandImage(image)">
        </div>
        <DialogBox ref="imageDialog" :padding="0" :scroll="false">
            <div id="image-dialog">
                <img :src="currentOpenImage" alt="Carousel image">
            </div>
        </DialogBox>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DialogBox from './DialogBox.vue';

const currentOpenImage = ref<string>("")
const imageDialog = ref()

function expandImage(link: string) {
    currentOpenImage.value = link
    imageDialog.value.open()
}

defineProps<{
    images: string[]
}>()

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

#image-dialog {

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    img {
        height: 100%;
        width: auto;
    }
}

</style>