<template>
  <div>
    
    <h1>Kang2's FINAL version, 1.3</h1>

    <p>Kang2 is now just about done. Almost every feature I set out to add is now done and should (hopefully) work.</p>

    <p>So what did I add?</p>

    <h2>1. Primitive types</h2>
    <p>There have been complex types before, with structs but not primitive ones, like string and number. BUT NOW there are</p>

    <center>
      <img src="./stringsplit.png" alt="String split">
    </center>

    <p>For this, there is a built in library, which has all the functions. Speaking of which, Number two:</p>

    <h2>2. Standard library</h2>

    <p>Currently it's very small and doesn't have a lot, because I didn't feel like adding all these features only for me. PLUS they can be added very easily. The most "complete" one is array, just because I used it a bunch of times for the brainfck compiler.</p>

    <center>
      <img src="./stdfolder.png" alt="Array">
    </center>

    <center>
      <img src="./array.png" alt="Array">
    </center>

    <p>So basically when you call some function from this library, it just calls one of these functions and passes the value of the variable as <code>self</code>. This, of course, happens automatically. In the last picture, you can actually see the next thing, which is:</p>

    <h2>Advanced loops</h2>

    <p>Before, the only way to do loops was just this:</p>

    <center>
      <img src="./classicloop.png" alt="Old loop">
    </center>
    
    <p>This is very simple, yes, BUT as soon as you want to actually know the current index, you'd have to do lots of gymnastics</p>
    
    <center>
      <img src="./classicloop2.png" alt="Old loop">
    </center>

    <p>This gets annoying quick, so now we finally have advanced loops, which look like this:</p>

    <center>
      <img src="./advancedloop.png" alt="Advanced loop">
    </center>

    <p>It basically compresses the old way of looping into one line, just like in Java or C. The three fields can be manipulated however you want. The first is just what gets called before the loop starts, the middle is an expression for some condition (could be a function call too) and the last is what gets called after each loop iteration. Very nice indeed</p>

    <h2>Active Reference</h2>

    <p>Active reference is the last and my favorite feature. One thing I really dislike about all these modern language is the lack of a way to explicitly set references.</p>
    <p>In JavaScript it's just set a variable to another and it references it, but you HAVE to know that yourself. So somebody maybe wouldn't know that they reference each other. Also if you DON'T know about it, you may end up creating references where you actually didn't want to and suddenly two variables that should be different just became the same. If you want to copy, you HAVE to copy.</p>

    <p>In Python there's just straight up no way of doing that, apart from either a function that returns the variable or a class that stores the variable, both of which being pretty weird to use. I've read up on how python handles memory and as SOON AS you mutate a variable, that another variable "references" (with an Object for example), the "reference" stays the same, while the actual variabe points to a new field now. This is why Yo-Masta-Nag has the "Container" class, which is just there to store something as a reference. It's highly unintuitive to use and I wish they'd just add an explicit reference.</p>

    <p>Dart has the same problem, you will have to create a wrapper class to reference primitives. Again just dumb</p>

    <p>Fun fact: Because I didn't find anything about references in Python, I asked the nice and friendly community of Stack Overflow, if they had an answer. The nice and friendly community of Stack Overflow gave me basically no answer BUT they directed me in a nice and friendly way of their site and of the "Ask question" button entirely.</p>

    <p>In C# there IS a way, but to this day I haven't figured out how to use it. I'm talking about the <code>ref</code> keyword. Every time I tried it, it just resulted in some long hieroglyphical error</p>

    <p>The only languages where you can actually do that are those low-level languages like C and Rust. Rust has it's borrowing and ownership model, which ACTUALLY allows real references, while C is just barebones manual memory managment with pointers.</p>

    <p>So, what if a language had a way to reference things explicitly? Introducing active reference!</p>

    <center>
      <img src="./activeref.png" alt="Active reference">
    </center>

    <p>Reference any variable only using <code>&</code> and unreference using <code>@</code>. This makes all the problems mentioned above pretty much obsolete. Active references was a feature I always planned to add, since the beginning, which is now almost 2 years ago.</p>

    <h2>The end</h2>

    <p>So what now? I guess I'm finished with Kang2. There are probably still a plethora of bugs and whatever. I could continue and add another thousand things, but I feel like this is enough. The language has been in the back of my mind for the past two years and now I can finally move on to my backlog of unfinished projects. Kang2 has been one of, if not my favorite Project I've done. I'm very proud of it and It's has definitely something of a brag factor. Even though, there is a version 1.0, I really feel like only NOW has it become a full and fleshed out language. So I guess it's time to say</p>

    <center>
      <h3>
        Thank you for reading and goodbye Kang2!
      </h3>

    </center>

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
i {
  font-size: 0.8em;
  color: gray;
  a {
    color: rgb(255, 255, 255);
  }
}

a {
  color: white;
}

h2 {
  flex-direction: row;
}

.small {
  font-size: 0.6em;
}

</style>