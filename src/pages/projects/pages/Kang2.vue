
<script setup lang="ts">

import Banner from '../components/Banner.vue';
import PreviewImages from '../components/PreviewImages.vue'
import ProjectContent from '../components/ProjectContent.vue'
import Footer from '../components/Footer.vue'

</script>

<template>

<div class="page">

  <Banner 
    title="Kang2"
    banner="kang2"
    download=""
    github="https://github.com/AchoDev/Kang2/"
    createdOn="03 March, 2022"
    publishedOn="29 January, 2023"
  />

  <PreviewImages
    base="kang2"
    trailer=""
    :images = "[
    ]"
  />

  <ProjectContent>
    <p>
      Kang2 is a high-level, easy to learn programming language. It combines many loved features of other popular languages, while adding new and exciting ideas for future languages to come. It uses NodeJS and is best used for small terminal applications and to see, how a interpreter works under the hood. It's relatively small size makes it easy to tinker with and make new additions.
    </p>

    <h2>
      Documentation
    </h2>

    <!-- in and output -->
    <details>
    <summary>In- and Output</summary>

    <strong>Output</strong> is gotten, by using the <code>log</code> keyword

    <pre>
      <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(230, 192, 123); font-weight:400;">log</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;Hello World!&quot;</span>
            
    <span style="color:rgb(92, 99, 112); font-weight:400;">// CONSOLE</span>
    Hello World!
    </code></pre>

    To get <strong>Input</strong>, the <code>input</code> keyword needs to be used

    <pre>
    <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;">input <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;Name?&quot;</span>

    <span style="color:rgb(92, 99, 112); font-weight:400;">// CONSOLE</span>
    &gt;&gt; Name?</code>
    </pre>

    <blockquote>Both log and input are not functions though, they cannot be invoked in a calculation and do not return anything. They are statements</blockquote>

    <code>input</code> can be saved with the arrow

    <pre>
    <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;">var name
    <span style="color:rgb(230, 192, 123); font-weight:400;">input</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;Name? &quot;</span> -&gt; name

    <span style="color:rgb(230, 192, 123); font-weight:400;">input</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;Age? &quot;</span> -&gt; var age
      
      
    <span style="color:rgb(230, 192, 123); font-weight:400;">log</span> name
    <span style="color:rgb(230, 192, 123); font-weight:400;">log</span> age
      
    <span style="color:rgb(92, 99, 112); font-weight:400;">// CONSOLE</span>

    &gt;&gt; Name? acho
    &gt;&gt; Age?  <span style="color:rgb(209, 154, 102); font-weight:400;">18</span>
      
    <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;acho&quot;</span>
    <span style="color:rgb(209, 154, 102); font-weight:400;">18</span></code>
    </pre>

    <hr>

    </details>

    <!-- variables -->
    <details>

    <summary>Variables</summary>

    Variables in Kang2 are declared with the <code>var</code> keyword, with the <strong>name</strong>, an <strong>equals sign</strong> and the <strong>value</strong> following

    <blockquote>There are no types, rather the variables are declared dynamically</blockquote>

    <pre>
    <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(198, 120, 221); font-weight:400;">var</span> name = <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;acho&quot;</span>
    <span style="color:rgb(198, 120, 221); font-weight:400;">var</span> number = <span style="color:rgb(209, 154, 102); font-weight:400;">10</span>
    <span style="color:rgb(198, 120, 221); font-weight:400;">var</span> condition = <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>
    
    <span style="color:rgb(198, 120, 221); font-weight:400;">var</span> <span style="color:rgb(198, 120, 221); font-weight:400;">array</span> = [<span style="color:rgb(209, 154, 102); font-weight:400;">10</span>, <span style="color:rgb(209, 154, 102); font-weight:400;">20</span>, <span style="color:rgb(209, 154, 102); font-weight:400;">30</span>, <span style="color:rgb(209, 154, 102); font-weight:400;">40</span>]
    <span style="color:rgb(198, 120, 221); font-weight:400;">var</span> arrayValue = <span style="color:rgb(198, 120, 221); font-weight:400;">array</span>[<span style="color:rgb(209, 154, 102); font-weight:400;">1</span>]</code></pre>

    <blockquote>Everywhere, where a value must be put in, calculations are possible</blockquote>

    <pre>
    <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(198, 120, 221); font-weight:400;">var</span> num1 = <span style="color:rgb(209, 154, 102); font-weight:400;">10</span>
    <span style="color:rgb(198, 120, 221); font-weight:400;">var</span> num2 = <span style="color:rgb(209, 154, 102); font-weight:400;">20</span>

    <span style="color:rgb(198, 120, 221); font-weight:400;">var</span> num3 = (num1 + num2) * <span style="color:rgb(209, 154, 102); font-weight:400;">2</span>

    log num3 + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>

    <span style="color:rgb(92, 99, 112); font-weight:400;">// CONSOLE</span>
    <span style="color:rgb(209, 154, 102); font-weight:400;">61</span></code></pre>

    <hr>

    </details>

    <!-- comparisons -->
    <details>

    <summary>Comparisons</summary>

    You can compare two values with these keywords:

    <ul>
      <li>
        <code>==</code>
        <pre>
        <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(230, 192, 123); font-weight:400;">log</span> 10 == 10
        <span style="color:rgb(230, 192, 123); font-weight:400;">log</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;Hello&quot;</span> == <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;World&quot;</span>
        <span style="color:rgb(230, 192, 123); font-weight:400;">log</span> 1 == 2
        
        // CONSOLE
        <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>
        <span style="color:rgb(86, 182, 194); font-weight:400;">false</span>
        <span style="color:rgb(86, 182, 194); font-weight:400;">false</span></code></pre>
      </li>

      <li>
        <code> &gt; &lt; </code>
        <pre>
        <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(230, 192, 123); font-weight:400;">log</span> 10 &lt; 15
        <span style="color:rgb(230, 192, 123); font-weight:400;">log</span> 20 &gt; 30
        
        <span style="color:rgb(230, 192, 123); font-weight:400;">log</span> 10 &gt;= 10
        <span style="color:rgb(230, 192, 123); font-weight:400;">log</span> 10 &lt;= 30 
        
        // CONSOLE
        <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>
        <span style="color:rgb(86, 182, 194); font-weight:400;">false</span>
        <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>
        <span style="color:rgb(86, 182, 194); font-weight:400;">true</span></code></pre>
      </li>

      <li>
        <code>&&</code>
        <pre>
        <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(230, 192, 123); font-weight:400;">log</span> 10 == 10 &amp;&amp; 20 == 20
        <span style="color:rgb(230, 192, 123); font-weight:400;">log</span> 1 &gt; 2 &amp;&amp; 10 == 10
        
        // CONSOLE
        <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>
        <span style="color:rgb(86, 182, 194); font-weight:400;">false</span></code></pre>
      </li>
    </ul>

    <hr>

    </details>

    <!-- conditions -->
    <details>

    <summary>Conditions</summary>

    <h3>Conditions</h3>

    Conditions can be used with the <code>if</code> keyword

    <blockquote>Note that Kang2 doesn't use parenthesis, unlike other languages</blockquote>

    <pre>
    <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(198, 120, 221); font-weight:400;">if</span> <span style="color:rgb(209, 154, 102); font-weight:400;">10</span> == <span style="color:rgb(209, 154, 102); font-weight:400;">10</span> {
        <span style="color:rgb(230, 192, 123); font-weight:400;">log</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;hello&quot;</span>
    }

    <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> <span style="color:rgb(230, 192, 123); font-weight:400;">input</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;what is your name?&quot;</span> == <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;acho&quot;</span> {
        <span style="color:rgb(230, 192, 123); font-weight:400;">log</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;hello acho!&quot;</span>
    }</code></pre>

    Get an <strong>else if</strong> with the <code>elseif</code>- and a final <strong>else</strong> statement with the <code>else</code> keyword

    <pre>
    <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(198, 120, 221); font-weight:400;">if</span> <span style="color:rgb(209, 154, 102); font-weight:400;">10</span> == <span style="color:rgb(209, 154, 102); font-weight:400;">20</span> {
        <span style="color:rgb(230, 192, 123); font-weight:400;">log</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;5 + 5 = 20&quot;</span>
    } <span style="color:rgb(198, 120, 221); font-weight:400;">elseif</span> <span style="color:rgb(209, 154, 102); font-weight:400;">10</span> == <span style="color:rgb(209, 154, 102); font-weight:400;">30</span>{
        <span style="color:rgb(230, 192, 123); font-weight:400;">log</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;5 + 5 = 30&quot;</span>
    } <span style="color:rgb(198, 120, 221); font-weight:400;">else</span> {
        <span style="color:rgb(230, 192, 123); font-weight:400;">log</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;omg&quot;</span>
    }</code></pre>

    <hr>

    </details>

    <!-- loops -->
    <details>

    <summary>Loops</summary>
    <h3>Loops</h3>

    The <code>loop</code> keyword is needed to use <strong>loops</strong>

    <blockquote>To <strong>loop</strong> for a specific amount of times, just a number is necessary</blockquote>

    <pre>
    <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(198, 120, 221); font-weight:400;">loop</span> <span style="color:rgb(209, 154, 102); font-weight:400;">3</span> {
        log <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;Hello&quot;</span>
    }

    <span style="color:rgb(92, 99, 112); font-weight:400;">// CONSOLE</span>
    <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;Hello&quot;</span>
    <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;Hello&quot;</span>
    <span style="color:rgb(152, 195, 121); font-weight:400;">&quot;Hello&quot;</span></code></pre>

    <blockquote>Unlike other programming languages, there is no <strong>for</strong>- and <strong>while</strong>, rather the <code>loop</code> combines both of those COMING SOON</blockquote>

    <hr>

    </details>

    <h2>How it works</h2>

    <p>Basically one block of code is called a <strong>Statement</strong>. This can be everything from just a small <code>"Hello World!"</code> Output, to a whole giant function. These Statements are saved into a Statement Sequence, which is just a list of <strong>Statements</strong>. Now what's important is that every <strong>Statement Sequence</strong> has it's own Symbol Table, which means it saves new Variables locally. This Table has a reference to it's parent, but not backwards. So it's just going upwards.</p>

    <p>This is easily represented by a <strong>Function</strong>, within the global scope. We'll just call it <code>getSmt()</code>. If a <strong>Variable</strong> is now declared outside <code>getSmt</code>, then itself and all other Functions gave access to it, due to them having a reference, to their parents Table, which now translates to the global scope. But if a <strong>Variable</strong> is declared within <code>getSmt</code>, then just it has access, because the parent, doesn't have a reference, therefore it doesn't know it exists.</p>

    <p>Everytime a <strong>Function</strong> is called, a new Table is created. This also counts for <strong>Loops</strong> and <strong>Conditions</strong>. This also means, that a Variable inside a function can only be taken out by either a <code>return</code> or a mutation of another Variable, which lies higher in the Table-Tree.</p>

    <p>Now going back, every <strong>Function</strong> has it's own <strong>Statement Sequence</strong>, which holds it's own <strong>Symbol Table</strong>. The global scope itself can be seen as a big <strong>Function</strong>, which is just called instantely.</p>

    <p>With that said, the language has a hierarchy. At the top is the <strong>Statment Sequence</strong>, with the <strong>Statement</strong> just below that. Up until now, there is only a total of eight possible <strong>Statements</strong>. These include:</p>

    <div class="list">
      <ul>
        <li>Assigning a new Variable</li>
        <li>Creating a new Function</li>
        <li>Mutating an existing Variable</li>
        <li>Logging Something</li>
        <li>Returning anything</li>
        <li>Getting Input</li>
        <li>Invoking a Loop</li>
        <li>Checking a Condition</li>
      </ul>
    </div>

    <p>If there is not one of those written, it will lead to an <strong>error</strong>.</p>

    <p>Below that is the <strong>Expression</strong>. One of those is used, when there is any type of value, like an <strong>argument</strong> or the value for a new <strong>Variable</strong>. This part of the hierarchy is there to provide calculations, that are done right. Here we have:</p>

    <div class="list">
      <ul>
        <li>Addition</li>
        <li>Subtraction</li>
        <li>Any type of comparison</li>
      </ul>
    </div>

    <p>After that comes the second to last one, which is the <strong>Term</strong>. This includes:</p>

    <div class="list">
      <ul>
        <li>Multiplication</li>
        <li>Division</li>
        <li>Modulo</li>
      </ul>
    </div>

    <p>And the last one is the <strong>Factor</strong>. This one has:</p>

    <div class="list">
      <ul>
        <li>Positive and negative numbers</li>
        <li>Partenthesis</li>
        <li>Strings</li>
        <li>Variable references</li>
        <li>Function calls</li>
        <li>Booleans</li>
      </ul>
    </div>

    <p>All these layers are there to provide a foundation, on which to build an easy to understand <strong>parser</strong>, which takes all the tokens, generated by the <strong>lexer</strong> and turning them into a huge <strong>Syntax Tree</strong></p>

    <p>To calculate all multiplications before any additions for example, every <strong>Node</strong> in the Tree has one purpose, like adding two Numbers. Now the <strong>Interpreter</strong>, which traverses this tree through every branch, sees that two <strong>Nodes</strong> have to be added together and opens them up. Inside it finds a multiplication with two other <strong>Nodes</strong>. And he opens them up again. Now he finds just a <strong>Number</strong>. This Number is then <code>returned</code> and multiplied with the other one. The Result is now added to the other one and we have our addition, with the multiplication being done first.</p>

    <p>While the Interpreter goes inside every <strong>Node</strong>, like creating a new <strong>Variable</strong> or calling a <strong>Function</strong> in the end, it went through every branch and is done.</p>

    <p>All this may be a bit complicated, but once the basics get into someones head, it's actually way easier than the general assumption is.</p>

    <h2>Why I made it</h2>

    <p>I was initially motivated to create a programming language after I saw the <a href="https://github.com/Spu7Nix/SPWN-language" target="_blank">SPWN-language</a>, made by Spu7Nix. I didn't even look up, how programming languages work at all, instead I just went head-first into my first an... attempt. Since I didn't have any Idea what I was doing and I was using Java for some misterious reason, It failed miserably.</p> 
      
    <p>A couple months later, I saw <a href="https://www.youtube.com/watch?v=dY6jR52fFWo&ab_channel=SebastianLague" target="_blank">this</a> Video by Sebastian Lague, where he created a small language too. This got my motivation up again, which lead me to look up how a programming language is structured. I followed a simple tutorial in the beginning, to get the basics.</p>
      
    <p>What I needed to know was, how the abstract syntax tree works and how traverse one with an interpreter. Compilation was one step too far for me, since I didn't aim for a quote unquote "professional" or very serious language. As soon as I understood the most important, foundational parts of an interpreter, I diverged from that tutorial, to go on my own. After a lot of brutal months, hard work and dedication, I had somewhat of a finished product. It's still very buggy, but I'll definitely come back one day and fix those and add certain features. It took my half a year in the end to get that and I am very proud. Maybe one day it'll be of use to anybody.</p>

    <div id="roadmap">
      <ul>
        <li>Fix weird bugs</li>
        <li>Add advanced loops</li>
        <li>Add .kg extension reader</li>
        <li>Line and Character on error</li>
        <li>Classes</li>
        <li>Make browser playground on this site</li>
      </ul>
    </div>

    <h2>Conclusion</h2>

    <p>Kang2 is best used either as a toolbox for someone interested in the inner workings of programming languages or someone who is an absolute beginner, due to there being some features catered to those people.</p>

    <p>In the end it's just a student project and shouldn't be taken to seriously. The language doesn't go to deep and isn't really meant to be adapted into the mainstream, but the ideas themselves could be.</p>
  </ProjectContent>

  <Footer/>

</div>

</template>