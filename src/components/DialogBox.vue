<template>

<teleport to='body'>
    <div id="dialog-wrapper" :class="{open}" @click="close()">
        <div id="dialog-body" @click.stop :style="{padding: padding + 'px' ?? '10px', overflowY: scrollType}">
            <slot />
        </div>
    </div>
</teleport>


</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

// import { watch } from 'vue';

const props = defineProps<{
    opened?: boolean,
    routerBased?: boolean,
    padding?: number,
    scroll?: boolean,
}>()

const scrollType = computed(() => {
    if(props.scroll === false) {
        return 'hidden'
    } else {
        return 'scroll'
    }
})

const open = ref<boolean>(props.opened ?? false)

watch(props, () => {
    open.value = props.opened
})

const router = useRouter()

function close() {
    if(props.routerBased) {
        router.back()
    } else {
        open.value = false
    }
}

defineExpose({
    open() {
        open.value = true
    },
})

// onMounted(() => {
//     if(props.scroll == undefined) props.sc+
// })


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
    position: fixed;
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
        height: 600px;
        max-height: 80%;
        min-height: 50%;

        // overflow-y: scroll;
        overflow-x: hidden;

        border-radius: 10px;

        background: linear-gradient(
            60deg,
            rgb(60, 60, 130),
            rgb(151, 0, 0),
        );

      

        transform: scale(1.2);
        transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) .2s, opacity cubic-bezier(0.165, 0.84, 0.44, 1) .2s;

        &::-webkit-scrollbar-track {
            background: transparent;
            // border-radius: 10px;
        }
        
        &::-webkit-scrollbar {
            overflow: hidden;
            position: absolute;
            right: 0;
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