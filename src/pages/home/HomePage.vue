<template>
  
  <div id="home">


    <div id="control" v-if="debugControls === true">
      <div>
        <button id="frontbutton"> &HorizontalLine; </button>
        <button id="leftbutton"> &leftarrow; </button>
        <button id="upbutton"> &uparrow; </button>
        <button id="downbutton"> &downarrow; </button>
        <button id="rightbutton"> &rightarrow; </button>
        <button id="backbutton"> &sdot; </button>
    
    
        <button id="printbutton"> print </button>
        <button id="togglebutton"> toggle </button>
        <button id="toggledebugbutton"> toggle cube </button>
      </div>
    
      <div>
        <button id="turnfrontbutton"> front </button>
        <button id="turnleftbutton"> &circlearrowleft; </button>
        <button id="turnupbutton"> &UpArrowBar; </button>
        <button id="turndownbutton"> &DownArrowBar; </button>
        <button id="turnrightbutton"> &circlearrowright; </button>
        <button id="turnbackbutton"> back </button>
      </div>

      <div>
        <button id="scalexbutton"> &leftrightarrow; </button>
        <button id="minusscalexbutton"> &rightarrow; &leftarrow; </button>
        <button id="scaleybutton"> &updownarrow; </button>
        <button id="minusscaleybutton"> &DownArrowUpArrow; </button>
        <button id="scalezbutton"> &CircleDot; </button>
        <button id="minusscalezbutton"> &sdot; </button>
      </div>
    
      <div>
        <input type="range" min="10" max="100" value="10" id="debugrange">
      </div>
    
      <div>
        <input type="range" min="1" max="10000" value="10" id="debugintensity">
      </div>
    </div>

  
  <!-- <div id="menu">
    <button @click="debugControls = !debugControls"> Toggle debug controls </button>
    <button> Download .glb Model </button>
    <button> Hide Camera Controls </button>

  </div> -->
  
  <div id="information">
    <span>Drag to move the camera around</span>
  </div>

  <div id="movement">

    <button>
      <img src="./arrow.png">
    </button>
    
    <button>
      <img src="./arrow.png">
    </button>

    <button>
      <div id="circle">&nbsp;</div>
    </button>
    
    <button>
      <img src="./arrow.png">
    </button>
    
    <button>
      <img src="./arrow.png">
    </button>

    <button>
      <img src="./frontarrow.png">
    </button>

    <button>
      <img src="./backarrow.png">
    </button>

  </div>
</div>

</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { attachDOMElements } from './home.ts'

onMounted(() => {
  attachDOMElements()
})

const debugControls = ref<boolean>(false)

</script>

<style scoped lang="scss">

  #home {
    height: 100dvh;
    width: 100vw;  
    display: grid;
    place-items: center;
    
    canvas {
      width: auto !important;
      height: 100vh !important;
    }
  }



  #control {
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    bottom: 0;
    align-items: center;
    gap: 10px;

    display: none;
  }

  #information {
    position: absolute;
    bottom: 0;

    color: rgba(255, 255, 255, 0.31);
  }

  #menu {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
  }

  #movement {
    position: absolute;
    height: 130px;
    width: 130px;

    bottom: 10px;
    left: 10px;
    /* background: white; */
    
    button {
      position: absolute;
      width: 35px;
      height: 35px;
      border: none;
      border-radius: 5px;

      font-size: 30pt;

      background: rgba(255, 255, 255, 0.173);

      padding: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: ease-out .1s;

      user-select: none;
      
      
      &:hover {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.418);

        #circle {
          background: rgb(0, 0, 0);
        }
      }

      &:active {
        width: 37px;
        height: 37px;
        background: rgba(112, 112, 112, 0.608);
      }

      #circle {
        width: 85%;
        height: 85%;
        border-radius: 100%;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.566);
      }
      img {
        height: 100%;
        width: 100%;
        pointer-events: none;
      }
    }

    // nth children
    button {
      &:nth-child(1) {
        top: 0;
        left: 50%;
        transform: translateX(-50%) rotate(-90deg);
      }
      
      &:nth-child(2) {
        top: 50%;
        left: 0;
        transform: translateY(-50%) rotate(180deg);
      }

      &:nth-child(5) {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) rotate(90deg);
      }

      &:nth-child(3) {
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    
      &:nth-child(4) {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      
      &:nth-child(6) {
        right: 0;
        top: 0;
        /* transform: translateY(-50%); */
      }
  
      &:nth-child(7) {
        left: 0;
        top: 0;
        /* transform: translateY(-50%); */
      }
    }
    
  }

  @media only screen and (max-width: 700px) {
    #movement {

      width: 175px;
      height: 175px;

      left: 50%;
      right: 50%;

      transform: translate(-50%);
    
      button {
        width: 50px;
        height: 50px;

        border-radius: 15px;

        background: gray;
      }
    }

    #information {
      display: none;
    }
  }
</style>