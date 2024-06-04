
<template>

<div>

  <br>
  <br>
  <br>

  <center>
    <h1>Projects</h1>
    
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
  </center>

  <br>
  <br>
  <br>

  <hr>

  <br>
  <br>
  <br>

</div>


</template>


<script setup lang="ts">

import Project from './components/Project.vue';

import { projectList } from '../../projects.ts'

</script>

<style lang="scss">

hr {
  width: 80%;
  max-width: 1000px;
  border-color: rgba(255, 255, 255, 0.43);
}

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

.warning {
  background: red;
  color: white;
  height: 50px;

  display: grid;
  place-items: center;
  border-radius: 10px;
  border: 2px dashed yellow;
  font-size: 15pt;
}

.secret {
  background: gray;
  
  border: 2px solid black;
}

@media only screen and (max-width: 1600px) {
  #wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 700px) {
  .warning {
    /* width: 90% !important; */
    padding: 10px !important;
    margin: 0 !important;

    margin-top: 30px !important;
    margin-left: 30px !important;
    margin-right: 30px !important;
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