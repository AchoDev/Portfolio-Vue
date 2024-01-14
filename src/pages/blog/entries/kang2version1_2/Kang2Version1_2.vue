<template>
  <div>
    <h1>Kang2 Version 1.2!</h1>

    <p>I've been working on Kang2 the past week and have finally something to show for it! This update is way bigger than the last one. Let's get into it.</p>

    <br>
    <h2>1. Comments</h2>
    <p>So first and foremost, a very simple feature: <b>Comments!</b>. It's a bit ridiculous how the "full release" of this language DIDN'T have comments. So now, that's done</p>
    <p>They're pretty self explanatory, just use two slashes: <code>//</code></p>

    <center>
      <img src="./comment.png" alt="Comment">
    </center>

    <br>
    <h2><span>2. <code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code> <code>++</code> syntax sugar</span></h2>
    
    <p>This is also very self explanatory. It's just a way to shorten something like <code>number = number + 1</code> to either <code>number += 1</code> or <code>number++</code></p>

    <p>Fun fact: It works internally exactly like this too. When the parser sees e.g. <code>+=</code>, it just changes it up, so it's like the first example above</p>

    <center>
      <img src="./syntaxsugar.png" alt="Syntax Sugar">
    </center>

    <br>
    <h2>2. Static functions and variables</h2>

    <p>This feature probably holds the place for both most useless AND most time consuming to implement</p>
    <p>It's exactly like the name says: Static functions for structs</p>

    <center>
      <img src="./static.png" alt="Syntax Sugar">
    </center>

    <p>The only use this could MAAAYBE have is encapsulate data, so the entire point of oop. The thing is that reminds me of........ Java... and we do not talk about Java</p>
    <p>This provided example is actually a smaller version of a piece of code from Ultra TicTacToe. The thing is it actually makes sense there, since that game was made in Dart.</p>
    <p>Originally this was intended to be used for something else entirely, which I won't spoil right now. When I finished this though, I figured that this approach would most likely violate any sane human mind who dared using it.</p>

    <br>
    <h2>3. Changed 'input' to 'prompt'</h2>

    <p>This change was entirely motivated by the fact, that I like python and would like to copy SOME of it. Only a little bit :)</p>
    <p>What I mean by that is having built in <code>print()</code> and <code>input()</code> functions, that under the hood just use the build in log and input operations. The thing is, the name for print was free, but input wasn't. So I changed it to 'prompt', to enable my beautiful <code>input()</code> function</p>
    <p>You'll see an example in the next addition</p>

    <br>
    <h2>4. Modules and importing</h2>

    <p>This one is the biggest addition BY FAR. I've had to chagne the entire underlying structure of how the language runs, so something like this is actually enjoyable to use.</p>
    <p>I'm sure we all probably know and hate THIS specific error</p>

    <center>
      <img src="./circularimport.png" alt="Import Error"> <br>
      <i><a target="_blank" href="https://www.askpython.com/wp-content/uploads/2023/03/PYTHON-CIRCULAR-DEPENDENCIES-ERROR.-e1678197287479-1024x251.png">https://www.askpython.com/wp-content/uploads/2023/03/PYTHON-CIRCULAR-DEPENDENCIES-ERROR.-e1678197287479-1024x251.png</a></i>
    </center>

    <p>It's a huge pain to fight this in bigger projects, like Lumina Engine. I constantly have to keep a mental map of all modules and what imports what, so I won't create any circular imports.</p>
    <p>A programming language that blew me away with this is Dart. While making Ultra TicTacToe, I could just import anything I wanted, even if it WOULD normally result in a big, ugly circle.</p>
    <p>But it didn't. It just worked like a charm. This is what I wanted for Kang2 aswell. In the beginning I had to think of how you'd do that. My first Idea was a pretty bad one</p>
    <p>My Idea was to just copy paste the code wherever you import it. And this is BY FAR the WORST approach.</p>
    <p>When you import the thing multiple times, which tends to happen in larger projects, you now have multiple copies of the same dependency in your project. This is pretty bad, because not only does this make your app swallow like 5 times as much ram, it also makes it so you have a bunch of copies that all work independently. So you'd have to keep a map of what imports what. Oh and if you'd have a circular import, the code would just be copy pasted into each other until the end of time.</p>

    <p>Obviously, we don't want that, so I had to think of something else. After some thinking and only a <span class="small">little</span> help from my favorite AI friend, I had my solution: First, check everything that's imported in the main file, run that and store it's symbol table (where all functions, variables and structs are stored) as a reference. Now execute the main file and give the interpreter all the imported tables. This is a way better approach than the one above, but the circular problem still remains.</p>

    <p>How did I fix it? As soon as you try to import something, that was already imported somewhere else, it just cancels. The import is added regardless as a reference. Two files import each other, all they have are references, fokin brilliant innit?</p>

    <p>Now, how do you actually use this? Well, it's pretty simple. You just use the <code>import</code> keyword, followed by the path to the file you want to import. The path is relative to the file you're currently in. So if you're in <code>main.k2</code> and you want to import <code>test.k2</code>, you'd just write <code>import test</code></p>

    <center>
      <i>io.kg</i> <br>
      <img src="./io.png" alt="Import">
    </center>
    <br>
    <center>
      <i>main.kg</i> <br>
      <img src="./import.png" alt="Import">
    </center>
    <br>
    <center>
      <i>console</i> <br>
      <img src="./console.png" alt="Console">
    </center>

    <h2>5. Better execution</h2>

    <p>The module and importing thing was the perfect opportunity to introduce a the new way to execute scripts. Now it's just: </p>
    <code>node app.js [your kang2 script].kg</code>

    <h2>6. Visual Studio Code extension</h2>

    <p>Now, in these couple screenshots, you can already see syntax highlighting. Before, I'd just use the one from languages like Swift or C++. But NOW: The OFFICIAL Kang2 Language support!</p>

    <center>
      <img src="./extension.png" alt="Visual Studio Code extension">
    </center>

    <p>This is my first ever extension for Visual Studio Code. It basically does two things: 1. Add some syntax highlighting and 2. Add icons to .kg files. </p>

    <center>
      <img src="./files.png" alt="Icon">
    </center>

    <p>It's still only a <span class="small">only a little bit</span> broken and misses a bunch of tokens like <code>struct</code>. BUT it will get better next update. You can download it, by just searching for "kang2" in the vsc extension marketplace</p>

    <center>
      <img src="./marketplace.png" alt="Marketplace">
    </center>

    <h2>Conclusion</h2>

    <p>There's a bunch of other stuff, that I won't go into detail about, because it's not that interesting, like fixing various bugs again and so on.</p>
    <p>One interesting thing I found is that I will probably have to change the kang2 file type from <code>.kg</code> to something else. Probably <code>.k2</code>. The reason is pretty obvious: <code>.kg</code> is already taken by a language called <a target="_blank" href="https://github.com/kagsa/kagsa">Kagsa</a></p>

    <p>I've looked at the language and how it's syntax and it's very similar to mine. The thing is, it's not just a little bit. The similarities are a bit unsettling honestly.</p>

    <p>Both of us started in May, 2021. Both of us use "func" and "var" to define functions and variables. Both of use use "if" and "elseif". Both of us have a single line token to print out words. For me it's "log", for him it's "write". Both of us have EXACTLY 35 commits to our repos. AND both of us use the ".kg" filetype. His language is a bit more popular than mine and has an official entry for a file type, which is definitely an L for me.</p>

    <p>Like I said, ".k2" is the only contender right now, but it sounds wrong. I'll see</p>

    <p>That was this update, the next step is the final update 1.3. That one will add some things I wanted to have ever since creating this language more than 2.5 years ago, including a standard library, better loops, primitives and fixing the weird syntax highlighting. It'll take me a bit, but this is the final update for now. Kind of like with AchoMatico Launcher.</p>
    <p>I want to finish the open projects and get something working out. The first version of Kang2 is honestly a trainwreck and we do not want to talk about it. After that, who knows. Maybe it'll get another special update or so. Probably just bugfixes. That's it</p>

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