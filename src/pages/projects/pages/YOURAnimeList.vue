
<script setup lang="ts">

import Banner from '../components/Banner.vue';
import PreviewImages from '../components/PreviewImages.vue'
import ProjectContent from '../components/ProjectContent.vue'
import Footer from '../components/Footer.vue'

</script>

<template>

<div class="page">

  <Banner 
    title="YOURAnimeList"
    banner="youranimelist"
    download=""
    github="https://github.com/AchoDev/YOURanimeList/"
    createdOn="30 May, 2023"
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

    <p>YOURAnimeList is an online Platform to list and share your favorite Animes with everyone around the world. </p>

    <h2>How to use</h2>

    <h3>Add animes to your list</h3>

    <p>After installing, add any Anime you want by pressing the <strong>"Search"</strong> button in the top right. The search page should open, where you'll find a search bar. Type the name of the anime and press <strong>"Search"</strong>. A bunch of different series should appear. Press the <strong>"Plus"</strong> button on the one you need. After that you can leave the search page by pressing the <strong>"Home"</strong> button in the top right. The anime you just added, should now be visible in your list.</p>

    <h3>Edit your list</h3>

    <p>To change the order of your list, just grab any anime and move it up or down</p>

    <h2>How it works</h2>

    <p>YOURAnimeList does not use a JSON file, like AchoMatico-Launcher or AmA. Rather it's my only application to use a database alongside a backend server. Loading your list, searching for animes, creating an account and so on all happens online. The Database I decided to use is MongoDB with NodeJS and ExpressJS as the backend. When making any request to the server, the client sends the actual request alongside the accoutn name and password. The server then checks, if the username and password match. If yes, the request will be granted, if no, then not.</p>

    <p>The animes are saved in their own collection. Each single anime is saved as an entry, with it's List-ID. So when you load your list, it looks for every anime, that matches your specific list-ID. This isn't very efficient though, since MongoDB supports Arrays natively.</p>

    <h2>Why I made it</h2>

    <p>I got the idea for the entire project, whilst shopping for groceries in italy. I had a week left to stay there, so I decided to try to finish this program in a week. Well I got pretty close but didn't get to the end until now. Maybe I'll continue one day, but keeping a server and database up costs lots of money, just for a project that nobody uses anyway. So what I'm planning is to just cut out all the database and social-media stuff and replace it with regular old JSON, so that the one user (me) can at least use it efficiently yeah</p>

    <div id="roadmap">
      <ul>
        <li>Switch from single entries to MongoDB Array</li>
        <li>Cut out databse</li>
        <li>Add multiple lists</li>
        <li>Switch to PetiteVue</li>
      </ul>
    </div>

  </ProjectContent>

  <Footer/>
  
</div>

</template>