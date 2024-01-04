<template>
  <div>
    <h1>Kang2 Version 1.1!</h1>

    <p>I have been on a break for the past month. Lumina-Engine seriously burned me out after coding for hours each day for so long. Well this is over (for now) and I paused my work on it for a while and instead continued THIS. I've added a couple of things and fixes a bunch of weird bugs, which aren't really worth mentioning.</p>

    <p>So there are basically two major updates. Number one: </p>

    <p>I've wanted to add classes and properties since the beginning. But after thinking about it I figured, that adding things like inheritance would be more pain than I'd like to tolerate SO I wanted to go the "Rust route". That is have something like a pseudo-class with the most essential things I use myself and nothing more. So what would you name this? I thought of how I learned what a Class is, by imagining it as a plan for a house. So the naem "structure" came in my mind. But that's way too long, so I shortened it to just "struct", which made me realize where the name came from for Rust and-or C. After some work, which was less than expected, I present to you, the <code>struct</code>!</p>

    <center>
      <img src="./images/kang2structcode.png" alt="Kang2 Struct Code">
    </center>

    <p>
      This is how you define them. There are properties and methods, which you can both use. Well they function like they're supposed to. From structs you can create instances, which are basically just copies of the struct, which you can use. It's like Python and Dart classes, but without inheritance. I think it's a good compromise. To create an instance, just do it like this:
    </p>

    <center>
      <img src="./images/kang2structinstance.png" alt="Kang2 Struct Instance">
    </center>

    <p>
      Adding point notation was probably the hardest thing, which is REALLY surprising. I always thought classes or structs would be the hardest thing to add, but to. Structs as a whole were way less than anticipated. It was basically just a mix of expanding of what's there and just using the same code as for functions. Point notation was a whole different story. I had to add a new type of token, which is a dot. This was a pain, because I had to add it to the lexer, parser and interpreter. But it works now and I'm happy with it. If I try to access a property or method, which doesn't exist, it will throw an error.
    </p>

    <p>
      This actually leads me to major feature No. 2: Error handling. I'm more proud of this than structs, even though it is something you'd just expect. This is how it looks:
    </p>

    <center>
      <img src="./images/kang2errorhandling.png" alt="Kang2 Error Handling">
    </center>

    <p>
      Look at these BEAUTIFUL Errors! Just WAY nicer than something like "yeah didn't work cuz something wrong", which was the case before. This is really nice. Since Kang2 is small language, I like how the errors are small and simple (unlike some other langauges ahem ⱼₐᵥₐ). There probably will be a bunch more and I'm sure I missed some cases AND there are likely around 10 million bugs left to fix, but I'm getting there slowly and steadily. I plan on adding support for the win32 nodejs api, so that I can code up some small games like snake or tictactoe. There are also some smaller things I'd like to add and also some REALLY basic and expected stuff like '+=' or just comments, but this is where I'm at right now. I hope you like it and I'll see you in the next one!
    </p>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

  </div>
</template>

<style lang="scss">
</style>