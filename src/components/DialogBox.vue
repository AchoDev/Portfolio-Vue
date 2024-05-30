<template>

<teleport to='body' @click="open = false">
    <div id="dialog-wrapper" :class="{open}">
        <div id="dialog-body">
            <slot />
        </div>
    </div>
</teleport>


</template>

<script setup lang="ts">

const open = defineModel()

const props = defineProps<{
    opened: boolean | null
}>()

open.value = props.opened || false;

</script>

<style lang="scss">


#dialog-wrapper {
    
    transition: linear .5s;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

    z-index: 40;

    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.491);
    display: grid;
    place-items: center;

    pointer-events: none;

    #dialog-body {
        width: 70%;
        height: 80%;

        transform: scale(1.2);
        transition: ease-out .3s;
    }
}

.open {
    opacity: 1 !important;
    pointer-events: all;

    #dialog-body {
        transform: scale(1);
    }
}

</style>