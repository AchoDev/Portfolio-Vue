
<script setup lang="ts">

import Banner from '../components/Banner.vue';
import PreviewImages from '../components/PreviewImages.vue'
import ProjectContent from '../components/ProjectContent.vue'
import Footer from '../components/Footer.vue'

</script>

<template>

<div class="page">

  <Banner 
    title="Lumina Engine"
    banner="lumina"
    download=""
    github="https://github.com/AchoDev/Lumina-Engine"
    createdOn="30 January, 2023"
    publishedOn="Still in development"
  />

  <PreviewImages
    base="lumina"
    trailer=""
    :images = "[
    ]"
  />

  <ProjectContent>

    <blockquote class="warning secret">
      This project is not ready to be presented yet! Stay tuned for updates!
    </blockquote>

    <h2>Description</h2>

    <p>
      Lumina Engine is a game engine that’s built on top of the PyGame. It’s specifically made like the Unity Engine, which makes Game Development as a whole a bit more restrictive, but way simpler.
    </p>

    <h2>Check out my other projects!</h2>

  </ProjectContent>

  <Footer/>

</div>

</template>