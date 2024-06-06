<template>
    <div id="container">
        <h1>Fun factory</h1>

        <p>This page is where the true fun begins. Lots of utilities and things to play around with <br><br> Nah just kidding, it's literally just debug tools I use</p>

        <ParticleSystemMaker />
    </div>
</template>

<script setup lang="ts">

import ParticleSystemMaker from './ParticleSystemMaker.vue';

</script>

<style scoped lang="scss">

#container {
    margin-top: 50px;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>