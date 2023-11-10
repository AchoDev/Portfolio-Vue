<script setup lang="ts">

import Banner from '../components/Banner.vue';
import PreviewImages from '../components/PreviewImages.vue'
import ProjectContent from '../components/ProjectContent.vue'
import Footer from '../components/Footer.vue'

</script>

<template>

<div class="page">

  <Banner 
    title="AmA"
    banner="ama"
    download=""
    github="https://github.com/AchoDev/AmA/"
    createdOn="18 October, 2022"
    publishedOn="3 November, 2022"
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

    <h2>Description</h2>

    <p>AmA is a Desktop Application, which acts as a digital vocabulary book. You can add as many words and notes, edit them and give them tags to further organize all the words you learned. Gone are the days of tirelessly writing down each word, trying desperetaly to organize them somehow, while inevitebly awaiting the day you run out of space, IF you use AmA!</p>

    <h2>How to use</h2>

    <p>After intalling and starting the program, you should be able to see the main interface. This is where you'll see all your saved words, organized alphabetically.</p>

    <h3>Vocabulary</h3>

    <p>
      <b>The top row</b> consists of each letter in your alphabet. When you click on one of them, you'll only be able to see words that start with that exact letter
    </p>

    <p><strong>To create a new word</strong>, press on the <strong>+</strong> icon in the bottom right corner. After that, enter the desired word in both languages, select a tag if you need one, and press <strong>"Add word"</strong></p>

    <p>Tags are used to tag a specific group of words, for example adjectives, nouns or difficult words. <strong>To create a new tag</strong>, press the <strong>"Tags"</strong> button in the top right corner. A menu with all your tags and pages should appear. Press on the <strong>"New Tag"</strong> button to create a tag, then press the <strong>"Edit"</strong> button, then the <strong>"Pencil"</strong> button above your new tag, to give your new tag a name. After that, you can use that tag when creating a new word or edit an already existing word and give it that tag.</p>

    <p><strong>To edit a word</strong>, go into the main page and press the <strong>"Pencil"</strong> button next to the desired word. Then you'll be able to see two textboxes and one selector. The first and second textbox represent the word in both languages; the selector changes the words tag. After making your changes, you can either save them, by pressing the <strong>"save"</strong> icon on the right, or you can discard them, by pressing the <strong>"X"</strong> icon next to it.</p>

    <h3>Pages</h3>

    <p>Pages are used just to write down all kinds of notes. They don't restrict you in any way, unlike the vocabulary section, but you have to organize them yourself.</p>

    <p><strong>To create a page</strong>, press the <strong>"Tags"</strong> button in the top right corner. Then press the <strong>"Create new page"</strong> button in the top right corner of the menu. After that, a new page should appear in your list. Press the <strong>"Edit"</strong> button, then the <strong>"Pencil"</strong> button on your new page, to give it a name.</p>

    <p>Open the page by just pressing on it, in the <strong>Tags Menu</strong>. After you do that, all the words, the top row and the <strong>+</strong>-button should all disappear and you'll be left with just a blank page. To write something down, just click this page once and write away! To save this page, press the new <strong>"Save"</strong> button in the bottom left corner. Keep in mind, that <strong>Pages DO NOT save automatically! You have to save them manually with the "Save" button</strong>.</p>

    <h3>Saving and loading</h3>

    <p>To save either your words, tags or pages, press the <strong>"Menu"</strong> icon on the top right. After that press <strong>"Saving and loading"</strong>. A bunch of textboxes should appear to guide you to what you need to save. After that, you will see a long section of text. <strong>Copy this</strong> and store it somewhere safe, this is your "Save file".</p>

    <p>So load something, follow the same process, until you land on a prompt asking you to input some text. Take the text from your <strong>save from before</strong> and input it. After that press <strong>"load"</strong>. Your words should now be loaded. If not, press <strong>"CTRL" + "R"</strong>.</p>

    <h2>How it works</h2>

    <p>AmA is an Electron application. Takes HTML&&CSS files and bundles them together with the Chromium browser as an executable. So under the hood, it's basically just a website. There are no frontend libraries or Typescript used, which was a mistake. The app does not connect to a server, instead everything is saved locally in three files:</p>

    <div class="list">
      <ol>
        <li><strong>dictionary.json</strong></li>
        <li><strong>tags.json</strong></li>
        <li><strong>pages.json</strong></li>
      </ol>
    </div>


    <p>The moment you create a word, dictionary.json is read and parsed. Every word is is defined by three values</p>

    <!-- <code> 
    {
        "sp": "",
        "de": "",
        "ar": "",
        "tag": "rregi"
    }
    </code> -->

    <pre class="codewrapper">
      <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(171, 178, 191); font-weight:400;">{</span>
        <span style="color:rgb(209, 154, 102); font-weight:400;">&quot;sp&quot;</span><span style="color:rgb(171, 178, 191); font-weight:400;">:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;&quot;</span><span style="color:rgb(171, 178, 191); font-weight:400;">,</span>
        <span style="color:rgb(209, 154, 102); font-weight:400;">&quot;de&quot;</span><span style="color:rgb(171, 178, 191); font-weight:400;">:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;&quot;</span><span style="color:rgb(171, 178, 191); font-weight:400;">,</span>
        <span style="color:rgb(209, 154, 102); font-weight:400;">&quot;ar&quot;</span><span style="color:rgb(171, 178, 191); font-weight:400;">:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;&quot;</span><span style="color:rgb(171, 178, 191); font-weight:400;">,</span>
        <span style="color:rgb(209, 154, 102); font-weight:400;">&quot;tag&quot;</span><span style="color:rgb(171, 178, 191); font-weight:400;">:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;rregi&quot;</span>
    <span style="color:rgb(171, 178, 191); font-weight:400;">}</span></code></pre>

    <p>sp stands for: <strong>Spanish</strong>, de stands for: <strong>German</strong>, ar stands for <strong>Arabic</strong> and last but not least, the words tag. After adding the new word, the file gets rewritten. This works like this for tags and pages too. Upon creation and saving the same happens for both of them.</p>

    <p>Animation and transition wise, everything is done with the CSS <strong>transition</strong> in combination with <strong>transform</strong>.</p>

    <p>To saving all your words, the program basically just reads the important files and gives them back as text. For loading it's the same, but backwards. So you input your json and the program reads that, and rewrites the important files. This does not check, if the json is valid or not, which can lead to problems, if the user copied it wrong.</p>

    <h2>Why I made it</h2>

    <p>This project was originally made for my father, as he tried to find some application, that digitilizes his vocabulary book. I tried to find something, but my search went nowhere, so I decided to make it for him. A program like that seemed very useful, I don't think it exists anywhere and it'd be a learning experience.</p>

    <h2>Roadmap</h2>

    <div id="roadmap">
      <ul>
        <li>Switch to PetiteVUE (reacticity)</li>
        <li>Switch to Typescript</li>
        <li class="">Add Notebooks</li>
        <li>Fix dumb non-reactivity bugs</li>
        <li>Add settings menu</li>
        <li>Add learning tools</li>
        <li>(maybe) mobile app</li>
      </ul>
    </div>

    <h2>Conclusion</h2>

    <p>
      AmA is a great tool, and serves it's purpose for those, who need it. I can tell from experience, that keeping a vocabulary book organized it a huge pain. If I ever learn a new language, then I'll DEFINITELY use it, because it encapsulates that feeling of keeping track of vocabulary yourself pretty good, while also making it easier. That's... basically it
    </p>

  </ProjectContent>

  <Footer/>
</div>

</template>