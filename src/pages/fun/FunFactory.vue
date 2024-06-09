<template>
    <div id="page-container">
        <h1>Fun factory</h1>

        <p>This page is where the true fun begins. Lots of utilities and things to play around with <br><br> Nah just kidding, it's literally just debug tools I use</p>

        <ParticleSystemMaker />

        <HyperlinkMaker />
    </div>
</template>

<script setup lang="ts">

import HyperlinkMaker from './HyperlinkMaker.vue';
import ParticleSystemMaker from './ParticleSystemMaker.vue';

</script>

<style scoped lang="scss">

#page-container {
    // margin-top: 50px;
    text-align: center;
    width: 100%;
    min-height: 100dvh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding-top: 100px;

    gap: 50px;

    // overflow-y: scroll;

    margin-bottom: 200px;
}

</style>