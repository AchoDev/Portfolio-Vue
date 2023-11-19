

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

html {
  
}

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

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgb(42, 28, 38);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient( rgb(77, 57, 88), rgb(75, 40, 40));
  border-radius: 10px;
  transition: ease-out .2s;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient( rgb(113, 84, 129), rgb(113, 61, 61));
}

</style>
