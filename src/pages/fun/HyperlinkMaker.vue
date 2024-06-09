<template>

<FunContainer title="Hyperlink maker">

    <h3>Hmm I'd love to have a Hyperlink going to....</h3>

    <input v-model="hyperlinkSearch" type="text">

    <br>

    <Hyperlink :to="hyperlinkSearch ?? ''" />

</FunContainer>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import FunContainer from './FunContainer.vue';
import Hyperlink from '../../components/Hyperlink.vue';

const hyperlinkSearch = ref<string>()

</script>

<style scoped lang="scss">

input {
    width: 150px;
    height: 25px;
    border: black;
    border-radius: 10px;
}

input:focus{
    outline: none;
}

</style>