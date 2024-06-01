<template>
<div id="changelog-entry" @click="expand()" :class="{expanded}">
        
        <div id="top">
            <h3>{{ title }}</h3>
            <p>{{ date }}</p>
        </div>

        <p id="bottom">{{ description }}</p>

        <div id="collapse" @click="collapse()" @click.stop>^ Collapse</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


defineProps<{
    title: string,
    date: string,
    description: string,
}>()

const expanded = ref<boolean>(false)

function expand() {
    if(!expanded.value) {
        expanded.value = true;
    }
}

function collapse() {
    expanded.value = false
}

</script>

<style scoped lang="scss">

#changelog-entry {
    width: 90%;
    background: rgba(145, 145, 145, 0.354);
    backdrop-filter: blur(10px);

    padding: 20px;

    border-radius: 10px;

    display: flex;
    flex-direction: column;

    max-height: 25px;

    cursor: pointer;

    overflow: hidden;
    transition: ease-out .3s;

    &.expanded {
        max-height: 1000px;
        cursor: auto;
    }

    &:not(.expanded):hover {

        @keyframes jumping {
            0% {
                transform: scale(1);
                max-height: 25px;
            }
            50% {
                transform: scale(1.01);
                max-height: 40px;
            }
            100% {
                transform: scale(1);
                max-height: 25px;
            }
        }

        animation-name: jumping;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        filter: brightness(110%);
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }

    #top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        user-select: none;

        h3 {
            text-align: center;
            margin: 0;
            // min-width: 300px;
        }

        p {
            margin: 0;
        }
    }

    #collapse {
        width: 120px;
        height: 30px;

        display: grid;
        place-items: center;
        border: none;
        background: rgba(255, 255, 255, 0.889);
        color: black;
        cursor: pointer;

        border-radius: 5px;

        transition: ease-out .2s;
        &:hover {
            transform: scale(1.1)
        }

        &:active {
            transform: scale(1)  translateY(-5px);
        }
    }
}

</style>