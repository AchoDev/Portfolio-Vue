<template>

<div id="body">
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

<style scoped lang="scss">

#body {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 30px;
    background: linear-gradient(
        60deg,
        rgb(60, 60, 130),
        rgb(151, 0, 0),
    );
}



</style>