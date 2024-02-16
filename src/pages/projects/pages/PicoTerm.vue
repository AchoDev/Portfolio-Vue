
<script setup lang="ts">

import Banner from '../components/Banner.vue';
import PreviewImages from '../components/PreviewImages.vue'
import ProjectContent from '../components/ProjectContent.vue'
import Footer from '../components/Footer.vue'

</script>

<template>

<div class="page">

  <Banner 
    title="Pico-Term"
    banner="pico-term"
    download="https://1drv.ms/u/s!AovQFIBO4x5Ziqo7r2KALTBCmNm4Rg?e=Hhihpk"
    github="https://github.com/AchoDev/Pico-Term"
    createdOn="10 February, 2024"
    publishedOn="15 February, 2024"
  />

  <PreviewImages
    base="pico-term"
    trailer=""
    :images = "[
      'preview.png',
    ]"
  />

  <ProjectContent>

    <!-- <h2>Description</h2> -->

    <!-- <blockquote class="warning">
      This page is under construction!
    </blockquote> -->

    <h2>Description</h2>

    <p>Pico is a lightweight, terminal-based, modular text editor. It's best used for creating normal text files or configs with Pico's quick editing mode and simple design. </p>

    <h2>How to install</h2>

    <p>To install pico, just get the EXE file from the Repository and run that.</p>

    <p>You can optionally add the exe to your System32 folder to run it instantly from any terminal by rust running:</p>

    <center>
      <code> /> pico [textfile]</code>
    </center>

    <h2>How to use</h2>

    <p>You can either just open the exe file to start or run it from cmd or powershell. </p>

    <p>As soon as you start it, you'll be greeted by the default interface.</p>

    <center>
      <img src="/projects/pico-term/default.png" alt="Default">
    </center>
    
    <p>From here, you can start typing with the usual text editor controls.</p>
    
    <center>
      <img src="/projects/pico-term/typing.png" alt="Editor">
    </center>
    
    <p>Now, as soon as you need to either edit already existing lines or quickly move around, enter <b>Edit Mode</b>, by pressing <code>ALT + J</code></p>
    
    <center>
      <img src="/projects/pico-term/editmode.png" alt="Editor">
    </center>
    
    <p><b>Edit Mode</b> offers a suite of keybinds and controls to edit and move around your file quickly. The controls are: </p>
    
    <div class="list">
      <ul>
        <li><code>Q</code> to switch back to write mode</li>
        <li><code>I J K L</code> to move the cursor</li>
        <li><code>ALT + J / K</code> to move to the next word</li>
        <li><code>ALT + I / K</code> to move the current line up and down</li>
        <li><code>U / O</code> to move to the start / end of the line</li>
      </ul>
    </div>

    <p>After switching back with <code>Q</code>, you can save the file with <code>CTRL + S</code>. If you opened an already existing file, then that will be saved to. If not, then the file will be saved as <code>new_file.txt</code> to the current directory.</p>

    <center>
      <img src="/projects/pico-term/saving.png" alt="Editor">
    </center>
    <br>
    <center>
      <img src="/projects/pico-term/textfile.png" alt="Editor">
    </center>

    <p>And that's all you need to use!</p>

    <h2>How it works</h2>

    <p>Pico is completely written in <b>Rust</b>. To move the cursor around, register input and color text, I used the <code>crossterm</code> crate. It's basically just there for all these terminal things.</p>

    <h3>Write mode</h3>

    <p>Every time an input is registered, the program checks what key was pressed and based on that does SOMETHING</p>

    <p>If it's one of the arrow keys then it'll just increase or decrease either the current line or current character, which are both just numbers</p>

    <p>All the lines are seperately stored in a Vector of Strings. If the user provided a file, then the program will read that file, split it into it's lines and initialize the lines variable with those.</p>

    <p>As soon as some key with a letter or number is pressed, if the user is NOT in Edit Mode, it'll add whatever letter was pressed to whatever line the they're currently at, at whatever character they're currently at. Where the current line and character are basically just coordinates for the cursor, from which the program knows where to place the new characters at. To have it so the user can write inbetween words, as soon as you type whatever line they're at get's sliced from 0 to the current character. To that it then adds the new typed character and after that the sliced current line again, but this time from the current character index to the line length, so just the remaining line. </p>

    <img src="" alt="">

    <p>All other actions, like pressing enter or backspace work similar to that. Crossterm let's you check the modifier keys along the actual keys, which is used to first check if <code>ALT</code> and <code>J</code> have been pressed at the same time. If yes, then the current mode (which is also stored in a variable), is changed to <b>Edit Mode</b>.</p>

    <h3>Edit mode</h3>

    <p>As soon as the user is in Edit mode, any keypresses will not be added to the lines. This works by having this be the last statement of a if-else chain, which get's cut off as soon as it sees that the current mode is in fact edit mode. </p>

    <p>Here, the pico checks for a bunch of important keys, which are just <code>I J K L</code> and  <code>U O</code>. What they do is self-explanatory, but for efficiency purposes they use the same functions as the arrow keys, using mutable references with <code>&mut</code>.</p>

    <p>The only functionality that wasn't as simple the others is moving to the next and previous word. Here pico will first move the cursor to the right and left, while the current character is a whitespace. Then it does the same thing again but while the current character is NOT a whitespace. This is because pico needs to first find the next word then move either in front or at the end of it. </p>

    <h3>Saving && loading</h3>

    <p>After startup, pico will read the file, if one was specified and save the file name in a variable. As soon as you press <code>CTRL + S</code> pico saves to the lines to whatever the file name is. If no file with that name exists, one will be automatically created.  </p>

    <p>That's basically it. Since it's only around 500 lines of code the program is very simple. </p>

    <h2>Why I made it</h2>

    <p>The main reason was actually to learn Rust. I tried to do something with Rust before but I majorly underestimated the language and planned this other thing way out of what I could realistically do.</p>

    <p>So that experience before actually repelled me from using Rust for these past months. But until this day I've heard so many good things about it and how it's the best language ever. It consistently ranks as <b>The most loved language</b> in the Stack Overflow Developer Survey.</p>

    <p>So I decided to give Rust a shot again. Recently I got this Idea for a clone of something like Vim or Emacs. So I figured that using that this was the perfect opportunity to use Rust again. So I did and it went better than expected. Of course, I ran into a bunch of problems regarding the borrow checker and whatnot, but I got over them and now have a way better understanding of why Rust does the things it does and how memory managment works in other languages like C</p>

    <p>So, is Rust the best language of all time? Definitely not. It's akward to use and so rigid, it feels like it's made of steel. The language is also so strict about it's rules, it feels like the borrow checker is breathing down your neck, just waiting for the next small mistake to put the red squiggly lines below something that SEEMS fine at first. </p>

    <p>I do understand why this has to be done though. Having a systems language that has <b>no garbage collector</b> is <b>memory safe</b> WITHOUT manual memory managment must compromise flexibility for rigidness in order to be what it is. If the borrow checker wouldn't enforce it's rules as strictly as it does, it wouldn't even make sense. Now if i were to choose, I'd much rather use Rust than C. But I'd still much rather use a language with a garbage collector and lose a bit of efficiency so I don't have to pray that the red squiggly lines appear as soon as I write a function.</p>

    <h2>Conclusion</h2>

    <p>So in the end, I learnt a lot, made a new project that is actually useful. I'll probably use it a lot myself and it's something I'm very proud of, even though it's not much. Rust is a great language, but not really for me and I'm glad I tried it again. But if I need to do systems programming (for whatever reason) I'll definitely use Rust. Pico turned out better and faster than expected, taking me only 3 days to make. There's still a lot of things that could be added, but I'm happy with what it is now and it'll probably stay like this. If there ever will be an update, then the new stuff is going to be one of the things of the roadmap. That's it.
    </p>

    <h2></h2>
    <h3>Roadmap</h3>

    <div id="roadmap">
      <ul>
        <li>Cut, copy and paste</li>
        <li>Settings and menu mode</li>
        <li>Delete entire lines</li>
        <li>Move to start / end of line</li>
        <li>Move up and down in file</li>
        <li>Change lines displayed on screen</li>
        <li>Syntax highlighting</li>
      </ul>
    </div>

  </ProjectContent>

  <Footer/>

</div>

</template>