
<template>
    <div>
        <h1>Lumina-Engine: An early look</h1>

        <p>
            I've been working on Lumina-Engine for the last two weeks and already came pretty far. The CORE concepts, which include a physics-system and the 'GameObject-Component' model, that I straight up just stole from Unity. Since the Engine underwent that huge fiasco a couple months ago, why not switch to Lumina? It's basically the same (it's not) and WAY better than Godot or Unreal (it's not)
        </p>

        <h2>How it started</h2>

        <p>Back then, when I started development on this, it was just the engine behind Yo-Masta-Nag, that I made up on the fly. When I needed something, I made it. After some time I realized that my approach to different scenes and everything was kind of bad. Since I didn't think of scalability of all, like I always do, I just continued how I started with bare pygame rendering and nothing else. Well at least I had a working demo. After that I implemented a new system, where the Objects, rendering and logic is seperated for each scene. And that's where I left it until today.</p>
    
        <center>
            <img src="./images/yomastanag-folders.png" alt="Yo-Masta-Nag Source code">
        </center>


        <p>After implementing the scene where you select your cards, switching to the game didn't work at all. I REALLY wasn't motivated for another round of debugging and fixing a sub-par engine just so my game would even load properly. Instead I decided to just take the engine and ENHANCE it, so that development with pygame could at last not be a huge pain, only a little one. </p>

        <h2>The beginning of Lumina-Engine</h2>

        <p>Now I finally had time to think how to make a usable and enjoyable engine for pygame. After some time I came to the conclusion, that I definitely need independent scenes, that handle everything with... scenes. No more 10 folders with 100 different files that are out in the open. With the power of Objects I could encapsulate everything and abstract it behind a single: <code>scene_name.load()</code> function. Just beautiful.</p>

        <p>Another thing I just HAD to have was, like I said, GameObjects with components and scripts. Honestly, the only major game engine I ever used is Unity, so I was pretty biased to it from the start. Throughout the initial stage, I can't remember why exactly, but I wanted to have a physics engine inside. I tried to code it myself, but very quickly realized that it's WAY, and I mean really WAY more difficult than expected.</p> 
            
        <h2>Box2D</h2>

        <p>After some research, I found out that Unity itself used Box2D for it's 2D physics. So I scrapped the Idea of coding up a whole physics engine and instead, started on implementing Box2D. Luckily, there is a module called 'pybox2d' for python, that was made around 10 years ago. Along with that, they made a very long written manual on how to use it, which I am pretty grateful for. But in true AchoDev fashion, I skipped everyhing that involved READING a word that isn't code. This, of course, wasn't my most intelligent move and made me miss out on a LOT of crucial information. It didn't work at all. This sucked pretty much all the motivation out of me and I paused development until today.</p>

        <h2>Where I am today</h2>

        <p>After Ultra TicTacToe and AM-Launcher, my cousin gave me a very interesting and unique idea for a new game. I knew I HAD to make this Game a reality and instantely made a game-plan. I already have the core gameplay planned out, now I just needed an Engine. I could either use Unity, PyGame or learn something entirely new. I've always wanted to try SDL2 with C++, so this was a contender. Unity felt way to big and bulky as an engine for what I'm trying to do. Plus I'm not really skilled at all as a Unity developer. I always feel like I'm doing something wrong or inefficient, which is definitely my own fault, but still I enjoy making my own stuff way more. The last one: PyGame. Using it itself was a definite no, but I still had my engine from back then. I decided to use Lumina for that game.</p>

        <p>So, my decision was made and I got started, repairing this engine. After around one or two days, I got it working, like I wanted. I was so impressed, by just how much I had compressed the thing that used to take hundrets of lines, that I made a showcase video.</p>

        <center>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7o9mfmTic7c?si=1cNqb1gbgIuwNRfS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </center>


        <p>In the video, you can see that the Box2D still doesn't work, BUT one main component of the engine was: A working camera, with non-pixel sizes. In pygame, you draw your sprites with absolute pixel positioning, but one unit is seen as one meter in Box2D, so I had to have a camera that can scale up and down dynamically and have the Window draw everything based on that. This was one of the things, I skipped in my initial Box2D implementation. </p>

        <p>Now the sized were normal and I could finally add physics. This surprisingly only took around one day. And again, I was so impressed, that I made a new video.</p>

        <center>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gtWy3MKBa6Q?si=BOEOejARiJlHC8bV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </center>


        <p>This was 9 days ago. In that time, most of my progress came from core components and inner workings that are too boring to talk about. So instead, I made something yesterday and today, which is definitely a MAJOR game-changer (no pun intended) for development with pygame. It's not ready for presentation yet, but soon.</p>

        <p>Developing with pygame involves manually drawing everything to the screen and then looking at it in an actual game window. So what if you had a real inspector, that lists all objects, their components and a native console. This is something I am still working on, but it should be presentable in about one week, maybe?</p>

        <h2>Console</h2>

        <p>The one thing I CAN show is: A console!</p>

        <center>
            <img src="./images/lumina-console.png" alt="Lumina Engine Console Preview">
        </center>

        <p>Press <code>0</code> to open the console. To print something, just type <code>console.log('whatever')</code>. In this example, I just made it so every time I press <code>H</code>, it just prints 'hello achodev.me!'</p>

        <code>scene.add_event(KeyEvent('h', lambda: console.log('hello achodev.me!')))</code>

        <p>This is pretty straight forward and just makes it easier to run the game in full screen and see a console at the same time. The more interesting thing is the watcher at the top. With it you can tell it to watch any variable and have it reflect any changes. This is SUCH a great feature. I no longer had to print a value one trillion times in my console, here I see it when I need it. For the example, <code>camX</code>, <code>camY</code> and <code>camSize</code> just represent the position and scale of the camera. For that, you just have to use <code>console.watch()</code></p>

        <br>

        <code>console.watch(lambda: scene.camera.transform.get_position().x, 'camX')</code> <br>
        <code>console.watch(lambda: scene.camera.transform.get_position().y, 'camY')</code> <br>
        <code>console.watch(lambda: scene.camera.transform.get_size(), 'camSize')</code> <br>

        <h2>Conclusion</h2>

        <p>Yeah, that's all I have to show for the past two weeks. I'm working non-stop with more technical, inner workings of the engine. I finished a lot of important things, that one would expect from an engine like this. It takes lots of time though, but I finished most of it. My main focus now lies on that super-secret new game-changing feature. If this works out, like I hope it will. This feature alone will bring this pygame game-engine a lot closer to something like Unity than pygame or SDL2, which makes me happy to know and also motivated to continue. I think I should finish the entire engine in around one month from now. My goal is to get the engine out before 2024, as my last project for this incredible year, kind of like a send off. Well, see ya</p>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

    </div>
</template>

<script setup></script>

<style></style>