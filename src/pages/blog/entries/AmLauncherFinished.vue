<template>
    <div>
        <h1>Am-Launcher Finished!</h1>

        <p>
            Yesterday I FINALLY finished AchoMatico-Launcher. The process took me around 2 Days, which surprised me alot. But looking back, it's not as unusual as I initlally thought. There was actually one thing, that sped up development about 10 times.
        </p>

        <h2>Reactivity</h2>

        <p>
            Since the Launcher was originally made with vanilla JS without any frameworks to help me in any way, it took way longer than it should have. I also didn't know about <code>tsc --watch</code>, so I just compiled my Typescript files manually <strong>every single time</strong>. As expected, this left a pretty bad taste in my mouth, which led me to not use TypeScript at all, which I regret deeply now. Having to types is definitely not good.
        </p>

        <p>
            However, there was no real reactivity, instead I did everything manually, from loading the files and creating new instances of buttons for the selector on the left, to replacing the text and images every time you select a new app. This really bloated my code with just unnecessary code, just because that's the way of vanilla. It's not like I didn't know about the existance of frameworks like Vue or React, I just didn't want to use them. I thought it would make coding harder. Why? I seriously don't know.
        </p>

        <p>
            What initially opened my eyes to this was actually Flutter. Since it has stateful widgets built in, I used them and it blew me away, just how much easier it makes everything. Just setting a text-widget to display a variable, then changing that variable and boom: The text changed as well. It took me a bit to realize, that big frameworks probably do the same.
        </p>

        <p>
            After that I started learning VueJS. It's intuitiveness and overall desing made it way simpler to learn, than I initially anticipated. It took me only about 2 hours to learn. After that I just used it for another unrelated thing.
        </p>

        <h2>PetiteVue</h2>

        <p>
            Before starting development on this very website, I heard about PetiteVue and decided to use it, as my gateway for reactive websites for my personal projects. It worked well, but I quickly realized, that it's not really made as a framework at all. It's way better as a small support for vanilla JS websites. So scalability with PetiteVue as the Backbone just doesn't work very well. Especially after making my own router, thing became janky very fast. I had to do lots of tricks and little things, so that it didn't fall apart. I just felt that PetiteVue was definitely not made for this kind of Job. I finished nontheless and tried to build, but since my Project was held together by sticks and stones, Vite (My build tool) didn't know what was meant to be included and what not. Since ThreeJS is a module, I had to use a module bundler. So I had to decide, either my fancy 3D Room Homepage, or the single-page-application. I chose neither and just rebuilt everything with regular old VueJS. The original one can still be found on my Github Page.
        </p>

        <p>
            This leads me back to now, where I had my half finished launcher, that was made with vanillaJS. So I decided to use PetiteVUE, because I did not need any module bundlers this time. This is what majorly sped up development, but I also found a problem with it. The script part and HTML part aren't connected at all. When you pass your funcitons and variables to the <code>createApp()</code> functions, they're gone. All you're left with is the original declaration. If you change something in your HTML, it changees only there and if you change something in the script, it changes only there as well. This divide, was something I didn't expect at all and it took me more time, than I'd like to admit to find this out. There is still a commit called "They said it would be reactive but it isn't", which I made after not being able to figure out why it's not working. Looking back, with how JS handles variables and pointers it actually makes a lot of sense. This is why there's <code>ref()</code> in VueJS.
        </p>

        <h2>Process of finishing</h2>

        <p>
            After two days of grinding this out, I got all the things working, that I needed. Even though it has it's quirks, PetiteVue made implementing many features much simpler and straigt forward. Especially the multiple layout feature. Icons were something that took me a lot of time to figure out. But I got it working and now the Icon on your computer is displayed in the app, no selecting every icon manually anymore. On the surface an app launcher seems very simple... well it is, but I find it impressive, just how many features you can add to something like this.
        </p>

        <p>
            In the end, loading and deleting your save-file, which was something I planned on scrapping. The third layout with the big boxes is also something, I just added on the fly. I took it directly from Geforce Experience, with the game menu. When you click one of the boxes, it says 'Starting', which may seem like the launcher itself is starting the app, even though it's just cmd.
        </p>

        <p>
            So now it's finally finished. I have a new Project i'd like to work on, but I need to get Lumina Engine working first. I am still implementing Box2D, which is a major pain in itself, but I'm getting there. The new Project is something very.... exotic. It'll take some time, but in the end it should be a pretty fun game, unlike Ultra TicTacToe
        </p>

        <p>
            So DOWNLOAD NOW (for windows only for now). The BEST launcher ever (this is true)!
        </p>

        <!-- <button class="download">
            
        </button> -->

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>
<script setup lang="ts">
</script>


<style lang="">
    
</style>