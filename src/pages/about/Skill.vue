<template>
  <div class="skill" :style="`background: ${props.color}`">

    <div id="top">
      <img :src="'./images/' + props.img" alt="logo image">
      <span :style="`color: ${textColor}`"> {{name}} </span>
    </div>
  
    <div id="used-in" v-if="projects?.length !== 0">
      <span :style="`color: ${textColor}`">Used in:</span>
  
      <div id="project-wrapper">
  
        <div v-for="project in projects">
          <a class="project-reference" :href="project.path != 'portfolio' ? project.path : '/'">
            <div :style="`background: ${project.color}`">
              <img :src="`../projects/${project.path}/small.png`">
              <span :style="'color: '  + project.text ?? 'white'"> {{project.name}} </span>
            </div>
          </a>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script setup lang="ts">

import { defineProps } from 'vue/dist/vue.js';
import projectType from './projectType'

const props = defineProps<{
  name: string
  img: string
  color: string,
  projects: projectType[]
  textColor?: string
}>()



</script>

<style lang="scss">


</style>