
<template>

<div id="container">
  
  <img id="background" :src="`/projects/${banner}/banner.png`" alt="banner">

  <h1 id="title">
    {{title}}
  </h1>

  <div id="bar">
    <a id="download" :href="download" target="_blank" v-if="download != ''">

      <img src="/download.png" alt="Download">
      DOWNLOAD
    </a>

    <a id="github" :href="github" target="_blank" v-if="github != ''">
      <img src="/github.png" alt="Download">
      Github Repo
    </a>
    <!-- <button id="web"></button> -->

    <div id="created-on" v-if="createdOn != ''">
      Created on
      <span class="date">
        {{createdOn}}
      </span>
    </div>
    <div id="published-on" v-if="publishedOn != ''">
      Published on
      <span class="date">
        {{publishedOn}}
      </span>
    </div>

    <div id="status">
      <div v-if="status == StatusType.Planning" class="status-banner">
        Planned
      </div>

      <div v-else-if="status == StatusType.Development" class="status-banner">

      </div>
      
      <div v-else-if="status == StatusType.OnHold" class="status-banner">

      </div>
      
      <div v-else-if="status == StatusType.Finished" class="status-banner">

      </div>
      
      <div v-else class="status-banner">

      </div>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">

import { defineProps } from 'vue';
import StatusType from './StatusType';

defineProps<{
  title: string
  banner: string
  download: string
  github: string
  createdOn: string
  publishedOn: string
  status: StatusType
}>()

</script>

<style scoped lang="scss">

  #container {
    width: 100%;
    height: 500px;
    background: red;

    background-attachment:local;
    background-position: center;

    position: relative;

    overflow: hidden;
  }

  #background {
    position: absolute;


    height: 100%;
    width: 100%;

    object-fit: cover;

    overflow: hidden;
  }

  #title {
    position: absolute;
    bottom: 100px;
    left: 25px;

    text-align: left;
    z-index: 1;
    margin: 0;

    background: rgba(0, 0, 0, 0.801);
    width: 400px;
    text-align: center;

    padding: 5px;
    border-radius: 10px;
  }

  #bar {
    position: absolute;
    bottom: 0;
    /* left: 20px; */

    width: 100%;
    height: 170px;

    justify-content: start;
    align-items: end;

    padding: 25px;

    display: flex;
    gap: 30px;

    background: linear-gradient(transparent, rgba(0, 0, 0, 0.599));
  }

  #bar #created-on, #published-on {
    display: flex;
    flex-direction: column;
  }

  #bar a {
    width: 275px;
    height: 55px;
    font-size: 15pt;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;

    transition: ease-out .1s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    text-decoration: none;
  }

  #bar a img {
    width: 25px;
    height: auto;
  }

  #bar a:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  #bar a:active {
    transform: scale(1.05);
  }

  #bar #download {
    background: linear-gradient(120deg, rgb(35, 111, 250), rgb(98, 166, 255));
  }

  #bar #download img {
    filter: invert(100%);
  }

  #bar #github {
    background: black;
  }

  @media only screen and (max-width: 700px) {
    #title {
      bottom: 300px !important;
      color: white;
      background: rgba(0, 0, 0, 0.845);
      border-radius: 15px;
      width: auto;
      padding: 20px;

      left: 10px;
    }

    #preview-images {
      padding: 0;
      margin: 0;

      margin-top: 50px;
      padding-bottom: 10px;
    }

    #bar {
      color: white;
      background: rgba(0, 0, 0, 0.549);
      flex-direction: column;
      align-items: start !important;
      justify-content: space-evenly;
      gap: 5px !important;
      height: 200px !important;

      width: 80dvw;
      border-radius: 20px;
      margin: 10px;
    }
  }

</style>