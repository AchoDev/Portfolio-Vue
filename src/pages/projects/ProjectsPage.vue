
<template>

<div>
  <center>
    <h1>Projects</h1>
  </center>

  <div id="wrapper">
    <Project
      v-for="project in projectList"

      :name="project.name"
      :desc="project.desc"
      :path="project.path"
      :color="project.color"
      :text="project.text ?? 'white'"
    />
  </div>

</div>


</template>


<script setup lang="ts">

import Project from './components/Project.vue';

import projectList from './projectList.ts'

</script>

<style lang="scss">
#wrapper {

  width: 85%;

  flex-direction: row;
  flex-wrap: wrap;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* align-items: start; */
  justify-content: left;

  gap: 50px;
}

@media only screen and (max-width: 1600px) {
  #wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 1050px) {
  #wrapper {
    grid-template-columns: repeat(1, 1fr);
  }

  .name span {
    font-size: 28pt;
  }
}
</style>