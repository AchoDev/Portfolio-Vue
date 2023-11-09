

<template>
<div>
  <NavigationBar />

  <router-view></router-view>

</div>
</template>

<script setup lang="ts">

import NavigationBar from './components/NavigationBar.vue';

import 'vue-router'


document.documentElement.dataset.scroll = window.scrollY.toString();
document.addEventListener('scroll', (_) => {
  document.documentElement.dataset.scroll = window.scrollY.toString();
}, { passive: true });

</script>

<style>

body {
  margin: 0;
  padding: 0;

  height: 100%;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  background: linear-gradient(
    10deg,
    rgb(12, 21, 53),
    rgb(24, 9, 29),
    rgb(48, 7, 7)
    
  );
  background-attachment: fixed;
  background-size: cover;

  font-family: 'Nunito', sans-serif;

  color: white;
}



</style>
