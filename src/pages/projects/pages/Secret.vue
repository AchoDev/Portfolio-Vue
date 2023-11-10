
<script setup lang="ts">

import Banner from '../components/Banner.vue';
import PreviewImages from '../components/PreviewImages.vue'
import ProjectContent from '../components/ProjectContent.vue'
import Footer from '../components/Footer.vue'

</script>

<template>

<div class="page">

  <Banner 
    title="Secret Project"
    banner="secret"
    download=""
    github=""
    createdOn="Who knows?"
    publishedOn="Hm"
  />

  <PreviewImages
    base="secret"
    trailer=""
    :images = "[
    ]"
  />

  <ProjectContent>

    <blockquote class="warning secret">
      This is a secret project....
    </blockquote>

  </ProjectContent>

  <Footer/>

</div>

</template>