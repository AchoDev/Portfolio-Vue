
<template>

<div>
  <h1>About Me</h1>

  <h2>Hello!</h2>

  <p>I am <span id="name">Ahmed Asi</span>, also known as AchoDev. I'm passionate about many areas of programming. I express my passion through all my projects that I've spent countless hours meticulously and carefully crafting.</p>

  <p>I have a strong educational foundation in my field, as I study computer science at BHH in Hamburg in parallel to training to become a software developer one day. I'm very well versed in a range of technologies, tools and programming languages.</p>

  <hr>

  <h2>Skills</h2>

  <div id="skills">
    <Skill
      name="Flutter"
      img="flutter.png"
      color="#5fc9f8"
      :projects="[
        uttt
      ]"
    />

    <Skill
      name="Dart"
      img="dart.png"
      color="#0079b3"
      :projects="[
        uttt
      ]"
    />

    <Skill
      name="SocketIO"
      img="socketio.png"
      color="white"
      :projects="[
        uttt
      ]"
      text="black"
    />

    <Skill
      name="JavaScript"
      img="js.png"
      color="#f0dc4e"
      :projects="[
        kang2, ama, yal, amlauncher, 
      ]"
      text="black"
    />

    <Skill
      name="TypeScript"
      img="ts.png"
      color="#2d79c7"
      :projects="[
        amlauncher, portfolio
      ]"
    />

    <Skill
      name="MongoDB"
      img="mongodb.png"
      color="#4eaa40"
      :projects="[
        yal
      ]"
    />

    <Skill
      name="ThreeJS"
      img="threejs.png"
      color="white"
      :projects="[
        portfolio
      ]"
      text="black"
    />

    <Skill
      name="ElectronJS"
      img="electron.png"
      color="#272a37"
      :projects="[
        amlauncher, yal, ama
      ]"
    />

    <Skill
      name="VueJS"
      img="vue.png"
      color="#3fb984"
      :projects="[
        portfolio
      ]"
    />

    <Skill
      name="Python"
      img="python.png"
      color="#3474a4"
      :projects="[
        lumina, ymn
      ]"
    />

    <Skill
      name="Unity-Engine"
      img="unity.png"
      color="black"
      :projects="[
        bw
      ]"
    />

    <Skill
      name="C#"
      img="cs.png"
      color="#a27add"
      :projects="[
        bw
      ]"
    />

    <Skill
      name="Docker"
      img="docker.png"
      color="#099cec"
      :projects="[
        bw
      ]"
    />

    <Skill
      name="Rust"
      img="rust.png"
      color="#f74b00"
      :projects= "[
      ]"
    />

    <Skill
      name="C"
      img="c.png"
      color="#649ad2"
      :projects="[
      ]"
    />

    <Skill
      name="C++"
      img="cpp.png"
      color="#649ad2"
      :projects="[
      ]"
    />

  </div>
</div>

</template>

<script setup lang="ts">

import Skill from './Skill.vue';
import projectType from './projectType'


const ama: projectType = {
  name: 'AmA',
  color: 'orange',
  path: 'ama'
}

const uttt: projectType = {
  name: 'Ultra TicTacToe',
  color: 'rgb(250, 68, 55)',
  path: 'ultra-tictactoe'
}

// const shopup: projectType = {
//   name: 'Shop-Up',
//   color: 'green',
//   path: 'shopup'
// }

const kang2: projectType = {
  name: 'Kang2',
  color: 'linear-gradient(0.9turn, rgb(255, 115, 0), red)',
  path: 'kang2'
}

const yal: projectType = {
  name: 'YOURAnimeList',
  color: 'rgb(91, 152, 213)',
  path: 'youranimelist'
}

const lumina: projectType = {
  name: 'Lumina Engine',
  color: 'rgb(152, 68, 212)',
  path: 'lumina'
}

const amlauncher: projectType = {
  name: 'AM-Launcher',
  color: 'linear-gradient(120deg, rgb(121, 149, 184), rgb(61, 116, 235))',
  path: 'am-launcher'
}

const ymn: projectType = {
  name: 'Yo-Masta-Nag',
  color: 'rgb(54, 199, 56)',
  path: 'yo-masta-nag'
}

const bw: projectType = {
  name: 'Banana World',
  color: 'rgb(255, 226, 61)',
  path: 'banana-world',
  text: 'black',
}

const portfolio: projectType = {
  name: 'This website',
  color: 'linear-gradient( 100deg, #21398f, #6c2a82, #7d1414 )',
  path: 'portfolio'
}


</script>