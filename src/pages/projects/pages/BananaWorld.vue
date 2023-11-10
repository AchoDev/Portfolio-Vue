
<script setup lang="ts">

import Banner from '../components/Banner.vue';
import PreviewImages from '../components/PreviewImages.vue'
import ProjectContent from '../components/ProjectContent.vue'
import Footer from '../components/Footer.vue'

</script>

<template>

<div class="page">

  <Banner 
    title="Banana World"
    banner="banana-world"
    download=""
    github=""
    createdOn="One particular day"
    publishedOn="Eventually"
  />

  <PreviewImages
    base="banana-world"
    trailer=""
    :images = "[
    ]"
  />

  <ProjectContent>

    <blockquote class="warning secret">
      This project is currently a secret! Stay tuned for updates! <!-- See if there are any updates in the <button>info</button> section -->
    </blockquote>

  </ProjectContent>

  <Footer/>

</div>

</template>