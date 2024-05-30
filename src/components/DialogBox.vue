<template>

<teleport to='body'>
    <div id="dialog-wrapper" :class="{open}" @click="router.back()">
        <div id="dialog-body" @click.stop>
            <slot />
        </div>
    </div>
</teleport>


</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

// import { watch } from 'vue';

const props = defineProps<{
    opened: boolean,
}>()

const open = ref<boolean>(props.opened)

watch(props, () => {
    open.value = props.opened
})

const router = useRouter()

// const open = defineModel()

// const props = defineProps<{
//     opened?: boolean
// }>()

// open.value = props.opened || false;

// watch(props, () => {
//     open.value = props.opened || false
// })

</script>

<style scoped lang="scss">


#dialog-wrapper {
    
    transition: linear .2s;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

    z-index: 40;

    width: 100dvw;
    height: 100dvh;
    background: rgba(0, 0, 0, 0.491);
    display: grid;
    place-items: center;

    pointer-events: none;

    #dialog-body {

        width: 70%;
        height: 80%;

        overflow-y: scroll;
        overflow-x: hidden;

        border-radius: 10px;

        padding: 0;

        transform: scale(1.2);
        transition: cubic-bezier(0.165, 0.84, 0.44, 1) .2s;

        &::-webkit-scrollbar-track {
            background: transparent;
        }
    }
}

.open {
    opacity: 1 !important;
    pointer-events: all !important;

    #dialog-body {
        transform: scale(1) !important;
    }
}

</style>