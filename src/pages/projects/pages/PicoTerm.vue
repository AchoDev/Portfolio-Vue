
<script setup lang="ts">

import Banner from '../components/Banner.vue';
import PreviewImages from '../components/PreviewImages.vue'
import ProjectContent from '../components/ProjectContent.vue'
import Footer from '../components/Footer.vue'

</script>

<template>

<div class="page">

  <Banner 
    title="Pico-Term"
    banner="pico-term"
    download="https://1drv.ms/u/s!AovQFIBO4x5ZiqMqWkDZDih0hTtI_A?e=Pul2Xg"
    github="https://github.com/AchoDev/Pico-Term"
    createdOn="10 February, 2024"
    publishedOn="15 February, 2024"
  />

  <PreviewImages
    base="pico-term"
    trailer=""
    :images = "[
      'preview.png',
    ]"
  />

  <ProjectContent>

    <h2>Description</h2>

    <blockquote class="warning">
      This page is under construction!
    </blockquote>

    <!-- <h2>Roadmap</h2>

    <h3>Version 1.0</h3>

    <div id="roadmap">
      <ul>
        <li class="checked">"Add" button, of course</li>
        <li class="checked">Change to PetiteVue</li>
        <li class="checked">Add compact list mode for sidebar</li>
        <li class="checked">Use program icon as default picture</li>
        <li class="checked">Add "last opened" date</li>
      </ul>
    </div> -->

  </ProjectContent>

  <Footer/>

</div>

</template>