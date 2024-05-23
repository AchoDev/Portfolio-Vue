<template lang="">

    <div :class="content != null ? 'open-wrapper' : 'close-wrapper'" id="page-wrapper">
        <router-link id="close-button" to="/blog"> &Xopf; </router-link>
        <div id="page" :class="content != null ? 'open' : 'close'">
            <component :is="content" />
        </div>
    </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
    content: any
}>()

</script>

<style scoped lang="scss">

    

    .close {
        transform: scale(1.1);
        opacity: 0;
        pointer-events: none;
    }

    .open {
        transform: scale(1);
        opacity: 1;
        pointer-events: all;
    }

    .open-wrapper {
        opacity: 1;
        pointer-events: all;
    }
    .close-wrapper {
        opacity: 0;
        pointer-events: none;
    }

    #close-button {
        position: fixed;
        top: 10px;
        right: 10px;

        background: white;
        color: black;

        width: 40px;
        height: 40px;

        display: grid;
        place-items: center;

        text-decoration: none;
        font-size: 20pt;

        border-radius: 10px;

        z-index: 101;
    }

    #page-wrapper {
        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, 0.329);

        display: grid;
        place-items: center;
        position: fixed;
        
        z-index: 100;

        text-decoration: none;
        color: white;

        transition: linear .1s;
    }

    #page {

        transition: cubic-bezier(0.23, 1, 0.320, 1) .3s;

        width: calc(80% - 50px);
        height: 80%;

        max-width: 700px;

        overflow-x: hidden;
        overflow-y: scroll;

        border-radius: 10px;

        background: linear-gradient(60deg, rgb(19, 59, 85), rgb(90, 14, 14));

        margin: 30px;

        padding: 160px;

        @media screen and (max-width: 900px) {
            
            
            padding: 10px !important;
            height: 100%;
            width: 95%;

            padding-top: 100px !important;

            :deep(img) {
                max-width: 100% !important;
            }
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }

        :deep(p) {
            text-align: justify;
        }

        :deep(h1) {
            text-align: center;
        }

        :deep(h2) {
            text-align: center;

            display: flex;
            flex-direction: column;
            align-items: center;

            &::before {
                content: '';

                margin-top: 50px;
                margin-bottom: 20px;
                
                width: 400px;

                max-width: 90%;

                height: 10px;
                border-top: 1px solid rgba(255, 255, 255, 0.445);
            }
        }

        :deep(code) {
            background: rgb(60, 67, 75);
            padding: 4px;
            border-radius: 5px;
            font-size: 11pt;
        }

        :deep(img) {
            max-width: 80%;
            border-radius: 10px;
        }
        
        :deep(iframe) {
            max-width: 100%;
            border-radius: 10px;
        }

    }
    
</style>