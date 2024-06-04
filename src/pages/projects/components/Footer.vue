
<template>

<footer>

  <h2>Check out my other Projects!</h2>

  <div id="suggestions">
    <Project 
      v-for="project in [randomProject1, randomProject2]"
    
      :name="project.name"
      :desc="project.desc"
      :path="project.path"
      :color="project.color"
      :text="project.text ?? 'white'"
    />
  </div>

</footer>


</template>

<script setup lang="ts">

import Project from './Project.vue';
import { projectList } from '../../../projects';
import { ref } from 'vue';

const getRandomProj = () => projectList[Math.floor(Math.random() * projectList.length)]

const randomProject1 = ref(getRandomProj())
const randomProject2 = ref(getRandomProj())

while(randomProject1.value === randomProject2.value) {
  randomProject2.value = getRandomProj()
}
</script>

<style lang="scss">

  footer {
    // display: flex;
    // justify-content: center;
    // flex-wrap: wrap;
    // flex-direction: row;

    text-align: center;

    gap: 30px;
    max-width: 100%;
    margin: 0;
    padding: 0;

    height: auto;
    margin-bottom: 50px;

    padding: 50px;
    padding-top: 20px;
  }

  #suggestions {
    padding-right: 50px;
    padding-left: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  #suggestions a {
    max-width: 600px;
  }

  footer > div > div a{
    height: 250px !important;
    max-width: 480px !important;
  }

  footer .name {
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 950px) {
    footer > div > div a{
      width: 300px !important;
    }

    #suggestions {
      padding: 0;
      flex-direction: column;
    }
  }

</style>