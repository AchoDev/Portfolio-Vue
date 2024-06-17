
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

    <!-- <div id="created-on" v-if="createdOn != ''">
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
    </div> -->

    <div id="status">
      <div class="status-banner" :class="statusName">
        <span>Status</span>
        
        <img v-if="status == StatusType.Planning" src="../statusimages/planning.png" :alt="statusName">        

        <h3>
          {{ statusName.toUpperCase() }}
        </h3>

        <p v-if="status == StatusType.Planning">
          This project is currently in PLANNING, which means there has been no development yet.
        </p>

      </div>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">

import { computed, defineProps } from 'vue';
import StatusType from './StatusType';

const props = defineProps<{
  title: string
  banner: string
  download: string
  github: string
  createdOn: string
  publishedOn: string
  status: StatusType
}>()

const statusName = computed(() => {
  switch(props.status) {
    case StatusType.Planning:
      return 'planning'
      break

    default:
      return ''
  }
})

</script>

<style scoped lang="scss">

  .status-banner {
    width: 275px;
    height: 35px;
    position: relative;
    
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: start;
    // align-items: center;
    font-size: 15pt;

    padding: 10px;
    border-radius: 5px;

    span, h3 {
      z-index: 1;
      margin: 0;

      // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    span {
      font-size: 10pt;
    }

    img {
      height: 130%;

      max-height: 150px;
      position: absolute;
      right: -4px;
      bottom: -8px;

      transition: ease-in-out .3s;
      
      $rotate-amount: 5deg;
      @keyframes idle {
        0% {
          transform: rotate(-$rotate-amount);
        }
        50% {
          transform: rotate($rotate-amount);
        }
        100% {
          transform: rotate(-$rotate-amount);
        }
      }

      animation-name: idle;
      animation-duration: 5s;
      animation-iteration-count: infinite;
    }

    &.planning {
      background: linear-gradient(105deg, gray, rgb(105, 105, 105));
    }

    transition: cubi 1s;
    &:hover {
      height: 300px;
    }
  }

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