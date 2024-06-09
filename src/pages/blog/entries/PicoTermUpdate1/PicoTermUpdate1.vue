<template>
  <div>
    <h1 id="under-construction">This page is under construction!</h1>
    <h1>Pico-Term Major Update!</h1>

    
    <p>
      Hello Everyone, today I finally finished the first major update for
      Pico-Term. I haven't been writing anything on this site for like 3 months
      now, because I've been cooking up some things in the background. Now I'm
      finally back to report what I've been doing.
    </p>

    <p>
      So, the first and most obvious change is how everything looks. Before I
      even say anything about that, here's a screenshot of the new Pico-Term:
    </p>

    <center>
      <img src="./menu.png" alt="Pico-Term Update 1" />
    </center>

    <p>
      As you can see, it's a LOT different than how it used to look.
    </p>

    <center>
      <img src="./old.png" alt="Pico-Term Old" />
    </center>

    <p>
      There's a background, window up top, a menu bar, a bottom bar with a bunch of new information. If you look closely, you'll see that you don't actually get any more raw information (apart from scroll). In terms of keybinds, you actually get much less. But I like it that way, it feels much more like an actual application inside your terminal, rather than just a bunch of printed lines on their own. Before I tested in VsCode all the time, therefore the background looked kind of acceptable, but after seeing it in an actual terminal, I basically hated it. Coming up with this design was actually much harder than it may look. My initial sketch was very well.. ambitious when you look at what I started with.
    </p>

    <center>
      <img src="./sketch.jpg" alt="Pico-Term Sketch" />
    </center>

    <p>
      The biggest new feature would've probably been the Explorer, yet that one was a bit too ambitious for what I'm trying to do here. The rest is pretty much done, if you don't use the menu. The menu USED to work, until I literally disabled the keybind for it. Maybe it still works, but I'm not sure. Soooo now it's just there to make Pico Term look very beautiful.
    </p>


    <h2>Why?</h2>

    <p>
      Why code this update? I said the thing was basically finished and I ALSO said, that I did not like to use Rust at all. So based on that, continuing this project would be a bit weird, so why? Well, it all started when I finished the initial Pico-Term page. I had still lots of frustration left from learning the way of Rust. This language is very tough and unforgiving. If you make one singular mistake, you will know it via the very feared red squiggly line. I knew, that this was actually good instead of getting a bunch of segmentation faults and-or memory leaks. But it's still frustrating to lose all the freedom you had, with languages like JavaScript. Although that one might be a bit too free. Anyway, after boycotting Rust, I started thinking about all this and in the end I have to admit, it was kind of fun. Most languages are very similar in how you write your code. Programming patterns don't change all that much and on a high level, Rust is the same. It has all the standard stuff like if-statements and whatnot, but as soon as you start a serious project, everything changes and that's thanks to one thing: The borrow checker. I've said this before, but this is the such an innovative way to handle memory, BUT it's also very frustrating. I've had to rewire my brain and instincts multiple times, because that's what the Borrow Checker wants. If I'm not happy about it, then I won't be finishing my project. This process of learning how to use this language, felt like I was learning programming all over again and after a while, I started to feel the rewards. As soon as you know how to do things, how to code in Rust in one try with zero compile errors, you really feel good. Before, as soon as I wrote a single line of code, I just waited for the Borrow Checker to complain about something, look at the error, not understand it, visit my friend Stack Overflow, see an answer, not understand it, CTRL+C CTRL+V, compile, see another completely different error, repeat. Coding like this, just solving errors without even understanding them at all, is something I often see beginners do, so it was really shocking to see, that I myself can be like that too.
    </p>

    <p>
      So I like Rust now. Having a Systems Language on your belt is very useful and is in my opinion something every developer should do. The compiled size of Pico-Term came to around 400kb, which is literally the smallest application I've ever made. You won't get this small or efficient with anything else really, besides other Systems Languages of course. 
    </p>

    <p>
      My second reason for continuing to work on this is this here -> ╭─────╮ <br />
      What is this, you might think? Well, it's a part of a box with rounded corners. Not just any box though, it's made with just characters. Not an image, characters. And what does that mean? It means you can print them IN A TERMINAL. You can literally have straight, uninterrupted lines and boxed with multiple crosses inside and rounded corners IN A TERMINAL. Why did I never know this???
    </p>

    <p>
      My conception of terminals was always very primitive. But after I found out about that, it made me so excited to see what I can do. This makes it possible to create really beautiful UIs in a terminal. Well, in the end I didn't really use it all that much, apart from the line counter on the side. Before it was multiple lines on top of each other, now it's just one straight line, which makes it look WAY better.
    </p>

    <p>
      So after I got my two motivations, I started working on this update. There are still two more projects, I have yet to reveal, because they're quite big. Anyway after like a couple weeks of work, I got this finished, so let's take a look at the new features.
    </p>

    <h2>Yoooo new features</h2>

    <p>First and foremost, as soon as you open it without specifying any file in the terminal, you'll see this.</p>

    <center>
      <img src="./menu.png" alt="Pico-Term Welcome" />
    </center>

    <p>
      You have two choices now, you can either press <code>CTRL+N</code> to just create a new file, or you can press <code>CTRL+O</code> to open any file you want. After doing that, you'll see the main editor window.
    </p>

    <center>
      <img src="./editor.png" alt="Pico-Term Editor" />
    </center>

    <p>
      Here you can type anything you need, just like before
    </p>


    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script setup>
import Hyperlink from '../../../../components/Hyperlink.vue';
</script>

<style>
#under-construction {
  color: red;
  /* background: rgba(255, 255, 0, 0.756); */
  border-radius: 10px;
  text-align: center;
}


</style>
