
<script setup lang="ts">

import Banner from '../components/Banner.vue';
import PreviewImages from '../components/PreviewImages.vue'
import ProjectContent from '../components/ProjectContent.vue'
import Footer from '../components/Footer.vue'

</script>

<template>

<div class="page">

  <Banner 
    title="Yo-Masta-Nag"
    banner="yo-masta-nag"
    download=""
    github="https://github.com/AchoDev/Yo-Masta-Nag/"
    createdOn="01 August, 2022"
    publishedOn="In development"
  />

  <PreviewImages
    base="ama"
    trailer=""
    :images = "[
      'good.png',
      'good.png',
      'good.png',
    ]"
  />

  
  <ProjectContent>

    <blockquote class="warning">
      This Project is still under development! <!-- See if there are any updates in the <button>info</button> section -->
    </blockquote>

    <h2>Description</h2>

    <p>
      Yo-Masta-Nag is a pretty fun card game, that was made with Lumina Engine. Fight and outplay your way through the story and build the most effective decks!
    </p>

    <h2>How to play</h2>

    <p>
      Before playing, you have to choose your deck made up of 6 cards. These can be made of anything you choose, but you can only choose a card once.
    </p>

    <p>There are three types of cards:</p>

    <p class="carddesc"><span class="blue">Blue Cards</span> These cards help your other cards in some way. They cannot harm enemy cards directly, instead they buff you or your cards</p>

    <p class="carddesc"><span class="green">Green Cards</span> These cards harm the enemy cards directly in some way. This is most likely a debuff</p>

    <p class="carddesc"> <span class="red">Red cards</span> These cards attack enemy cards directly. They don’t rely on effects, because they harm the enemy cards through direct attacks</p>

    <p>When the game begins, you are dealt 3 random cards. After that you have 3 Energy Points, which you can spend, while it’s your turn. Placing a card costs one point, but using a card costs more or less, depending on which card you choose. After you place a card, you can either spend your remaining points to use that card or place more cards. When you’re done, you can end your turn. To use a card, hold it with you cursor and drag it on whatever card you want to use it on. These can be either your cards or enemy ones, depending on the color.</p>
    <p>Each card has a specific amount of health. When it gets attacked enough, to loose all its health, it dies, looses a life and is sent back to your deck. All cards have 2 lives. Once they loose both, they die completely and are out of the game. Once all cards of a player dies, they loose.</p>

  </ProjectContent>

  <Footer/>

</div>

</template>

<style scoped>
.carddesc span {
  display: inline-block;
  width: 120px;
  text-align: center;
  border-radius: 5px;
}

.blue {
  background: rgb(0, 110, 255);
}

.green {
  background: rgb(8, 197, 8);
}

.red {
  background: rgb(219, 0, 0);
}
</style>