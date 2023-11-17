<template lang="">
    <div>
        <h1>{{ title }}</h1>

        
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    relatedProject: string,
    title: string
}>()

</script>

<style lang="">
    
</style>