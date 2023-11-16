
<script setup lang="ts">

import Banner from '../components/Banner.vue';
import PreviewImages from '../components/PreviewImages.vue'
import ProjectContent from '../components/ProjectContent.vue'
import Footer from '../components/Footer.vue'

</script>

<template>

<div class="page">

  <Banner 
    title="AchoMatico"
    banner="am-launcher"
    download="https://1drv.ms/u/s!AovQFIBO4x5ZiqMqWkDZDih0hTtI_A?e=Pul2Xg"
    github="https://github.com/AchoDev/AchoMatico-Launcher"
    createdOn="10 April, 2022"
    publishedOn="Still in development"
  />

  <PreviewImages
    base="am-launcher"
    trailer=""
    :images = "[
      'preview.png',
    ]"
  />

  <ProjectContent>

    <h2>Description</h2>

    <p>AchoMatico-Launcher is a desktop application, that lists and launches all applications you need. </p>

    <h2>How to use</h2>

    <h3>Adding applications</h3>

    <p>After installing and starting the program, you should be able to see the normal interface. To add an application, press the <strong>"Add"</strong> button on the top left corner. A file selector should appear. Navigate to either a shortcut or an exe file to whatever program you want. After that, you'll have one application in your list.</p>

    <h3>Editing</h3>

    <p>To change title, banner, image and so on of your app, press the <strong>"Edit"</strong> button, and change anything you need. After that either press <strong>"Save"</strong> to save your changes or <strong>Cancel</strong> to revert all changes you made.</p>

    <h2>How it works</h2>

    <p>Under the hood, the program just stores all saves applications as JSON-Objects in a single JSON file. Every entry has it's name, description, size, image paths and of course file path. When you open an application, all the program does is just call a cmd-command to open the program.</p>

    <h2>How I made it</h2>

    <p>In the beginning I wanted to have a central place where all my shortcuts are. Before, they were all spread around various folders in my computer. The only program that could theoretically do that was Steam, as far as I knew back then. So I decided to just do it myself. After a bit of research, I found out about ElectronJS and began my project. Since I wasn't very used to JavaScript in or frontend frameworks in general, it took a bit of time. A friend helped me out and programmed some things too. The Program is basically done, everything that's left is just the "Add" button.</p>

    <h2>Roadmap</h2>

    <h4>1.0</h4>

    <div id="roadmap">
      <ul>
        <li class="checked">"Add" button, of course</li>
        <li class="checked">Change to PetiteVue</li>
        <li class="checked">Add compact list mode for sidebar</li>
        <li class="checked">Use program icon as default picture</li>
        <li class="checked">Add "last opened" date</li>
      </ul>
    </div>

    <h4>1.1</h4>

    <div id="roadmap">
      <ul>
        <li>Change order of apps</li>
        <li>Change color of app background</li>
        <li>Something new..?</li>
      </ul>
    </div>

  </ProjectContent>

  <Footer/>

</div>

</template>