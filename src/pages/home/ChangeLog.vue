<template>

<div>
    <h1>Changelog</h1>
    <p>This is where I document all the changes made to this site over time</p>

    <br><br>

    <div class="changelog-entry" v-for="entry in changelogEntries">
        <h3>{{ entry.title }}</h3>
        <p>{{ entry.description }}</p>
    </div>
</div>  

</template>

<script setup lang="ts">

import {changelogEntries} from './changelog'

</script>

<style lang="scss">

div {
    width: 100%;
    height: 100%;
    background: rgb(22, 55, 102);
}

</style>