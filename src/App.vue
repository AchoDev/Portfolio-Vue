

<template>
<div>
  <nav>
    <router-link to="/">
      <img src="assets/logo.png" alt="Logo">
    </router-link>

    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="projects">Projects</router-link>
      </li>
    </ul>
  </nav>

  <router-view></router-view>

</div>
</template>

<script setup lang="ts">

import 'vue-router'

</script>

<style scoped>

</style>
