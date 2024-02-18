
<template>

<router-link
  id="project"
  :style="`background: ${props.color}`"
  :to="props.path"
>

  <div id="darkener">
    &nbsp;
  </div>

  <img :src="'/projects/' + props.path + '/main.png'" :alt="props.path">

  <div class="name">
    <span :style="`background: ${color}; color: ${text ?? 'white'}`">
      {{ name }}
    </span>
  </div>
  <div id="overlay">
    {{ desc }}
  </div>
</router-link>

</template>

<script setup lang="ts">

import { defineProps } from 'vue';

const props = defineProps<{
  name: string,
  desc: string,
  path: string,
  color: string,

  text?: string,
}>()

</script>

<style scoped lang="scss">


#project {
  width: 100%;
  height: 300px;
  background: orange;
  position: relative;

  overflow: hidden;
  cursor: pointer;

  border-radius: 10px;

  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) .6s;

  display: flex;
  justify-content: center;
  align-items: center;
  
  .name {
    font-size: 40pt;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    display: grid;
    place-items: center;
  
    z-index: 12;
    
    transition: cubic-bezier(0.77, 0, 0.175, 1) .5s;

    span {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      background: white;
      border-radius: 10px;
      padding: 0 20px 0 20px;
      /* color: orange; */
    


      -webkit-background-clip: text;
    }
  }

  img {
    transition: ease-out .3s;
    width: auto;
    height: auto;
  
  
    max-height: 80%;
    max-width: 95%;
  }
  
  #darkener {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: black;
    opacity: 0;
    transition: ease-out .25s;
  }

  #overlay {

    z-index: 11;
  
    transition: cubic-bezier(0.77, 0, 0.175, 1) .5s;
    border-radius: 5px;
  
    position: absolute;
    height: 100px;
    bottom: -250px;
    // width: 100%;
    background: rgb(255, 255, 255);
  
    color: black;

    text-align: justify;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-left: 30px;
    padding-right: 30px;
  }
  
  &:hover {
    transform: scale(1.07);
    box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
  
    #overlay {
      bottom: 0;
    }

    #darkener {
      opacity: .5;
    }

    img {
      transform: scale(1.15);
      filter: blur(5px);
    }

    .name {
      bottom: 40%;
    }
  }
}
</style>