<template>

<div id="body">
    <h1>Changelog</h1>
    <p>This is where I document all the changes made to this site over time</p>

    <br><br>

    <ChangelogEntry 
        v-for="entry in changelogEntries" 
        :title="entry.title"
        :date="entry.date"
        :description="entry.description"
    />
</div>  

</template>

<script setup lang="ts">

import {changelogEntries} from './changelog'
import ChangelogEntry from './ChangelogEntry.vue';

</script>

<style scoped lang="scss">

#body {
    width: 100%;
    height: 100%;
    overflow: auto;
    // padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
}

</style>