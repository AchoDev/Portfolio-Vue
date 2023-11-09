
<template>

<div>
  <center>
    <h1>Projects</h1>
  </center>

  <div class="wrapper">

    <Project 
      name="AmA"
      desc="Digital vocabulary book && note taking desktop application, made for language learners, who like writing down learned words and keeping them organized"
      path="ama"
      color="orange"
    />

    <Project 
      name="Ultra TicTacToe"
      desc="Super TicTacToe but CINEMATIC or TicTacToe where you actually need to think. Multiplayer with friends, profile pictures, multiple maps, exciting music and much more!"
      path="ultra-tictactoe"
      color="rgb(250, 68, 55)"
    />

    <Project 
      name="Kang2"
      desc="Extremeley rudementary, but fun programming language on top of JavaScript.Easy to understand, how it works, due to its sheer simplicity in design"
      path="kang2"
      color="linear-gradient(0.9turn, rgb(255, 115, 0), red)"
    />

    <Project 
      name="YOURanimeList"
      desc="A program that makes it uncomplicated to list your favorite Animes and share them with other users. Not bloated with all kinds of pages and whatnot. Just YOURanimeList and the others"
      path="youranimelist"
      color="rgba(91,152,213,255)"
    />

    <Project 
      name="Lumina Engine"
      desc="PyGame game-engine, specifically designed, to make game creation very similar to the Unity-Engine, with its component-driven architecture. Graphics, sound design, animations and realistic physics with Box2D!"
      path="lumina"
      color="rgb(152, 68, 212)"
    />

    <Project 
      name="AM-Launcher"
      desc="Launcher for all kinds of different apps. Add them and organize them on your own volition, to always have a place where you will find your apps."
      path="am-launcher"
      color="linear-gradient(120deg, #7995b8, #3d74eb)"
    />

    <Project 
      name="Yo-Masta-Nag"
      desc="Fun and unbalanced card-game. Play locally against a friend or an AI. With an original ruleset, an... interesting story and original cards! Powered by Lumina Engine"
      path="yo-masta-nag"
      color="rgb(54, 199, 56)"
    />

    <Project 
      name="Banana World"
      desc="A Game about you (a banana) being kidnapped from a dangerous monkey (General Monke). Jump and evade your way through all these dangerous levels, to combine the key to get back to your family and defeat General Monke!"
      path="banana-world"
      color="rgb(255, 226, 61)"

      text="black"
    />

    <Project 
      name="Secret Project"
      desc="This is a very secret project. It will be very useful, once it is finished"
      path="secret"
      color="#05a85f"
    />

    

  </div>

</div>


</template>


<script setup lang="ts">

import Project from './Project.vue';

</script>

<style lang="sass">

</style>