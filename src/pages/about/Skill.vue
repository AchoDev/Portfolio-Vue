<template>
  <div class="skill" :style="`background: ${props.color}`">

    <div id="top">
      <img :src="'./skill-images/' + props.img" alt="logo image">
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

<style scoped lang="scss">


.project-reference {
  text-decoration: none;
  width: 100%;

  display: inline-block;

  transition: ease-out .1s;

  /* margin-left: 30px;
  margin-right: 30px; */

  &:first-child { padding-left: 3.5px; }

  &:hover { transform: scale(1.05); }

  div {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none !important;
    border-radius: 10px;

    min-width: 100px;

    gap: 5px;

    padding-left: 5px;
    padding-right: 5px;
  }

  span {
    text-wrap: nowrap;
  }

  img {
    width: 20px;
    height: 80%;
    
    border-radius: 4px;
  }
}



.skill {
  width: 300px;
  min-height: 100px;


  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  gap: 10px;

  padding: 10px;

  border-radius: 15px;

  transition: ease-out .1s;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  #top {
    display: flex;
    height: 100%;
    
    span {
      font-size: 20pt;
      width: 100%;
      text-align: center;
    }
  
    img {
      width: auto;
      height: auto;
    
      max-width: 40px;
      max-height: 40px;
    
      border-radius: 5px;
    
      filter: drop-shadow(0 0 0.75rem black);
    }
  }
}

#project-wrapper{
  display: flex;
  gap: 10px;
  overflow: scroll;
  flex-shrink: 0;
  padding-bottom: 15px;
  
  &::-webkit-scrollbar {
    height: 7px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.486);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.836);
  }
  &::-webkit-scrollbar-corner {
    display: none;
  }

}
</style>