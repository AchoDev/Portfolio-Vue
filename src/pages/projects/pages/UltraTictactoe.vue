<script setup lang="ts">

import Banner from '../components/Banner.vue';
import PreviewImages from '../components/PreviewImages.vue'
import ProjectContent from '../components/ProjectContent.vue'
import Footer from '../components/Footer.vue'

</script>

<template>

<div class="page">

  <Banner 
    title="Ultra TicTacToe"
    banner="ultra-tictactoe"
    download="https://achodev.itch.io/ultra-tictactoe"
    github="https://github.com/AchoDev/Ultra-TicTacToe/"
    createdOn="31 August, 2023"
    publishedOn="10 September, 2023"
  />

  <PreviewImages
    base="ultra-tictactoe"
    trailer="https://www.youtube.com/embed/yLtZsmzjytA?si=Fxyi705xYXuDF3VV"
    :images = "[
      'menu.gif',
      'nightgame.gif',
      'classroomgame.gif',
    ]"
  />


  <ProjectContent>
    <p>
      Ultra Tic-Tac-Toe is a (kind of) fun multiplayer game, that replicates the real life Tic-Tac-Toe spin-off "Super Tic-Tac-Toe". It's like the original pen and paper game with the classic 3x3 field, but you have nine of those.
    </p>

    <blockquote>
      Basically a big Tic-Tac-Toe field with a bunch of smaller Tic-Tac-Toe fields inside each cell.
    </blockquote>


    <h2>
      Game Rules
    </h2>

    <p>
      Ultra Tic-Tac-Toe borrows it's ruleset from 'Super Tic-Tac-Toe'. The Gamefield consists of one big Tic-Tac-Toe fields, that has nine smaller games of Tic-Tac-Toe in each of it's cells. The host starts and can place their marker wherever they want. The cell they choose to place their marker, determines, where the other player is allowed to place theirs next. If they choose to place theirs in the middle game on the <strong>top right cell</strong>, the other player <strong>must</strong> place their marker in the <strong>top-right game</strong>. If they now place in the middle, your the other person has to play in the middle game.
      
      This continues until one of the players gets three in a row one of the nine games. When that happens, they mark the <strong>entire cell</strong> for themselves. If a player happens to place his marker, where the game is already won by someone, the other player can choose any place to put his marker, just like in the beginning.
      
      The goal for both players is to win enough small games, to line up three games in a row.
    </p>

    <h2>
      How to play
    </h2>

    <div class="list">
      <ol>
        <li>
          Install the game <a href="https://achodev.itch.io/ultra-tictactoe">here</a> on itch.io or directly from GitHub
        </li>
        <li>
          Install RadminVPN or similar software and Launch
        </li>
        <li>
          Connect to the same network with whoever you want to play against
        </li>
        <li>
          If you're the host, start the game, select a name and profile picture and click on <i>'Host'</i>
        </li>
        <li>
          If your enemy is the host, enter their respective IP-Address from RadminVPN and click on <i>'Join'</i>
        </li>
      </ol>
    </div>


    <h2>
      How it works
    </h2>

    <p>
      The Game was made with Flutter, which may seem like a strange choice, if you compare it to libraries, that are purposefully made for Videogames, like [Lumina Engine]('google.com'). Before making this game, I was working on Shop-Up and learning Flutter whilst doing so. One day I heard about Super Tic-Tac-Toe and was instantly fascinated by it. Tic-Tac-Toe has always been a fun, but shallow game for me. Now seeing it with a new layer of depth made me pretty excited, so I tried it in an online whiteboard software and it felt pretty anticlimactic. Then and there, I decided to put Shop-Up on a halt and start this small sideproject for three reasons:
    </p>

    <div class="list">
      <ol>
        <li>
          The one I just described
        </li>
        <li>
          I never made a multiplayer game before this
        </li>
        <li>
          I wanted to learn more about Flutter
        </li>
      </ol>
    </div>


    <p>
      In the beginning my estimate was, that this game was going to take about one weekend. This _could_ have been true, if I hadn't had a bunch of Ideas for new features. Also easy to use multiplayer, even on a level as simple as this, was <strong>way</strong> harder than I anticipated. I'll come to, what I mean with "easy to use" a bit later.
    </p>

    <h2>
      How I made it
    </h2>

    <p>
      The basic game structure, with the big field was done in a single day. I didn't use a canvas at all, because I thought just using regular widgets would make this process more streamlined and easier, but a bit more cookie-cutter, which is a compromise I was very willing to accept for a small sideproject like this.
    </p>

    <h3>
      Day 1
    </h3>

    <p>
      I used a Gridview with 3 columns and 3 rows, that holds a "SmallTTTField" Widget in each of it's cells. This is the widget for each small Game. A small Field also has a Gridview with 9 Buttons instead of Fields. Each single Field knows it's position on the big grid and each small button knows it's position in it's small Game. So when you press one of those buttons, it calls a function from the small field with it's own local position, which then calls a function on the big field, with it's global position.
    </p>

    <pre>
      <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(92, 99, 112); font-weight:400;">// SmallTTTFieldButton.dart</span>
      
      <span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">void</span> <span style="color:rgb(97, 174, 238); font-weight:400;">checkEnemyMark</span>()</span> {
        setState(() {
          selected = <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>;
          selectedBy = <span style="color:rgb(209, 154, 102); font-weight:400;">2</span>;
        });
      }
      
      <span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">void</span> <span style="color:rgb(97, 174, 238); font-weight:400;">checkMark</span>()</span> {
        <span style="color:rgb(198, 120, 221); font-weight:400;">if</span>(selected) <span style="color:rgb(198, 120, 221); font-weight:400;">return</span>;
      
        setState(() {
          selected = <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>;
          selectedBy = <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>;
          widget.checkWinner();
          widget.checkPosition(widget.localPosition);
        });
      }</code></pre>

    <pre>
      <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(92, 99, 112); font-weight:400;">// SmallTTTField.dart</span>
      
      buttons = [
          <span style="color:rgb(198, 120, 221); font-weight:400;">for</span>(<span style="color:rgb(198, 120, 221); font-weight:400;">int</span> i = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i &lt; <span style="color:rgb(209, 154, 102); font-weight:400;">9</span>; i++)
              <span class="hljs-title function_ invoke__">SmallTTTFieldButton</span>(
                  <span style="color:rgb(209, 154, 102); font-weight:400;">key</span>: buttonKeys[i],
      
                  <span style="color:rgb(209, 154, 102); font-weight:400;">selectedAsset</span>: widget.checkedAsset,
                  <span style="color:rgb(209, 154, 102); font-weight:400;">enemySelectedAsset</span>: widget.enemyCheckedAsset,
      
                  <span style="color:rgb(209, 154, 102); font-weight:400;">localPosition</span>: i,
                  <span style="color:rgb(209, 154, 102); font-weight:400;">checkPosition</span>: (pos) {
                      widget.<span class="hljs-title function_ invoke__">checkField</span>(widget.localPosition, pos);
                  },
      
                  checkWinner: () {
                      <span class="hljs-title function_ invoke__">checkWinner</span>();
                      widget.<span class="hljs-title function_ invoke__">checkGlobalWinner</span>();
                  },
      
                  hoveredColor: widget.hoveredColor,
              )
      ];</code></pre>

    <pre>
      <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(92, 99, 112); font-weight:400;">// GameScreen.dart</span>
      
      <span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">void</span> <span style="color:rgb(97, 174, 238); font-weight:400;">checkField</span>(<span style="color:rgb(171, 178, 191); font-weight:400;"><span class="hljs-built_in">int</span> globalPosition, <span class="hljs-built_in">int</span> localPosition</span>)</span> {
        <span style="color:rgb(198, 120, 221); font-weight:400;">if</span>(!mounted) <span style="color:rgb(198, 120, 221); font-weight:400;">return</span>;
        setState(() {
          yourTurn = <span style="color:rgb(86, 182, 194); font-weight:400;">false</span>;
      
          setPhase(<span style="color:rgb(209, 154, 102); font-weight:400;">1</span>);
      
          movePlayed = <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>;
      
          <span style="color:rgb(198, 120, 221); font-weight:400;">if</span>(fieldKeys[localPosition].currentState!.checked) {
            currentField = <span style="color:rgb(209, 154, 102); font-weight:400;">9</span>;
          } <span style="color:rgb(198, 120, 221); font-weight:400;">else</span> {
            currentField = localPosition;
          }
      
          client.SocketClient.makeMove(globalPosition, localPosition);
        });
      
      
        print(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;checked position g: $globalPosition l: $localPosition&#x27;</span>);
      }</code></pre>

    <p>
      The big field functions as the "Game Manager" here. It would've been a better approach, if instead I had made a dedicated GameManager class, but I didn't. The GameManager then sets the next active Field to be <strong>the same</strong> number, as the <strong>local field</strong> provided by the function call.
      
      The "currentField" boolean describes, which Field is currently active. The rules say, that the position of the mark on a game translates to the field you're allowed to play in next. If currentfield is between 0-8, then only the respective field is active. If it's 9, then the player is allowed to play anywhere.
    </p>

    <pre>
      <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(209, 154, 102); font-weight:400;">child:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">SmallTTTField(</span>
        <span style="color:rgb(209, 154, 102); font-weight:400;">key:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">fieldKeys[i],</span>
        <span style="color:rgb(209, 154, 102); font-weight:400;">checkField:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">checkField,</span>
        <span style="color:rgb(209, 154, 102); font-weight:400;">checkGlobalWinner:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">checkWinner,</span>
      
        <span style="color:rgb(209, 154, 102); font-weight:400;">localPosition:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">i,</span>
        <span style="color:rgb(209, 154, 102); font-weight:400;">currentlySelected:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">currentField</span> <span style="color:rgb(152, 195, 121); font-weight:400;">==</span> <span style="color:rgb(209, 154, 102); font-weight:400;">9</span> <span style="color:rgb(152, 195, 121); font-weight:400;">||</span> <span style="color:rgb(152, 195, 121); font-weight:400;">currentField</span> <span style="color:rgb(152, 195, 121); font-weight:400;">==</span> <span style="color:rgb(152, 195, 121); font-weight:400;">i,</span> <span style="color:rgb(152, 195, 121); font-weight:400;">//</span> <span style="color:rgb(152, 195, 121); font-weight:400;">check</span> <span style="color:rgb(152, 195, 121); font-weight:400;">if</span> <span style="color:rgb(152, 195, 121); font-weight:400;">field</span> <span style="color:rgb(152, 195, 121); font-weight:400;">is</span> <span style="color:rgb(152, 195, 121); font-weight:400;">either</span> <span style="color:rgb(152, 195, 121); font-weight:400;">the</span> <span style="color:rgb(152, 195, 121); font-weight:400;">same</span> <span style="color:rgb(152, 195, 121); font-weight:400;">as</span> <span style="color:rgb(152, 195, 121); font-weight:400;">it&#x27;s</span> <span style="color:rgb(152, 195, 121); font-weight:400;">number,</span> <span style="color:rgb(152, 195, 121); font-weight:400;">or</span> <span style="color:rgb(209, 154, 102); font-weight:400;">9</span> <span style="color:rgb(152, 195, 121); font-weight:400;">(every</span> <span style="color:rgb(152, 195, 121); font-weight:400;">field</span> <span style="color:rgb(152, 195, 121); font-weight:400;">can</span> <span style="color:rgb(152, 195, 121); font-weight:400;">play)</span>
      
        <span style="color:rgb(209, 154, 102); font-weight:400;">checkedAsset:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;assets/animations/${widget.map}X&#x27;</span><span style="color:rgb(152, 195, 121); font-weight:400;">,</span>
        <span style="color:rgb(209, 154, 102); font-weight:400;">enemyCheckedAsset:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;assets/animations/${widget.map}O&#x27;</span><span style="color:rgb(152, 195, 121); font-weight:400;">,</span>
      
        <span style="color:rgb(209, 154, 102); font-weight:400;">winningMoves:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">winningMoves,</span>
      
        <span style="color:rgb(209, 154, 102); font-weight:400;">map:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">widget.map,</span>
      
        <span style="color:rgb(209, 154, 102); font-weight:400;">hoveredColor:</span> <span style="color:rgb(152, 195, 121); font-weight:400;">bpmMap[widget.map]![2],</span>
      <span style="color:rgb(152, 195, 121); font-weight:400;">)</span></code></pre>

    <h3>
      Day 2
    </h3>

    <p>
      The next day, I started working on multiplayer. Like I said before, I used SocketIO, which is a JavaScript library, that establishes websockets, which allow you to create real-time bidirectional communication between a server and a client.
    </p>

    <center>
      <img src="/projects/ultra-tictactoe/socketio.jpeg" alt="SocketIO Logo">
    </center>


    <p>
      What basically needed to happen was, when you mark a field, a packet, containing the information for where you placed it had to be sent to the server, which then sends it to the other player. The other player then could see that you placed something, and place something in return. Due to the simplicity of information for Super TicTacToe, the server-side code ended up being very short and easy to understand. I did not need to use any client-side prediction, packets every second or anything like that.
    </p>

    <pre>
      <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(92, 99, 112); font-weight:400;">// Server.dart</span>
      
      <span style="color:rgb(198, 120, 221); font-weight:400;">class</span> <span class="hljs-title class_">_Player</span> {
        <span style="color:rgb(198, 120, 221); font-weight:400;">final</span> String username;
        <span style="color:rgb(198, 120, 221); font-weight:400;">final</span> int picture;
        <span style="color:rgb(198, 120, 221); font-weight:400;">final</span> Socket socket;
        <span style="color:rgb(198, 120, 221); font-weight:400;">final</span> bool isHost;
      
        <span style="color:rgb(198, 120, 221); font-weight:400;">const</span> _Player({required <span style="color:rgb(198, 120, 221); font-weight:400;">this</span>.username, required <span style="color:rgb(198, 120, 221); font-weight:400;">this</span>.picture, required <span style="color:rgb(198, 120, 221); font-weight:400;">this</span>.socket, required <span style="color:rgb(198, 120, 221); font-weight:400;">this</span>.isHost});
      }
      
      <span style="color:rgb(198, 120, 221); font-weight:400;">class</span> <span class="hljs-title class_">GameServer</span> {
        static Server io = Server();
      
        static stopServer() {
          io.close();
          io = Server();
      
          _players = List.empty(growable: <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>);
        }
      
        static List&lt;_Player&gt; _players = List.empty(growable: <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>);
        static String currentMap = <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;&#x27;</span>;
      
        static bool startServer() {
          <span style="color:rgb(198, 120, 221); font-weight:400;">try</span>{
            io.on(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;connection&#x27;</span>, (socket) {
              print(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;player connected&#x27;</span>);
      
              socket.on(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;startgame&#x27;</span>, (<span style="color:rgb(198, 120, 221); font-weight:400;">data</span>) {
                <span style="color:rgb(198, 120, 221); font-weight:400;">if</span>(socket == _players[<span style="color:rgb(209, 154, 102); font-weight:400;">0</span>].socket) {io.emit(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;hoststartgame&#x27;</span>, <span style="color:rgb(198, 120, 221); font-weight:400;">data</span>);}
              }); 
      
              socket.on(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;playermove&#x27;</span>, (res) {
                io.emit(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;playermove&#x27;</span>, res);
              });
      
              socket.on(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;changeMap&#x27;</span>, (<span style="color:rgb(198, 120, 221); font-weight:400;">data</span>) {
                currentMap = <span style="color:rgb(198, 120, 221); font-weight:400;">data</span>;
      
                socket.broadcast.emit(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;hostchangedmap&#x27;</span>, <span style="color:rgb(198, 120, 221); font-weight:400;">data</span>);
              });
      
              socket.on(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;playerInformation&#x27;</span>, (<span style="color:rgb(198, 120, 221); font-weight:400;">data</span>) {
      
                bool isHost = _players.isEmpty;
      
                _players.add(_Player(
                  username: <span style="color:rgb(198, 120, 221); font-weight:400;">data</span>[<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;username&#x27;</span>],
                  picture: <span style="color:rgb(198, 120, 221); font-weight:400;">data</span>[<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;picture&#x27;</span>],
                  socket: socket,
                  isHost: isHost,
                ));
      
                print(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;sending gameinfo&#x27;</span>);
      
                socket.emit(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;gameinformation&#x27;</span>, {
                    <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;you&#x27;</span>: {
                      <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;username&#x27;</span>: <span style="color:rgb(198, 120, 221); font-weight:400;">data</span>[<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;username&#x27;</span>],
                      <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;picture&#x27;</span>: <span style="color:rgb(198, 120, 221); font-weight:400;">data</span>[<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;picture&#x27;</span>],
                      <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;isHost&#x27;</span>: isHost
                    },
                    <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;enemy&#x27;</span>: isHost ? <span style="color:rgb(86, 182, 194); font-weight:400;">null</span> : {
                      <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;username&#x27;</span>: _players[<span style="color:rgb(209, 154, 102); font-weight:400;">0</span>].username,
                      <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;picture&#x27;</span>: _players[<span style="color:rgb(209, 154, 102); font-weight:400;">0</span>].picture,
                      <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;isHost&#x27;</span>: <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>
                    },
                    <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;map&#x27;</span>: currentMap,
                  }
                );
      
                socket.broadcast.emit(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;userjoinedlobby&#x27;</span>, {
                  <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;username&#x27;</span>: <span style="color:rgb(198, 120, 221); font-weight:400;">data</span>[<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;username&#x27;</span>],
                  <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;picture&#x27;</span>: <span style="color:rgb(198, 120, 221); font-weight:400;">data</span>[<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;picture&#x27;</span>],
                  <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;isHost&#x27;</span>: isHost,
                });
              });
      
              socket.on(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;disconnect&#x27;</span>, (<span style="color:rgb(198, 120, 221); font-weight:400;">data</span>) {
                _players.removeWhere((player) =&gt; player.socket == socket);
                socket.broadcast.emit(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;playerleave&#x27;</span>, [
                  <span style="color:rgb(198, 120, 221); font-weight:400;">for</span>(_Player player <span style="color:rgb(198, 120, 221); font-weight:400;">in</span> _players)
                    {<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;username&#x27;</span>: player.username, <span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;isHost&#x27;</span>: player.isHost}
                ]);
              });
            });
      
            io.on(<span style="color:rgb(152, 195, 121); font-weight:400;">&#x27;connect_error&#x27;</span>, (e) {
              print(e);
            });
      
            io.listen(<span style="color:rgb(209, 154, 102); font-weight:400;">8000</span>);
      
            <span style="color:rgb(198, 120, 221); font-weight:400;">return</span> <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>;
          } <span style="color:rgb(198, 120, 221); font-weight:400;">catch</span>(e) {
            stopServer();
            <span style="color:rgb(198, 120, 221); font-weight:400;">return</span> <span style="color:rgb(86, 182, 194); font-weight:400;">false</span>;
          }
        }
      }</code></pre>

    <p>
      The multiplayer part was done with that very quickly. After that I had to work on winning and loosing. What happens is, after every move, the field compares its lineup of markers, with each winning move. Once for you, and once for the enemy. If one of you has a winning position (three in a row), you mark the entire field for you. After that, the entire Game Field checks if the fields represent a winning position for either one of you, if yes, then that player wins.
    </p>

    <pre>
      <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;background-color:rgb(40, 44, 52);background:rgb(40, 44, 52);display:block;padding: .5em;"><span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">void</span> <span style="color:rgb(97, 174, 238); font-weight:400;">checkWinner</span>()</span> {
        final List&lt;<span style="color:rgb(230, 192, 123); font-weight:400;">int</span>&gt; currentLayout = List.empty(growable: <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>);
        <span style="color:rgb(198, 120, 221); font-weight:400;">for</span>(<span style="color:rgb(230, 192, 123); font-weight:400;">int</span> i = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i &lt; <span style="color:rgb(209, 154, 102); font-weight:400;">9</span>; i++) {
          currentLayout.<span style="color:rgb(198, 120, 221); font-weight:400;">add</span>(buttonKeys[i].currentState!.selectedBy);
        }
    
        <span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(230, 192, 123); font-weight:400;">bool</span> <span style="color:rgb(97, 174, 238); font-weight:400;">checkAllFields</span>()</span> {
          <span style="color:rgb(198, 120, 221); font-weight:400;">for</span>(<span style="color:rgb(230, 192, 123); font-weight:400;">int</span> j = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; j &lt; <span style="color:rgb(209, 154, 102); font-weight:400;">9</span>; j++) {
            <span style="color:rgb(198, 120, 221); font-weight:400;">if</span>(currentLayout[j] == <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>) <span style="color:rgb(198, 120, 221); font-weight:400;">return</span> <span style="color:rgb(86, 182, 194); font-weight:400;">false</span>;
          }
          <span style="color:rgb(198, 120, 221); font-weight:400;">return</span> <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>;
        }
    
        <span style="color:rgb(198, 120, 221); font-weight:400;">if</span>(checkAllFields()) {
          setState(() {
            checked = <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>;
            checkedBy = <span style="color:rgb(209, 154, 102); font-weight:400;">3</span>;
          });
          <span style="color:rgb(198, 120, 221); font-weight:400;">return</span>;
        }
    
        <span style="color:rgb(230, 192, 123); font-weight:400;">bool</span> _checkSingleMove(List&lt;<span style="color:rgb(230, 192, 123); font-weight:400;">int</span>&gt; move, <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> checkEnemy) {
          <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> counter = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>;
          <span style="color:rgb(198, 120, 221); font-weight:400;">for</span>(<span style="color:rgb(230, 192, 123); font-weight:400;">int</span> j = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; j &lt; <span style="color:rgb(209, 154, 102); font-weight:400;">9</span>; j++) {
            <span style="color:rgb(198, 120, 221); font-weight:400;">if</span>(currentLayout[j] == <span style="color:rgb(209, 154, 102); font-weight:400;">1</span> + checkEnemy &amp;&amp; move[j] == <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>) counter++;
          }
          <span style="color:rgb(198, 120, 221); font-weight:400;">return</span> counter == <span style="color:rgb(209, 154, 102); font-weight:400;">3</span>;
        }
    
        <span style="color:rgb(198, 120, 221); font-weight:400;">for</span>(List&lt;<span style="color:rgb(230, 192, 123); font-weight:400;">int</span>&gt; winningMove <span style="color:rgb(198, 120, 221); font-weight:400;">in</span> widget.winningMoves) {
          <span style="color:rgb(198, 120, 221); font-weight:400;">if</span>(_checkSingleMove(winningMove, <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>)) {
            setState(() {
              checked = <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>;
              checkedBy = <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>;
            });
          }
    
          <span style="color:rgb(198, 120, 221); font-weight:400;">if</span>(_checkSingleMove(winningMove, <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>)) {
            setState(() {
              checked = <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>;
              checkedBy = <span style="color:rgb(209, 154, 102); font-weight:400;">2</span>;
            });
          }
        }
      }</code></pre>

    <center> <p>
      After I was done, I made a short youtube video, showing my progress until now.
    </p> </center>

    <i>
      ultra tictactoe multiplayer test
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JgWpx-lsXUg?si=V7vGWp7nFc7skJWC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </i>


    <h3>
      Day 3 and onwards
    </h3>

    <p>
      After those two days, all I had to do was cleaning up, a good menu screen easy multiplayer hosting, maps and so on. I drew the maps myself, with one of them even having a continuosly moving map, as if you were "walking"
    </p>

    <center>
      <i>
        Palace.png
      </i>
      <img src="/projects/ultra-tictactoe/palace.png" alt="Palace Map">
  
      <i>
        Night.png
      </i>
      <img src="/projects/ultra-tictactoe/night.png" alt="Palace Map">
  
      <i>
        Classroom.png
      </i>
      <img src="/projects/ultra-tictactoe/classroom.png" alt="Classroom Map">
    </center>

  </ProjectContent>

  <Footer/>

</div>

</template>